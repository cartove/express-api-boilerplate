'use strict';

// controllers/user.js

// USER CONTROLLER
// =============================================================================
var mongoose     = require('mongoose');
var User         = mongoose.model('User');
var log          = appRequire('lib/logger');


module.exports = function(req, res, next){
  User.findOne({ username: req.params.username }).select('-password -email').exec(function(err, user){
    
    if(err){
      log.error(err);
      return res.status(500).json(err);
    }
    res.json(user);
    
  });
};