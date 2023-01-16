from pymongo import MongoClient
client = MongoClient('mongodb+srv://coy:sparta@cluster0.apdwkr3.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

# 저장 - 예시
# doc = {'name':'bobby','age':21}
# db.users.insert_one(doc)

# 한 개 찾기 - 예시
# user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
all_games = list(db.gamegg.find({},{'_id':False}))
for game in all_games:
    print(game)


# 바꾸기 - 예시
# db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 지우기 - 예시
# db.users.delete_one({'name':'bobby'})