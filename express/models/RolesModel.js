const mongoose = require("mongoose");

var RolesSchema = {
  "name":String,
  "maxAmount":Number ,
  "maxTransactions":Number ,
  "companyId":String
  };

var Roles = mongoose.model('roles', RolesSchema);

module.exports = Roles;
