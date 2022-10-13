var net = require('net');

var client = net.connect({port:51343, host:'13.125.173.103'},function(){
  //net모듈의 소켓 객체를 사용    
  console.log('Client connected');    
  client.write('CarWait\r\n');
});

client.on('data',function(data){
  //data 이벤트 발생시 callback
  console.log(data.toString());    
  client.end();
  });

client.on('end',function(){//end 이벤트 발생시 callback    
  console.log('Client disconnected');
});
