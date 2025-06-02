'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./es/index.es');
} else {
  module.exports = require('./es/index.es.js');
}
