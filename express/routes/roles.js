const Role = require(`../models/RolesModel.js`);
const express = require(`express`);
const router = express.Router();

/* GET users listing. */
router.get(`/`, (req, res) => {
  Role.find(function(err, response) {
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

router.post('/', (req, res) => {
    var newrole = new Role();
    newrole.name = req.body.name;
    newrole.maxAmount = req.body.maxAmount;
    newrole.maxTransactions = req.body.maxTransactions;
    newrole.companyId = req.body.companyId;
    newrole.save(function(err, response){
      if(err) {
        res.json({error:err});
      }
      res.json({payload:response});
    })
});

router.get('/:id', (req, res) => {
  Role.findOne({_id:req.params.id}, function(err, response) {
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

router.put('/:id', (req, res) => {
    Role.findOneAndUpdate({_id:req.params.id}, req.body, function(err, response){
      if(err) {
        res.json({error:err});
      }
      res.json({payload:response});
    })
});

router.delete('/', (req, res) => {
  Role.findOneAndRemove({_id:req.body._id}, function(err, response){
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

module.exports = router;
