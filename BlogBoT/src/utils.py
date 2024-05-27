KEY_NEWS = "b46e255625d7430d817b32146c8907b9"
BRUNO_KEY = "AIzaSyBa5b8ZuK83ehPi52ua4Ly724ofJHTT5Zk"
from pymongo import MongoClient

connection_string = (
    "mongodb+srv://shreyashsingh865:Lookinto12@cluster0.jwayy3t.mongodb.net/"
)

client = MongoClient(connection_string)

db = client["BLOGS"]

collection = db["VIEWS"]


def insert_data(data):

    existing_data = collection.find_one(data)

    if existing_data is None:
        collection.insert_one(data)
        return "Data inserted successfully."
    else:
        print("Data is already present in the database.")
        return "Data is already present in the database."


def update_news(key):

    document = collection.find_one({key: {"$exists": True}})
    print(document)

    if document is not None:
        blog_value = int(document[f"{key}"]["news"])
        new_blog_value = blog_value + 1
        new_blog_value = str(new_blog_value)

        collection.update_one(
            {key: {"$exists": True}}, {"$set": {f"{key}.news": new_blog_value}}
        )
        print("News value updated.")
        return "News value updated."
    else:
        print("No document with the key '0' found.")
        return f"No document with the key {key} found."


def update_blogs(key):

    document = collection.find_one({key: {"$exists": True}})

    if document is not None:
        blog_value = int(document[f"{key}"]["blog"])
        new_blog_value = blog_value + 1
        new_blog_value = str(new_blog_value)

        collection.update_one(
            {key: {"$exists": True}}, {"$set": {f"{key}.blog": new_blog_value}}
        )
        print("Blog value updated.")
        return "Blog value updated."
    else:
        return f"No document with the key {key} found."


def savenft(data):
    import requests
    import json
    from io import BytesIO

    NFT_STORAGE_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRCOWM5Q0UwQmE3NENiRjA4QkJlZjIwNDMzZEUwYjczNzUxNjI4RTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5ODUwNDQ1NzM3MywibmFtZSI6IkZ1bmRFVEgifQ.JxTH4iRtScscfmb9mvZqhSqF9MKs2b0JJS2yof7hzF4"

    metadata_json = json.dumps(data)
    metadata_bytes = BytesIO(metadata_json.encode("utf-8"))

    files = {"file": ("metadata.json", metadata_bytes, "applicationlication/json")}

    headers = {"Authorization": f"Bearer {NFT_STORAGE_TOKEN}"}

    response = requests.post(
        "https://api.nft.storage/upload", files=files, headers=headers
    )

    if response.status_code == 200:
        cid = response.json()["value"]["cid"]
        uri = f"https://{cid}.ipfs.nftstorage.link/metadata.json"
    else:
        print("error in nft")

    return uri


def datale(user_interests):
    # user_interests = ["blockchain", "AI", "health"]
    connection_string = (
        "mongodb+srv://shreyashsingh865:Lookinto12@cluster0.jwayy3t.mongodb.net/"
    )

    client = MongoClient(connection_string)

    db = client["BLOGS_CATEGORY"]

    collection = db["CATEGORYs"]

    # Function to fetch random 2 documents from each interested category
    def get_random_documents(user_interests):
        random_documents = []

        for category in user_interests:
            pipeline = [
                {
                    "$match": {category: {"$exists": True}}
                },  # Match documents with the specified category
                {"$unwind": f"${category}"},  # Unwind the array of URLs
                {"$sample": {"size": 2}},  # Sample random 2 documents
                {
                    "$project": {"_id": 0, "url": f"${category}"}
                },  # Project the URL field
            ]

            # Execute the aggregation pipeline
            results = collection.aggregate(pipeline)

            # Append the URLs to the random_documents list
            for doc in results:
                random_documents.append(doc["url"])

        return random_documents

    # Fetch random documents based on user interests
    random_documents = get_random_documents(user_interests)

    return random_documents


# Example usage
# user_interests = ["blockchain", "AI", "health"]
# links = datale(user_interests)
# print(links)


def get_all_data():
    from pymongo import MongoClient
    import random

    # Connection string
    connection_string = (
        "mongodb+srv://shreyashsingh865:Lookinto12@cluster0.jwayy3t.mongodb.net/"
    )

    # Connect to MongoDB
    client = MongoClient(connection_string)

    # Select the database and collection
    db = client["BLOGS_CATEGORY"]
    collection = db["CATEGORYs"]

    # Retrieve all documents from the collection
    documents = collection.find()

    # Initialize an empty list to store all links
    all_links = []

    # Loop through each document and extract the links
    for document in documents:
        for key, links in document.items():
            if key != "_id":  # Skip the MongoDB ObjectId field
                all_links.extend(links)

    # Print all links
    print(all_links)
    random.shuffle(all_links)

    return all_links
