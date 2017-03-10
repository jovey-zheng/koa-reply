'use strict'

module.exports = reply;

/**
 * status code & method object
 */
const statusCodeMap = {
  OK: 200,
  Created: 201,
  BadRequest: 400,
  UnAuthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500
};

/**
 * main function
 *  ```
 *    const kos = require('koa);
 *    const app = koa()
 *
 *    app.use(reply());
 *    ...
 *  ```
 */
function reply() {
  return function* (next) {
    try {
      const response = this.response;
      // Map status code
      Object.keys(statusCodeMap).forEach(function(val) {
        //define property
        Object.defineProperty(response, val, {
          get: function() {
            return this.status;
          },
          set: function(body) {
            this.status = statusCodeMap[val];
            this.body = body;
          },
          enumerable: true
        });
      });
      
      yield *next;
    } catch (err) {
      throw err;
    }
  };
};
