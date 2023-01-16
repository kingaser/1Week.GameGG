from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient

client = MongoClient('mongodb+srv://test:sparta@cluster0.urgl26q.mongodb.net/Cluster0@?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/detail')
def detail():
    return render_template('detail.html')

@app.route("/game/<name>", methods=["GET"])
def detail_list():
    return render_template('detail.html')


if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)