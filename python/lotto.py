import random
import requests

# _.range(1,46)
# _.sampleSize(_.range(1,46),6)
# _.sortBy(_.sampleSize(_.range(1,46),6))

lotto = sorted(random.sample(range(1,46),6))

# axios.get(url)

url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=873'
res = requests.get(url)
data = res.json()
winner = []

for i in range(1, 7):
    winner.append(data[f'drwtNo{i}'])

cnt = len(set(lotto) & set(winner))
print(cnt)
