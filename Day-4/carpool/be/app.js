var express = require('express');
var route = require('./routes/route');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', route);

app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.send({"message": "Requested URL is not available!",     "status": 404 } );
});

app.listen(1010);
console.log("Server has begun on port 1010");

module.exports = app;