// keys.js - what credentials to return
if (process.env.NODE_ENV === 'production') {
    // were in production
    module.exports = require('./prod');
  else {
    //return dev keys
    module.exports = require('./dev');
  }
}