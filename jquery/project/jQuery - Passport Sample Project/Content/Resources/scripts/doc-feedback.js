///
/// DOC FEEDBACK LINK
///

function watchEventHandlers() {
    console.log("Watching for events in doc-feedback.js");

    $('#docfeedback').on('click', function() { // watches any element with id="docfeedback" for a click.
        console.log('DocFeedback trigger clicked'); // logging for troubleshooting
        feedbacklink(); // Will run the feedbacklink function below
    });

}

function feedbacklink() { // This function only runs when called in another script. 

	var version = $("span#version").text(); //uses jquery to get the value of the 
	                                        //span#version element, which on our template page is
	                                        //a variable that displays the version of the product
	var email = "somebody@example.com";  //email address where feedback will be sent
	var heading = $("h1").text();        //uses jquery to pull the first H1 on the page to use in 
	                                        //the email subject
	var filelink = (location.origin).concat(location.pathname); // Original URL
	var pathname2 = (location.pathname); // Just the path without the host
	var hrefattribute = "mailto:" + email + "?subject=Doc Feedback for topic: " + heading + "&body=Title: " + heading + "%0D%0ADocumentation Version: " + version + "%0D%0AFile path: " + pathname2 + "%0D%0AOriginal URL: " + filelink + "%0D%0ADocumentation Feedback:%0D%0A%0D%0A"; // formats the mailto link

	location.href = hrefattribute; // actually re-directs you to the users email program 
}