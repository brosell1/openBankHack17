const Notification = require(`../models/NotificationsModel.js`);
const express = require(`express`);
const router = express.Router();

/* GET users listing. */
router.get(`/`, (req, res) => {
  Notification.find(function(err, response) {
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

router.post('/', (req, res) => {
    var newnotification = new Notification();
    newnotification.companyId = req.body.companyId;
    newnotification.minAuthLevel = req.body.minAuthLevel;
    newnotification.ibanTo = req.body.ibanTo;
    newnotification.ibanFrom = req.body.ibanFrom;
    newnotification.amount = req.body.amount;
    newnotification.date = req.body.date;
    newnotification.username = req.body.username;
    newnotification.message = req.body.message;
    newnotification.status = req.body.status;
    newnotification.save(function(err, response){
      if(err) {
        res.json({error:err});
      }
      res.json({payload:response});
    })
});

router.get('/:id', (req, res) => {
  Notification.findOne({_id:req.params.companyId}, function(err, response) {
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

router.put('/:id', (req, res) => {
    Notification.findOneAndUpdate({_id:req.params.id}, req.body, function(err, response){
      if(err) {
        res.json({error:err});
      }
      res.json({payload:response});
    })
});

router.delete('/', (req, res) => {
  Notification.findOneAndRemove({_id:req.params._id}, function(err, response){
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

module.exports = router;
