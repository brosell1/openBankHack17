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

router.get('/:companyId/:roleName', (req, res) => {
  Role.findOne({companyId:req.params.companyId, Name:req.params.roleName}, function(err, response) {
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

router.put('/:companyId:/roleName', (req, res) => {
    Role.findOneAndUpdate({companyId:req.params.companyId, Name:req.params.roleName}, req.body, function(err, response){
      if(err) {
        res.json({error:err});
      }
      res.json({payload:response});
    })
});

router.post('/:companyId/:roleName', (req, res) => {
  Role.findOneAndRemove({companyId:req.params.companyId, Name:req.params.roleName}, function(err, response){
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
    }
  });
});

module.exports = router;
