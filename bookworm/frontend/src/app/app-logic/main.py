from bs4 import BeautifulSoup
import requests
import re
import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}


@app.route("/scrape", methods=["POST"])
def scrape():
    search = request.json["searchQuery"]
    pg = request.json["page"]
    results = []

    # GOOGLE SCHOLAR

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
        + "&hl=en&as_sdt=0,5&as_vis=1",
        headers=headers,
    ).text
    print(html_text)

    soup = BeautifulSoup(html_text, "lxml")

    articles = soup.find_all("div", class_="gs_r gs_or gs_scl")
    for art in articles:
        title = art.find("h3", "gs_rt").find("a", href=True).text
        details = art.find("div", "gs_a").text
        detail_list = re.split(r" - |- ", details.replace("\xa0", ""))
        auth_list = re.split(r",", detail_list[0].replace("\xa0", ""))
        authors = [s.lstrip() for s in auth_list]
        if authors[-1].endswith("…"):
            authors[-1] = authors[-1][:-1]
        year = re.search(r"\d+", detail_list[1][::-1])
        if year != None:
            year = year.group()[::-1]
        link = art.find("h3", "gs_rt").find("a")["href"]

        if year != None:
            results.append(
                {
                    "title": title,
                    "authors": authors,
                    "year": year,
                    "link": link,
                }
            )

    """
    # SPRINGER
    print(
        "https://link.springer.com/search?new-search=true&query="
        + str(search)
        + "&content-type=Book&&content-type=Chapter&&content-type=ConferenceProceedings&&content-type=ConferencePaper&&content-type=Article&sortBy=relevance&page="
        + str(pg)
    )
    print(".........")

    html_text = requests.get(
        "https://link.springer.com/search?new-search=true&query="
        + str(search)
        + "&content-type=Book&&content-type=Chapter&&content-type=ConferenceProceedings&&content-type=ConferencePaper&&content-type=Article&sortBy=relevance&page="
        + str(pg),
        headers=headers,
    ).text
    print(html_text)

    soup = BeautifulSoup(html_text, "lxml")

    articles = soup.find_all("li", class_="c-card-open")
    for art in articles:
        title = art.find("div", "c-card-open__heading")
        # auth_div = art.find("div", "c-card-open__authors").text
        # auth_list = re.split(r",", detail_list[0].replace("\xa0", ""))
        # authors = [s.lstrip() for s in auth_list]
        # year = art.find("div", "c-card-open__meta").text
        # link = art.find("h3", "c-card-open__heading").find("a", href=True).text

        print(title)


        results.append(
            {
                "title": title,
                "authors": authors,
                "year": year,
                "link": link,
            }
        )

        results.append(
            {
                "title": "title",
                "authors": ["authors"],
                "year": 2000,
                "link": "link",
            }
        )
        """

    return jsonify(results)


if __name__ == "__main__":
    app.run(host="127.0.0.7")
