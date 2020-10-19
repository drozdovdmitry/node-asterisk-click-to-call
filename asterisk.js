const config = require('./config.json')
const AmiClient = require('asterisk-ami-client');

let client = new AmiClient({reconnect: true, keepAlive: true});
let isConnected = false;

function getStatus() {
    return isConnected;
}

client.connect(config.ami.user, config.ami.pass, {
    host: config.ami.host, port: config.ami.port
})
client.on('connect', () => {
    isConnected = true;
    console.log('Connected');
});
client.on('disconnect', () =>{
    isConnected = false;
    console.log('Disconnected');
});
client.on('internalError', () =>{
    isConnected = false;
    console.log('Internal error');
});

module.exports = {client, getStatus};