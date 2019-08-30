const _ = require('lodash');

foods = ['강남목장', '진가와', '순남시레기']

const menu = _.sample(foods);

console.log(menu);