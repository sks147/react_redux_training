var App = require('./Components/App.js').default;
var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
import {StaticRouter} from 'react-router-dom';

var app = express();
// server side removes all the event handlers
// client side rendering is import for handling events
function htmlTemplate(reactDom){
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>React Server Side Rendering</title>
        </head>
        <body>
            <div id="app">
                ${reactDom}
            </div>
            <script type="text/javascript" src="bundle.js"></script>
        </body>
        </html>
    `;
}

app.use(express.static('dist'));
app.get('/', function(req, res){
    const context = {};
    console.log("creating htmlstring");
    const htmlString = ReactDOMServer.renderToString(<StaticRouter context={context} location={req}>
        <App/>
    </StaticRouter>);
    console.log("created htmlstring");
    res.send(htmlTemplate(htmlString));
})

var PORT = 5000;
app.listen(PORT, function(){
    console.log('http://localhost:'+PORT);
})