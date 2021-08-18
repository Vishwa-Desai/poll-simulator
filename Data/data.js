var votes={};
var voters=new Set();
//takes a list of candidate names
function set_candidates(caldidateList){
	votes={};
	for(let c of caldidateList){
		votes[c]=0;
	}
}

//returns a list of candidates
function get_candidates(){
	let candidates=[];
	for(let c in votes){
		candidates.push(c);
	}
	return candidates;
}

//returns false if candidate invalid else true
function set_votes(candidate,count){
	if(candidate in votes){
		votes[candidate]=count;
		return true;
	}else{
		return false;
	}
}

//return -1 if candidate invalid else his votes
function get_votes(candidate){
	if(candidate in votes){
		return votes[candidate];
	}else{
		return -1;
	}
}

//mark that voter has voted
//return false if already voted else true
function set_voter(voter){
	if(voters.has(voter)){
		return false;
	}
	voters.add(voter);
	return true;
}

//clear all voters
function Clear(){
	voters.clear();
}
exports.set_candidates=set_candidates;
exports.get_candidates=get_candidates;
exports.set_votes=set_votes;
exports.get_votes=get_votes;
exports.set_voter=set_voter;
exports.Clear=Clear;

