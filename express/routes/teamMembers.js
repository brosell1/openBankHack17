const TeamMember = require(`../models/TeamMembersModel.js`);
const express = require(`express`);
const router = express.Router();

/* GET users listing. */
router.get(`/`, (req, res) => {
  TeamMember.find(function(err, response) {
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

router.post('/', (req, res) => {
    var newTeamMember = new TeamMember();
    newTeamMember.username = req.body.username;
    newTeamMember.password = req.body.password;
    newTeamMember.companyId = req.body.companyId;
    newTeamMember.authLevel = req.body.authLevel;
    newTeamMember.admin = req.body.admin;
    newTeamMember.save(function(err, response){
      if(err) {
        res.json({error:err});
      }
      res.json({payload:response});
    })
});

router.get('/:username', (req, res) => {
  TeamMember.findOne({username:req.params.username}, function(err, response) {
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

router.put('/:username', (req, res) => {
    TeamMember.findOneAndUpdate({username:req.params.username}, req.body, function(err, response){
      if(err) {
        res.json({error:err});
      }
      res.json({payload:response});
    })
});

router.delete('/', (req, res) => {
  TeamMember.findOneAndRemove({username:req.params.username}, function(err, response){
    if(err) {
      res.json({error:err});
    }
    res.json({payload:response});
  });
});

module.exports = router;
