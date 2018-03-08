var express = require('express');
var router = express.Router();

// we want to route it to /dictionary-api route at line 38
var skierTerms = [
{
	term: "helo",
	defined: "jhzdfbvakdbgiwlF EJFHVEEUGFBAEGKEAG"
},
{
	term: "JHFBDG",
	defined: "DJHGFEGjberug rgjhgonrt rdgbdjgk"
},
{
	term: "jrdbgiergn",
	defined: "kjdgh eugibe qiowhs dnsdgeleg"
}
];

// seting up routes
//---------------get route
// 1st argument> location for that route, 2nd argument> function that handles any requests on that route
router.get('/dictionary-api', function(req, res){
	res.json(skierTerms);
});

//---------------post route
router.post('/dictionary-api', function(req, res){
	skierTerms.push(req.body);
	res.json(skierTerms);
});

//---------------delete route
//setting up route with routing variable
router.delete('/dictionary-api/:term', function(req, res){
	//the paramenter value is available here> req.params.term
	skierTerms = skierTerms.filter(function(def){
		return def.term.toLowerCase() !== req.params.term.toLowerCase();
	});
	res.json(skierTerms);
});

module.exports = router;