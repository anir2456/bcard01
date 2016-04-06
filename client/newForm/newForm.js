Template.newForm.events({
"submit form": function(event,template){
	event.preventDefault();

	let firstName= template.find('#firstName').value;
	let LastName= template.find('#lastName').value;
	let gender= template.find('#gender').value;
	let quote= template.find('#quote').value;
	let githublink= template.find('#githubLink').value;

	Session.set('firstName', firstName);
	Session.set('LastName', LastName);
	Session.set('gender', gender);
	Session.set('quote', quote);
	Session.set('githublink', githublink);
	Router.go(`/${firstName}`);

}
});

Template.newForm.helpers({
	'lastName': function() {
		return Session.get('lastName');
	},
	'firstName': function(){
		return Session.get('firstName');
	},
	'gender': function(){
		return Session.get('gender');
	},
	'quote': function(){
		return Session.get('quote');
	},
	'githublink': function(){
		return Session.get('githublink');
	}
});