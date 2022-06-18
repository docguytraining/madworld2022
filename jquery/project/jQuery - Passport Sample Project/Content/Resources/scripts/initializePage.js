//
// Copyright 2022  by Paul Pehrson.
// All Rights Reserved.
// Released under the MIT License
//
// Author: Paul Pehrson (paul.pehrson@gmail.com)


//  The READY event occurs after the HTML document has been loaded, while the ONLOAD event occurs later, 
// when all content (e.g. images) also has been loaded.

// The ONLOAD event is a standard event in the DOM, while the ready event is specific to jQuery. 

//The purpose of the ready event is that it should occur as early as possible after the document has loaded, 
//so that code that adds functionality to the elements in the page doesn't have to wait for all content to load.
//

$(document).ready(function(){ // as soon as all HTML has been loaded, before images or other jQuery items added 
    watchEventHandlers(); // We have an event handler in doc-feedback.js to watch for  clicks on the doc feedback link
    filterTable();	// add table search/filter behavior to tables on the page. 
});

$( window ).on( "load", function() { // on load waits until the page is fully loaded then does the followng: 
    addThumbnailText(); // Runs function from the thumbnail-text.js file
    console.log("window on load function called in initializePage.js");
});

$("li#logo-wrapper").on("loaded", function () { // Fires after the top-nav menu has finished loading
    
 });



$(function() {
    $('table').tablesorter({
      theme : 'blue', // read the docs, and set the theme you want to use here
      widgets : ['stickyHeaders', 'zebra' ],
        widgetOptions : {
        stickyHeaders: 'tablesorter-stickyHeader',
        stickyHeaders_offset : 25 // this is the number, in px, of our header height when it is small
      }
    });
});