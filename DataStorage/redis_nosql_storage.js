// Install redis db
// npm install redis
var redis = require('redis');
var client = redis.createClient(6369, 'http://davamix.blob.core.windows.net/communityimages/community-520-3ed9b6e9-97c6-42f4-b2bd-349fca785b64-6.vhd');

client.on('error', function(err){
	console.log('Error ' + err);
}