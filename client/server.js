let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.redirect('/index.html');
});

app.listen(5000);
