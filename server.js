var fs = require('fs');
var express = require('express');

var helpers = require('./helpers');
var recipes = require('./recipes');

var app = express();
app.use(helpers.logger);
app.use(express.static(__dirname + "/frontend"));
app.use(express.bodyParser());


/* Not jadami code */
var counter = 0;

app.get('/counter', function(req, res) {
    res.end(counter.toString());
})

app.get('/recipes', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    for (var i=0; i<recipes.length; i++) {
        var temp = helpers.recipe_html(recipes[i]);
        res.write(temp);
    }
    res.end();
})

app.post('/double_number', function(req, res) {
    var form_data = req.body;
    var result = form_data.number * 2;
    res.end(result.toString());
})
/* End of not jadami code */


app.post('/send_ingredients', function(req, res) {
    var ingredients_string = req.body.ingredients;
    var ingredients = helpers.split_and_trim(ingredients_string);
    console.log(ingredients);
    console.log(recipes[0]);
    res.end('done');
});

app.get('/', function(req, res) {
    counter += 1;
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/frontend/html/index.html'));
})

app.listen(8080);
console.log('Started the server. Listening...');
