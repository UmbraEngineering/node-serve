#!/usr/bin/env node

var pkg      = require('pkg');
var path     = require('path');
var program  = require('commander');
var express  = require('express');
var expires  = require('expires');

program
	.version(pkg.read(module).version())
	.option('--addr [addr]', 'Choose the address to serve requests on', '0.0.0.0')
	.option('--port [port]', 'Choose the port number to serve on', 8080)
	.option('--path [path]', 'Choose the path to serve', '.')
	.option('--cache [cache]', 'Choose the duration of the file cache', 0)
	.parse(process.argv);

var server = express();
var filePath = path.resolve(process.cwd(), program.path);
var cacheLength = expires.parse(program.cache);

server.use(function(req, res, next) {
	console.log('HTTP ' + req.method.toUpperCase() + ' ' + req.url);
	next();
});

server.use(express.static(filePath, {maxAge: cacheLength}));

server.listen(program.port, program.addr, function() {
	console.log('HTTP server serving ' + filePath + ' on ' + program.addr + ':' + program.port + '...');
});
