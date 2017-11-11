const mongoose = require("mongoose");

var NotificationsSchema = {
  "companyId":String,
  "minAuthLevel":String ,
  "LedgerUserID":String,
  "beneficiariesID":String,
  "amount":Number,
  "date":Number,
  "username":String,
  "message":String,
  "status":String
  };

var Notification = mongoose.model('notifications', NotificationsSchema);

module.exports = Notification;
