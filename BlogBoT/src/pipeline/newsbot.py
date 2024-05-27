from newsapi import NewsApiClient
import google.generativeai as genai
import random
from datetime import datetime
from googleapiclient.discovery import build
from src.utils import savenft

genai.configure(api_key="AIzaSyBa5b8ZuK83ehPi52ua4Ly724ofJHTT5Zk")
model = genai.GenerativeModel("gemini-pro")


class BlogBot:
    def __init__(self):
        self.newsapi = NewsApiClient(api_key="6c301fea1ef24defbad2ce335035a0a8")
        self.all_articles = []
        self.page = 1
        self.sources = self.get_sources_with_categories()

    def get_sources_with_categories(self):
        # Fetch available sources and their categories
        sources = self.newsapi.get_sources(language="en")
        source_categories = {}
        if "sources" in sources:
            for source in sources["sources"]:
                source_categories[source["id"]] = source["category"]
        return source_categories

    def getnews(self, prompt):
        page = 1
        all_articles = []
        articles = self.newsapi.get_everything(
            q=prompt,
            sources=",".join(self.sources.keys()),  # Use all available sources
            language="en",
            sort_by="relevancy",
            page=page,
        )

        if "articles" in articles and articles["articles"]:
            all_articles.extend(articles["articles"])
        else:
            return "No articles found"

        return all_articles[random.randint(0, len(all_articles) - 1)]

    def get_article_category(self, article):
        source_id = article.get("source", {}).get("id", "")
        return self.sources.get(source_id, "Uncategorized")

    def makeblog(self, prompt):
        news = self.getnews(prompt)
        if isinstance(news, str):
            return {"error": news}

        response = model.generate_content(
            f"[This information about the news: {news}] write a blog on it as AI Blogger"
        )

        from googleapiclient.discovery import build

        def search_youtube_video(query, api_key):
            youtube = build("youtube", "v3", developerKey=api_key)
            request = youtube.search().list(
                part="snippet", q=query, maxResults=1, type="video"
            )
            response = request.execute()
            if response["items"]:
                video_id = response["items"][0]["id"]["videoId"]
                video_url = f"https://www.youtube.com/watch?v={video_id}"
                return video_url
            return None

        # Replace 'YOUR_YOUTUBE_API_KEY' with your actual YouTube Data API key
        youtube_api_key = "AIzaSyATGPYdMfhc4gRx1ODWS456mMw7vQRcpUo"
        name = news["title"]
        url = search_youtube_video(name, youtube_api_key)

        category = self.get_article_category(news)

        data = {
            "name": news["title"],
            "content": response.text.replace("*", ""),
            "image": news["urlToImage"],
            "date": str(datetime.now()),
            "supportedLinks": news["url"],
            "socialLinks": "x.com/vivekratr",
            "YtLinks": url,
            "category": category,
        }

        return savenft(data)


bot = BlogBot()


def NEWS1(data):
    NEWS = bot.getnews(data)

    return NEWS


def MAKEBLOG(news):
    response = model.generate_content(
        f"[This information about the news: {news}] write a blog on it as AI Blogger, in 100 words"
    )

    response = response.text.replace("*", "")

    return response


def YT(data):
    def search_youtube_video(query, api_key):
        youtube = build("youtube", "v3", developerKey=api_key)
        request = youtube.search().list(
            part="snippet", q=query, maxResults=1, type="video"
        )
        response = request.execute()
        if response["items"]:
            video_id = response["items"][0]["id"]["videoId"]
            video_url = f"https://www.youtube.com/watch?v={video_id}"
            return video_url
        return None

    youtube_api_key = "AIzaSyBQy0FG301m92Eo_URqMCpWvuMzWkmmTAA"
    name = data["title"]
    url = search_youtube_video(name, youtube_api_key)

    return url


def CATEGORY(data):
    category = bot.get_article_category(data)
    return category


def BLOG(data):
    blog_data = bot.makeblog(data)
    return blog_data
