var canadianDollar = 0.91;

//Pricate function
function roundTwoDecimals(amount){
	return Math.round(amount * 100) / 100;
}

//Public function
exports.canadianToUS = function(canadian){
	return roundTwoDecimals(canadian * canadianDollar);
}

//Public function
exports.USToCanadian = function(us){
	return roundTwoDecimals(us / canadianDollar);
}
