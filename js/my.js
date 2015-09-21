//Helper Functions
var prependToHeader = function(element){
	$("#header").prepend(element);
};

var appendToHeader = function(element){
	$("#header").append(element);
};

var formatElement = function(element, template){
	var formattedElement = template.replace("%data%", element);
	return formattedElement;
};

var formatSkills = function(element){	
	var formattedElement = new Array;
	for (var item in element) {
		formattedElement.push(HTMLskills.replace("%data%", element[item]));
	};
	return formattedElement.join('');
};

var formatContactElement = function(element){
	var formattedElement = HTMLcontactGeneric.replace("%contact%", element).replace("%data%", bio.contactInfo[element]);
	return formattedElement;
};

var formatContactInfo = function(element){
	var formattedElement = new Array();
	for (var item in element) {
		formattedElement.push(formatContactElement(item));
	};
	return formattedElement.join('');
};

var formatEmployers = function(element){
	var formattedElement = new Array;
	for (var item in element) {
		var employer = new Array; 
		employer.push(formatElement(element[item].employer, HTMLworkEmployer));
		employer.push(formatElement(element[item].title, HTMLworkTitle)); 
		employer.push(formatElement(element[item].dates, HTMLworkDates));
		employer.push(formatElement(element[item].location, HTMLworkLocation));
		employer.push(formatElement(element[item].description, HTMLworkDescription));
		formattedElement.push(HTMLworkStart.replace("%data%", employer.join('')));
	};
	return formattedElement.join('<hr>');
};

var formatProjects = function(element){
	var formattedElement = new Array;
	for (var item in element) {
		var project = new Array;
		project.push(formatElement(element[item].title, HTMLprojectTitle));
		project.push(formatElement(element[item].dates, HTMLprojectDates));
		project.push(formatElement(element[item].description, HTMLprojectDescription));
		project.push(formatElement(element[item].image, HTMLprojectImage));
		formattedElement.push(HTMLprojectStart.replace("%data%", project.join('')));
	};
	return formattedElement.join('<hr>');
};

var formatEducation = function(element){
	var formattedElement = new Array;
	for (var item in element) {
		var education = new Array;
		education.push(formatElement(element[item].name, HTMLschoolName));
		education.push(formatElement(element[item].degree, HTMLschoolDegree));
		education.push(formatElement(element[item].dates, HTMLschoolDates));
		education.push(formatElement(element[item].location, HTMLschoolLocation));
		education.push(formatElement(element[item].major.join(', '), HTMLschoolMajor));
		formattedElement.push(HTMLschoolStart.replace("%data%", education.join('')));
		console.log(formattedElement);
	};
	return formattedElement.join('<hr>');
};

var formatOnlineCourses = function(element){
	var formattedElement = new Array;
	formattedElement.push(HTMLonlineClasses);
	for (var item in element) {
		var onlineCourses = new Array;
		onlineCourses.push(formatElement(element[item].title, HTMLonlineTitle));
		onlineCourses.push(formatElement(element[item].school, HTMLonlineSchool));
		onlineCourses.push(formatElement(element[item].dates, HTMLonlineDates));
		onlineCourses.push(formatElement(element[item].url, HTMLonlineURL));
		formattedElement.push(HTMLschoolStart.replace("%data%", onlineCourses.join('')));
	};
	return formattedElement.join('<hr>');
};

//Do all the things!
$("#topContacts").append(formatContactInfo(bio.contactInfo));

prependToHeader(formatElement(bio.role, HTMLheaderRole));
prependToHeader(formatElement(bio.name, HTMLheaderName));
appendToHeader(formatElement(bio.imageURL, HTMLbioPic));
appendToHeader(formatElement(bio.welcomeMessage, HTMLwelcomeMsg));
appendToHeader(formatElement(formatSkills(bio.skills), HTMLskillsStart));

$("#projects").append(formatProjects(project.projects));
$("#workExperience").append(formatEmployers(work.employers));
$("#education").append(formatEducation(education.schools));
$("#education").append(formatOnlineCourses(education.onlineCourses));
$("#mapDiv").append(googleMap);

$("#footerContacts").append(formatContactInfo(bio.contactInfo));
