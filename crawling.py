import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient
client = MongoClient('mongodb+srv://coy:sparta@cluster0.apdwkr3.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.gamemeca.com/ranking.php?rid=2191',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

games = soup.select('#content > div.ranking_list > div.rank-list > div.content-left > table > tbody > tr')
for game in games:
    name = game.select_one('td:nth-child(4) > div.game-name > a').text
    img = game.select_one('td:nth-child(2) > img')['src']
    try:
        rank = game.select_one('td:nth-child(1) > span.rank').text
    except Exception as e:
        continue
    # rank = game.select_one('td:nth-child(1) > span.rank').text
    company = game.select_one('td:nth-child(4) > div.game-info > span.company > a').text
    charge = game.select_one('td:nth-child(4) > div.game-info > span:nth-child(3)').text
    genre = game.select_one('td:nth-child(4) > div.game-info > span:nth-child(2)').text
    doc = {
        'rank':rank,
        'name':name,
        'img':img,
        'charge':charge,
        'genre':genre
    }
    db.gamegg.insert_one(doc)



