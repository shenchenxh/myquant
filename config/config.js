var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'myquantnew'
    },
    port: 3000,
    db: 'mongodb://localhost/myquantnew-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'myquantnew'
    },
    port: 3000,
    db: 'mongodb://localhost/myquantnew-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'myquantnew'
    },
    port: 3000,
    db: 'mongodb://localhost/myquantnew-production'
  }
};

module.exports = config[env];
