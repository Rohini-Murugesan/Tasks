
import json

with open('db1.json') as f:
  data = json.load(f)

sum = 1
for i in data["countries"]:
    i['id'] = sum
    sum += 1

print(data)
with open('db.json','w') as json_file:
  json.dump(data, json_file)
