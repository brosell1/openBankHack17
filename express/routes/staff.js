const Staff = require(`../models/StaffModel.js`);
const express = require(`express`);
const router = express.Router();

/* GET users listing. */
router.get(`/`, (req, res) => {
  Staff.find(function(err, response) {
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

router.post('/', (req, res) => {
    var newstaff = new Staff();
    newstaff.username = req.body.username;
    newstaff.password = req.body.password;
    newstaff.companyId = req.body.companyId;
    newstaff.authLevel = req.body.authLevel;
    newstaff.admin = req.body.admin;
    newstaff.save(function(err, response){
      if(err) {
        res.json({error:err});
      }
      res.json({payload:response});
    })
});

router.get('/:username', (req, res) => {
  Staff.findOne({username:req.params.username}, function(err, response) {
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

router.put('/:username', (req, res) => {
    Staff.findOneAndUpdate({username:req.params.username}, req.body, function(err, response){
      if(err) {
        res.json({error:err});
      }
      res.json({payload:response});
    })
});

router.post('/:username', (req, res) => {
  Staff.findOneAndRemove({username:req.params.username}, function(err, response){
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
    }
  });
});

module.exports = router;
