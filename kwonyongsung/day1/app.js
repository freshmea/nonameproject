var express  = require('express');

var app      = express();


var http     = require('http').Server(app);

var io       = require('socket.io')(http);


const path = require('path');



var SerialPort = require('serialport').SerialPort;

var ReadlineParser = require('@serialport/parser-readline').ReadlineParser;

var parsers    = SerialPort.parsers;

var sp = new SerialPort( {

  path:'COM3',

  baudRate: 9600

});

var parser     = sp.pipe(new ReadlineParser({

  delimiter: '\r\n'

}));

 

 


var port = 3000;


sp.pipe(parser);


sp.on('open', () => console.log('Port open'));


parser.on('data', function(data)

{

	console.log(data.toString());

	if(data.substring(0,3) == "led"){

		if(data.substring(3,4) == "1")
			ledStatus = "on";
		else
			ledStatus = "off";

		io.emit('led', ledStatus);

		console.log('led status: ' + ledStatus);

	}
});


 

app.use(express.static(__dirname + '/public'));


http.listen(port, function() {
    console.log('listening on *:' + port);
});