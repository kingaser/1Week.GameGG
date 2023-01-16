from flask import Flask, render_template, request, jsonify
app = Flask(__name__)



from pymongo import MongoClient

client = MongoClient('mongodb+srv://coy:sparta@cluster0.apdwkr3.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/detail')
def detail():
    return render_template('detail.html')

@app.route('/game', methods=["GET"])
def game_list():
    game_list = list(db.gamegg.find({}, {'_id': False}))
    return jsonify({'games': game_list})



if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)