const mongoose = require("mongoose");

var StaffSchema = {
  "username":String ,
  "password":String ,
  "companyId":String,
  "authLevel":String ,
  "lastTransaction":Number,
  "transactionsDone":Number,
  "admin":Boolean
  };

var Staff = mongoose.model('staff', StaffSchema);

module.exports = Staff;
