const config = require('../config.json');
let express = require('express');
let router = express.Router();
let Call = require('../call');

/* GET home page. */
router.post('/', function(req, res, next) {
    if (req?.headers?.token !== config.token) {
        return res.status(400).json({error: true, data: 'Token is not valid'});
    } else if (!req?.body?.numberA) {
        return res.status(400).json({error: true, data: 'numberA is null'});
    } else if (!req?.body?.numberB) {
        return res.status(400).json({error: true, data: 'numberB is null'});
    } else if (typeof req?.body?.numberA !== "number") {
        return res.status(400).json({error: true, data: 'numberB is NaN'});
    } else if (typeof req?.body?.numberB !== "number") {
        return res.status(400).json({error: true, data: 'numberB is NaN'});
    } else {
        let call = new Call({numberA: req?.body?.numberA, numberB: req?.body?.numberB});
        call.start()
        .then((data) => {
            return res.status(200).json({error: false, data: 'OK'});
        })
        .catch((err) => {
            return res.status(400).json({error: true, data: 'numberB is NaN'});
        })
    }
});

module.exports = router;
