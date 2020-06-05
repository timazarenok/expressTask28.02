var express = require('express');
const { Company } = require('../../modules');
var router  = express.Router();

router.get('/customers', (req, res) => {
    Company.findAll({where: {
        isCustomer: true
    }}).then(customers => res.send(customers));
})

router.get('/providers', (req, res) => {
    Company.findAll({where: {
        isProvider: true
    }}).then(providers => res.send(providers));
})

router.get('/', (req, res) => {
    res.send();
})

module.exports = router;