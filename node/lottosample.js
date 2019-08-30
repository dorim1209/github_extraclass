// 로또 번호 추천기
const _ = require('lodash')
const axios = require('axios')

/* 
let cnt = 0
lotto.forEach((num) => {
    if(winner.includes(num)){
        cnt += 1;
    }
})
 */

function rank(winner) {

    // (1) 1~45까지의 숫자 중, range(이상, 미만)
    const numbers = _.range(1, 46)
    // (2) 6개의 추출하여 보여줌
    const lotto = _.sampleSize(numbers, 6)

    let cnt = _.intersection(lotto, winner).length

    //console.log(`${cnt}개가 맞았습니다.`)

    if (cnt == 6) {
        console.log('1등입니다. 집을 사자.');
    } else if (cnt == 5) {
        console.log('3등입니다. 차도 못 사네...');
    } else if (cnt == 4) {
        //console.log('4등입니다.');
    } else if (cnt == 3) {
        //console.log('5등입니다.');
    }

}
/* 
let n = 0;
while (n < 100000){
    rank(winner);
    n += 1;
}
*/

/* 
axios.get(url)
    .then(function(res) {
        console.log(res);
    })
*/

const getLotto = async () => {
    const url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=873'
    const res = await axios.get(url)

    const num = console.log(await res.data.drwNo1)

    return num
}

let winner = []
let data = {}
const url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=873'

axios.get(url)
    .then(function(res){
        winner.push(res.data.drwtNo1);
        winner.push(res.data.drwtNo2);
        winner.push(res.data.drwtNo3);
        winner.push(res.data.drwtNo4);
        winner.push(res.data.drwtNo5);
        winner.push(res.data.drwtNo6);
        console.log(winner);
    })

    console.log(winner);