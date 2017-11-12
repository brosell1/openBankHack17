const express = require(`express`);
const router = express.Router();

/* GET home page. */
router.post(`/createrequest`, (req, res, next) => {
  console.log("start of route");
  console.log(req.body);
  var options = { method: `${req.body.method}`,
    url: `https://play.railsbank.com/${req.body.path}`,
    headers:
     { 'cache-control': 'no-cache',
       'content-type': 'application/json',
       authorization: 'API-Key 1s0RaCIKWgYzJ7ZRwufskwzsvIqSOPVR#hUcNK5liZAjCAjQ0XWhyjDMdOIejhiAnuegSmIYTX39xDpEmg82oUnxZfqD9dHGD' },
    body:
     req.body.requestFields,
    json: true };
  request(options, function (err, response, body) {
    if (err) {
      res.json({"error":err})
    };
    res.json({payload:body});
  });
});

module.exports = router;
