const koa = require('koa');
const router = require('koa-router')();
const reply = require('./');

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

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 3000, function() {
  console.log('Using `replt` middleware in test');
});
