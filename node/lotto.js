// 로또 번호 추천기
const _ = require('lodash')

// (1) 1~45까지의 숫자 중, range(이상, 미만)
const numbers = _.range(1, 46)

// (2) 6개의 추출하여 보여줌
const lotto = _.sampleSize(numbers, 6)

console.log(_.sortBy(lotto)) // 오름차순으로 정렬

const winner = [3, 5, 12, 13, 33, 39] // 지난주 1위 번호

let count = 0;
let rank = "아쉽네요 꽝 입니다" // winner와 비교하여, 추천한 랜덤 번호가 몇 등인지 알려주는 함수 rank

for (let i = 0; i<6; i++){
    if(lotto.includes(winner[i]) == true){
        count = count +1;
    }
}
console.log(count);

if(count == 6){
    rank = "축 1등 입니다"
}else if(count == 5){
    rank = "축 3등 입니다"
}else if(count == 4){
    rank = "축 4등 입니다"
}else if(count == 3){
    rank = "축 5등 입니다"
}
	
console.log(_.sortBy(lotto), rank)


/* 6개 - 1등
5개 - 3등
4개 - 4등
3개 - 5등
나머지 - 꽝 */

