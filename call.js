const config = require('./config.json');
let {client, getStatus} = require('./asterisk');

class Call {

    constructor(json) {
        this.numberA = json?.numberA;
        this.numberB = json?.numberB;
    }

    start() {
        return new Promise((resolve, reject) => {
            if (getStatus()) {
                client.action({
                    "action": "originate",
                    "channel": config.ami.type + "/" + this.numberA,
                    "context": config.ami.context,
                    "exten": this.numberB,
                    "callerid": this.numberB,
                    "priority": 1
                  })
                resolve(true);
            } else {
                resolve(false);
            }
        })
    }
};


module.exports = Call;