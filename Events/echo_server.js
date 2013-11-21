//Test: telnet 127.0.0.1 8888

var net = require('net');

var server = net.createServer(function(socket){
	//Trigger every time 'data' occur
	socket.on('data', function(data){
		socket.write(data);
	});
});

server.listen(8888);