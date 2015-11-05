var stringifile = require('stringifile');
var criticalCss = stringifile('critical.css', 'style', './styles/');
var template = require('./index.js').replace('{{CRITICAL_CSS}}', criticalCss);
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(template);
}).listen(8080);