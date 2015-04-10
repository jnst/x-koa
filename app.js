'use strict';

var logger = require('koa-logger');
var route = require('koa-route');
var koa = require('koa');
var app = koa();

app.use(logger());
app.use(route.get('/', hello));

function *hello() {
  this.body = 'Hello World'
}

app.listen(3000);
console.log('listening port on 3000');
