var express = require('express');

var companies = require('./routes/companies');
var manufactors = require('./routes/manufactors');
var products = require('./routes/products');
var bodyparser = require('body-parser');

var {sequelize} = require('./modules/index')

var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/companies', companies);
app.use('/manufactors', manufactors);
app.use('/products', products);

sequelize.sync({force:true}).then(() => {
    app.listen(3000);
})

// seq.init().then(() => {
//     app.listen(3000);
// });