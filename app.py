from flask import Flask, render_template, request, jsonify
app = Flask(__name__)




from pymongo import MongoClient

client = MongoClient('mongodb+srv://coy:sparta@cluster0.apdwkr3.mongodb.net/Cluster0?retryWrites=true&w=majority')

db = client.dbsparta

import requests
from bs4 import BeautifulSoup

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/game', methods=["GET"])
def game_list():
    game_list = list(db.gamegg.find({}, {'_id': False}))
    return jsonify({'games': game_list})


@app.route('/game/review', methods=["GET"])
def review():
    name_receive = request.args.get("name_give")
    return render_template('detail.html', name_give = name_receive)

@app.route('/game/content', methods=["GET"])
def detail():
    name_receive = request.args.get("name_give")
    print(name_receive)
    game = db.gamegg.find_one({'name': name_receive})

    name = game['name']
    img = game['img']
    rank = game['rank']
    company = game['company']
    charge = game['charge']
    genre = game['genre']

    print(name)
    print(img)


    return jsonify({'name_give': name, 'img_give' : img, 'rank_give' : rank, 'company_give' : company, 'charge_give' : charge, 'genre_give' : genre})

# 여기서 부터 입니다
@app.route("/game/comment", methods=["POST"])
def review_post():

    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']

    doc = {
        'name':name_receive,
        'comment':comment_receive
    }
    db.comment.insert_one(doc)
    return jsonify({'msg': '등록 완료!'})

@app.route("/game/comment", methods=["GET"])
def review_get():
    review_list = list(db.comment.find({}, {'_id': False}))
    return jsonify({'reviews':review_list})
#여기까지 입니다
if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)