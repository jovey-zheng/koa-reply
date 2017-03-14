# koa-reply

  Middleware for Koa that adds some common methods to the Koa response.

  [![npm version](http://img.shields.io/npm/v/koa-reply.svg)](https://www.npmjs.com/package/koa-reply)
  [![npm download](http://img.shields.io/npm/dm/koa-reply.svg)](https://www.npmjs.com/package/koa-reply)

# Install

  ```sh
  $ npm i koa-reply -S
  ```

# Description

  There are method and corresponding status code:  
  - **OK**: 200  
  - **Created**: 201  
  - **BadRequest**: 400  
  - **UnAuthorized**: 401  
  - **Forbidden**: 403  
  - **NotFound**: 404  
  - **InternalServerError**: 500  

  Or you can add your optiosns:  
  ```js
  const koa = require('koa');
  const reply = require('koa-reply');

  const app = koa();

  app.use(reply({
    myMethod: code
    //...
  }));
  //...
  ```

# Usage

  Check the [example](./example.js)

  ```js
  const koa = require('koa');
  const router = require('koa-router')();
  const reply = require('koa-reply');

  const app = koa();
  // add reply middleware on top level
  app.use(reply());

  // test router
  router.get('/', function* () {
    this.response.OK = 'hello world';
  });
  router.get('/404', function* () {
    this.response.NotFound = 'Not Found'
  });
  router.post('/create', function* () {
    this.response.Created = 'success';
  });
  // ... others

  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen(process.env.PORT || 3000, function() {
    console.log('Using `replt` middleware in test');
  });
  ```
