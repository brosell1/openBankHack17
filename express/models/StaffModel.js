const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

var StaffSchema = {
  "username":String ,
  "password":String ,
  "companyId":String,
  "authLevel":String ,
  "lastTransaction":Number,
  "transactionsDone":Number,
  "admin":Boolean
  };


StaffSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

StaffSchema.statics.authenticate = function(username, password, callback) {
  User.findOne({username: username}).exec(function(err, user) {
    if (err) {
      return callback(err)
    } else if (!user) {
      var err = new Error('User not found.');
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback(err);
      }
    })
  });

var Staff = mongoose.model('staff', StaffSchema);

module.exports = Staff;
