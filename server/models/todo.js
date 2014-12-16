var mongoose = require('mongoose');

module.exports = function(config) {
  'use strict';

  var Todo = mongoose.model('Todo', new mongoose.Schema({
    text: { type: String },
    done: { type: Boolean }
  }));

  return Todo;
};
