const express      = require('express');
const path         = require('path');
const bodyParser   = require('body-parser');
const config       = require('config');
const cors         = require('cors');

const db = require('./models');
const routes = require('./routes');

const port = config.get('port');
const clientUrl = config.get('client');

const app = express();
app.use(cors());
let id = 2;
const signal = [
    {
    id : 1,
    text : 'signal On',
    done : false,
    },
               ];

var net = require('net');
var server = net.createServer(function(client){    
  console.log('Client connected');    
  client.on('data', function(data){        
    console.log('Client sent ' + data.toString());
    signal.push({
        id: id++,
        text: data.toString(),
        done: false,
    });
    signal[0] = {
        id: id++,
        text: data.toString(),
        done: false,
    };
    
  });    
  client.on('end',function(){
    console.log('Client disconnected');
  });    
  client.write('Hello');
});

server.listen(8107, function(){    
    var serverInfo = server.address();
    var serverInfoJson = JSON.stringify(serverInfo);
    console.log('listen server : ' + serverInfoJson);
    server.on('close', function () {
        console.log('server closed.');
    });
    server.on('connection', function () {
        console.log(`누가드르와따`);
    });
});

app.use(bodyParser.json());
// app.use(cors({origin: clientUrl}));

app.use('/', routes);

app.get('/', (req, res, next) => {
    res.send('hello world! hihihi');
});

app.get('/api/todo', (req, res) => {
    res.json(signal);
});

app.post('/api/todo', (req, res) =>{
    const {text, done} = req.body;
    signal.push({
        id: id++,
        text,
        done,
    });
    return res.send('succeed');
});

db.once('open', function () {           
    console.log('DB Connected');
});

db.on('error', function (err) {
    console.log('DB ERROR : ', err);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));

