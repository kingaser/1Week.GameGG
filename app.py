from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from bs4 import BeautifulSoup

from pymongo import MongoClient

client = MongoClient('mongodb+srv://test:sparta@cluster0.9wvifvb.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/detail')
def detail():
    return render_template('detail.html')

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

@app.route('/game', methods=["GET"])
def game_list():
    game_list = list(db.gamegg.find({}, {'_id': False}))
    return jsonify({'games': game_list})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)