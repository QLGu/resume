// Variables
var bio = {
	"name": "David Harris",
	"role": "Web Developer",
	"contacts": {
		"email": "forbiddenvoid@gmail.com",
		"mobile": "(719) 209-6021",
		"twitter": "forbiddenvoid",
		"github": "forbiddenvoid",
		"blog": "blog.forbiddenvoid.com",
		"location": "Colorado Springs"
	},
	"biopic": "images/me.jpg",
	"welcomeMessage": "I'm seeking a position as a web developer (front-end or full-stack). I have recently completed the Udacity Full Stack Web Developer Nanodegree program and am working to complete the Udacity Front End Web Developer Nanodegree right now.",
	"skills": ["Python",
			  "PostgreSQL",
			  "Apache",
			  "Linux",
			  "Flask",
			  "SQLAlchemy",
			  "Google App Engine",
			  "HTML",
			  "JavaScript",
			  "CSS",
			  "Bootstrap"]
};

var education = {
	"schools": [
		{ 
			"name": "Udacity",
			"location": "San Francisco, CA",
			"dates": 2015,
			"degree": "Nanodegree",
			"major": ["Full Stack Web Development", "Front End Web Development"],
			"url": "www.udacity.com"
		},
		{
			"name": "Defense Language Institute",
			"location": "Monterey, CA",
			"dates": 2003,
			"degree": "Diploma",
			"major": ["Arabic"],
			"url": "www.dliflc.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"dates": "2012",
			"url": "https://www.udacity.com/course/viewer#!/c-cs101"
		},
		{
			"title": "Programming Languages",
			"school": "Udacity",
			"dates": "2012",
			"url": "https://www.udacity.com/course/viewer#!/c-cs262"
		},
		{
			"title": "Design of Computer Programs",
			"school": "Udacity",
			"dates": "2013",
			"url": "https://www.udacity.com/course/viewer#!/c-cs212"
		},
		{
			"title": "Web Development",
			"school": "Udacity",
			"dates": "2013",
			"url": "https://www.udacity.com/course/viewer#!/c-cs253"
		},
		{
			"title": "Intro to Algorithms",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/course/viewer#!/c-cs215"
		},
		{
			"title": "Programming Foundations with Python",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud036"
		},
		{
			"title": "Intro to Relational Databases",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud197-nd"
		},
		{
			"title": "Full Stack Foundations",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud088-nd"
		},
		{
			"title": "Authentication and Authorization: OAuth",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud330-nd"
		},
		{
			"title": "Developing Scalable Apps in Python",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud858-nd"
		},
		{
			"title": "Configuring Linux Servers",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud299-nd"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud304"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud893-nd"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		},
		{
			"title": "Intro to jQuery",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud245-nd"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "T. Rowe Price",
			"title": "Personal Service Client Manager",
			"dates": "November 2012-August 2015",
			"location": "Colorado Springs, CO",
			"description": "Provided consultative financial and investment guidance to high net worth mutual fund clients."
		},
		{
			"employer": "Colorado Hi-Tech Solutions",
			"title": "Field Tech",
			"dates": "March 2011-November 2012",
			"location": "Colorado Springs, CO",
			"description": "Maintained network and workstation systems for small and medium business clients."
		},
		{
			"employer": "PC Habits",
			"title": "Tech",
			"dates": "2008-2012",
			"location": "Colorado Springs, CO",
			"description": "Serviced PC part warranty repair and installation."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Movie Trailer Poster Website",
			"dates": 2015,
			"description": "A simple responsive website that uses JSON data to populate a series of movie posters. When a user clicks a poster, a modal window opens and the movie's Youtube trailer plays.",
			"images": ["http://placehold.it/300x200", "http://placehold.it/300x200"]
		},
		{
			"title": "Tournament Event Reporter",
			"dates": 2015,
			"description": "A python/mysql applet that allows for user registration for a tournament event. The application records the results of each set of matches and generates a new match list each round, pairing participants with opponents of similar win/loss records.",
			"images": ["http://placehold.it/300x200"]
		},
		{
			"title": "AppReview",
			"dates": 2015,
			"description": "A responsive, database-driven web application. The application allows users to log in, and once logged in to create entries for app categories and individual apps. Users can delete/modify their own apps and categories and view the apps and categories of others.",
			"images": ["http://placehold.it/300x200"]
		},
		{
			"title": "Conference Central",
			"dates": 2015,
			"description": "A back-end conference management system supporting potentially multiple front-end platforms. this back-end system was created in Google App Engine, using GAE's Cloud Endpoint system. No front end work was done for this and all of the testing was done using Google's APIs Explorer.",
			"images": ["http://placehold.it/300x200", "http://placehold.it/300x200"]
		},
		{
			"title": "Porfolio Display Site",
			"dates": 2015,
			"description": "A single-page responsive website that displays these projects, with links to the related GitHub repositories",
			"images": ["http://placehold.it/300x200"]
		},
		{
			"title": "Interactive Resume (this site)",
			"dates": 2015,
			"description": "This interactive resume site. Utilized JavaScript, CSS and HTML to design this experience.",
			"images": ["http://placehold.it/300x200","http://placehold.it/300x200", "http://placehold.it/300x200"]
		}
	]			
};

var map = {};


function formatData(template, data) {
	return template.replace("%data%", data);
};

map.display = function() {
	$("#mapDiv").append(googleMap);
};

bio.displaySkills = function() {
	if (bio.skills != null) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			$("#skills").append(formatData(HTMLskills, bio.skills[skill]));
		};
	};
};

bio.displayContacts = function() {
	if (bio.contacts != null) {
		formattedContacts = [
							 formatData(HTMLmobile, bio.contacts.mobile),
							 formatData(HTMLemail, bio.contacts.email),
							 formatData(HTMLtwitter, bio.contacts.twitter),
							 formatData(HTMLgithub, bio.contacts.github),
							 formatData(HTMLblog, bio.contacts.blog),
							 formatData(HTMLlocation, bio.contacts.location)
		];
		$("#topContacts").append(formattedContacts.join(''));
		$("#footerContacts").append(formattedContacts.join(''));
	};
};

bio.display = function() {
	$("#header").prepend(formatData(HTMLheaderRole, bio.role));
	$("#header").prepend(formatData(HTMLheaderName, bio.name))
	$("#header").append(formatData(HTMLbioPic, bio.biopic));
	$("#header").append(formatData(HTMLwelcomeMsg, bio.welcomeMessage))
	bio.displayContacts();
	bio.displaySkills();
};

work.display = function() {
	if (work.jobs != null) {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			formattedJob = [
							formatData(HTMLworkEmployer, work.jobs[job]["employer"]),
							formatData(HTMLworkTitle, work.jobs[job]["title"]),
							formatData(HTMLworkDates, work.jobs[job]["dates"]),
							formatData(HTMLworkLocation, work.jobs[job]["location"]),
							formatData(HTMLworkDescription, work.jobs[job]["description"])
			];
			$(".work-entry:last").append(
				formattedJob.join('') + ('<hr>'));
		};
	};
};

projects.display = function() {
	if (projects.projects != null) {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			formattedProject = [
								formatData(HTMLprojectTitle, projects.projects[project]["title"]),
								formatData(HTMLprojectDates, projects.projects[project]["dates"]),
								formatData(HTMLprojectDescription, projects.projects[project]["description"]),
								];
			for (image in projects.projects[project].images) {
				formattedProject.push(formatData(HTMLprojectImage, projects.projects[project].images[image]));
			};
			$(".project-entry:last").append(
				formattedProject.join('') + ('<hr>'));
		};
	};
};

education.display = function() {
	if (education.schools != null) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			formattedSchool = [
							   formatData(HTMLschoolName, education.schools[school]["name"]),
							   formatData(HTMLschoolDegree, education.schools[school]["degree"]),
							   formatData(HTMLschoolDates, education.schools[school]["dates"]),
							   formatData(HTMLschoolLocation, education.schools[school]["location"]),
							   formatData(HTMLschoolMajor, education.schools[school]["major"].join(", ")),
							   formatData(HTMLonlineURL, education.schools[school]["url"])
			];
			$(".education-entry:last").append(
				formattedSchool.join('') + ('<hr>'));
		};
	};
	if (education.onlineCourses != null) {
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			formattedCourse = [
							   formatData(HTMLonlineTitle, education.onlineCourses[course]["title"]),
							   formatData(HTMLonlineSchool, education.onlineCourses[course]["school"]),
							   formatData(HTMLonlineDates, education.onlineCourses[course]["dates"]),
							   formatData(HTMLonlineURL, education.onlineCourses[course]["url"])
			];
			$(".education-entry:last").append(
				formattedCourse.join('') + ('<hr>'));
		};
	};
};

bio.display();
work.display();
projects.display();
education.display();
map.display();

