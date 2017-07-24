import { Meteor } from 'meteor/meteor';

//run this code when meteor app is started
Meteor.startup(function(){

if(Polls.find().count()==0){

	var samplePolls=[
	{
		question:"Is Meteor awesome?",
		choices:[
		{text:"of course", vote:0},
		{text:"eh", vote:0},
		{text:"no,i like plain js", vote:0}
		]

	},

	{
		question:"Is css flex box greatest thing after array?",
		choices:[
		{text:"100% yes", vote:0},
		{text:"200% yes", vote:0},
		{text:"300% yes", vote:0}
		]
	}
	];

	//loop over each sample polls and insert
	_.each(samplePolls, function(poll){
		Polls.insert(poll);
	});

}
});