const Store = require('openrecord/store/mysql');
const TypeDetial = require('../app/models/typeDetial.model');
const Wing = require('../app/models/wing.model');

const store = new Store({
  connection: {
    host: 'localhost',
    type: 'mysql',
    user: 'root',
    password: 'edison',
    database: 'wars'
  },
  models: [Wing, TypeDetial],
  inflection: {
    wings: 'wing'
  }
});

store.ready(async () => {
  const post = await store.Model('wing').find(1);
  console.log('post is', post.toJSON());
});

module.exports = store;
