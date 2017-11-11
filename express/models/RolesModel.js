const mongoose = require("mongoose");

var RoleSchema = {
  "name":String,
  "maxAmount":Number ,
  "maxTransactions":Number ,
  "companyId":String
  };

var Role = mongoose.model('roles', StaffSchema);

module.exports = Roles;
