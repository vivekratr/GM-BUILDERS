from flask import Flask, request
from flask_cors import CORS
from src.pipeline.newsbot import NEWS1, MAKEBLOG, CATEGORY, YT, BLOG
from src.utils import (
    insert_data,
    update_news,
    update_blogs,
    savenft,
    datale,
    get_all_data,
)

application = Flask(__name__)
CORS(application)

DATA_JSON = None

NEWS = None
BLOGAI = None
YTURL = ""
CATEGORY_JSON = None


@application.route("/", methods=["POST", "GET"])
def hello():
    return "Welcome to Backend of GM Builder blogs"


@application.route("/recomm", methods=["POST", "GET"])
def hello1():
    data = request.json
    return datale(data["intrests"])


@application.route("/blog", methods=["POST", "GET"])
def Blog0():

    data = request.json
    print(data)

    return BLOG(data["prompt"])


@application.route("/step1", methods=["POST", "GET"])
def Blog1():

    global NEWS
    data = request.json
    print(data)
    NEWS = NEWS1(data["prompt"])

    return "NEWS FEATCHED"


@application.route("/step2", methods=["POST", "GET"])
def Blog2():

    global NEWS
    global BLOGAI
    BLOGAI = MAKEBLOG(NEWS)

    return "BLOG GENERATED"


@application.route("/step3", methods=["POST", "GET"])
def Blog3():

    global NEWS
    global YTURL
    try:
        YTURL = YT(NEWS)
    except:
        YTURL = "No Video Found"

    global CATEGORY_JSON

    CATEGORY_JSON = CATEGORY(NEWS)
    return "YOUTUBE, CATEGORY GENERATED"


@application.route("/step4", methods=["POST", "GET"])
def Blog5():

    from datetime import datetime

    global DATA_JSON
    global NEWS
    global YTURL
    global CATEGORY_JSON
    global BLOGAI

    DATA_JSON = {
        "name": NEWS["title"],
        "content": BLOGAI,
        "image": NEWS["urlToImage"],
        "date": str(datetime.now()),
        "supportedLinks": NEWS["url"],
        "socialLinks": "x.com/vivekratr",
        "YtLinks": YTURL,
        "category": CATEGORY_JSON,
    }

    return DATA_JSON


@application.route("/step5", methods=["POST", "GET"])
def nft_storage():
    global DATA_JSON
    return savenft(DATA_JSON)


@application.route("/insertdata", methods=["POST", "GET"])
def insertdata():
    data = request.json
    print(data["data"])

    return insert_data(data["data"])


@application.route("/updatenews", methods=["POST", "GET"])
def test():
    data = request.json
    print(data["key"])

    return update_news(data["key"])


@application.route("/updateblog", methods=["POST", "GET"])
def test1():
    data = request.json
    print(data["key"])

    return update_blogs(data["key"])


@application.route("/alldata", methods=["POST", "GET"])
def test2():
    data = get_all_data()
    return data


if __name__ == "__main__":
    application.run(host="0.0.0.0")
