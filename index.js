var express = require('express');

var companies = require('./routes/companies');
var manufactors = require('./routes/manufactor');
var products = require('./routes/products');
var productGroups = require('./routes/productGroups');
var contracts = require('./routes/contracts');
var tables = require('./routes/tables')

var bodyparser = require('body-parser');

var {sequelize} = require('./modules/index')

var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/companies', companies);
app.use('/manufactors', manufactors);
app.use('/products', products);
app.use('/productGroups', productGroups);
app.use('/contracts', contracts);
app.use('/tables', tables)


sequelize.sync({force: false}).then(() => {
    app.listen(4000);
})