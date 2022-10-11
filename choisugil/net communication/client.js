var net = require('net');

var client = net.connect({port:58498, host:'3.39.11.95'},function(){
  //net모듈의 소켓 객체를 사용    
  console.log('Client connected');    
  client.write('carwait\r\n');
});

client.on('data',function(data){
  //data 이벤트 발생시 callback
  console.log(data.toString());    
  client.end();
  });

client.on('end',function(){//end 이벤트 발생시 callback    
  console.log('Client disconnected');
});
