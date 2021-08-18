'use strict';
const express=require("express");
const router=express.Router();
const data=require("../Data/data.js");
module.exports=router;


router.post("/setcandidates",express.json(),(req,res)=>{
	console.log(req.body);
	data.set_candidates(req.body.candidates);
	data.Clear();
	let ans={result:"ok"};
	res.json(ans);
});

router.get("/getcandidates",(req,res)=>{
	res.json({"candidates":data.get_candidates()});
});


router.get("/gettotalcount",(req,res)=>{
	let ans={};
	ans.votes=new Object();
	for(let c of data.get_candidates()){
		console.log(c,data.get_votes(c));
		ans.votes[c]=data.get_votes(c);
	}
	console.log(ans);
	res.json(ans);
});

router.post("/voting",express.json(),(req,res)=>{
	console.log(req.body);
	let ans={};
	if(!data.set_voter(req.body.voter)){
		ans.error="already voted";
	}else{
		let candidate=req.body.candidate;
		let votes=data.get_votes(candidate);
		data.set_votes(candidate,votes+1);
		console.log(votes);
		if(votes==-1){
			ans.error="invalid candidate";
		}else{
			ans.result="ok";
		}
	}
	res.json(ans);
});
