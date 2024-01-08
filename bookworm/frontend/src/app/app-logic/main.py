from bs4 import BeautifulSoup
import requests
import re
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/scrape", methods=["POST"])
def scrape():
    search = request.json["searchQuery"]
    n_pages = 1
    results = []
    for pg in range(0, n_pages):
        print(
            "https://scholar.google.com/scholar?start="
            + str(pg * 10)
            + "&q="
            + str(search)
            + "&hl=en&as_sdt=0,5&as_vis=1"
        )
        print(".........")

        html_text = requests.get(
            "https://scholar.google.com/scholar?start="
            + str(pg * 10)
            + "&q="
            + str(search)
            + "&hl=en&as_sdt=0,5&as_vis=1"
        ).text

        soup = BeautifulSoup(html_text, "lxml")

        articles = soup.find_all("div", class_="gs_r gs_or gs_scl")
        for art in articles:
            title = art.find("h3", "gs_rt").find("a", href=True).text
            details = art.find("div", "gs_a").text
            detail_list = re.split(r" - |- ", details.replace("\xa0", ""))
            auth_list = re.split(r",", detail_list[0].replace("\xa0", ""))
            authors = [s.lstrip() for s in auth_list]
            year = re.search(r"\d+", detail_list[1][::-1])
            if year != None:
                year = year.group()[::-1]
            link = art.find("h3", "gs_rt").find("a")["href"]

            if year != None:
                results.append(
                    {
                        "id": 0,
                        "title": title,
                        "authors": authors,
                        "year": year,
                        "link": link,
                    }
                )

    return jsonify(results)


if __name__ == "__main__":
    app.run()
