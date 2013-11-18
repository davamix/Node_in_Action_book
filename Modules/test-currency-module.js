var Currency  = require('./currency-module');
var canadianDollar = 0.91;

var currency = new Currency(canadianDollar);

console.log('50 C$ to USD');
console.log(currency.canadianToUS(50));
