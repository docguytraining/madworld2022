//
// Copyright 2022  by Paul Pehrson.
// All Rights Reserved.
// Released under the MIT License
//
// Author: Paul Pehrson (paulpehrson@gmail.com)



///
/// DOC FEEDBACK EVENT HANDLER
///


function watchEventHandlers() { // This needs to run when the page loads so it continually watches for you to click on the link or button.

    $('p#docfeedback').on('click', function() { // used if you have a feedback link as text in a paragraph with the ID docfeedback
        console.log('DocFeedback link clicked');
        feedbacklink();
    });
    $('button#docfeedback').on('click', function() { // used if you have a feedback button with an ID docfeedback
        console.log('DocFeedback button clicked');
        feedbacklink();
    })

}






///
/// REPLACE TEXT (not in MadWorld demo)
///

function replaceButtonText() { // needed for accssibility b/c MadCap dosn't insert the text correctly
    if ($( "button.previous-topic-button" ).length) {
            $( "div#bottomnav" ).find( "button.previous-topic-button" ).text( "Previous Topic" ); // puts text in the Previous Topic button at bottom of page
            $( "div#bottomnav" ).find( "button.next-topic-button" ).text( "Next Topic" ); // puts text in Next Topic button at bottom of page
            $( "div#bottomnav" ).find( "button.next-topic-button" ).attr( "title","Next Topic" ); // puts attribute in Next Topic button at bottom of page
            $( "div#bottomnav" ).find( "button.previous-topic-button" ).attr( "title","Previous Topic" ); // puts attribute in Previous Topic button at bottom of page
                console.log('The bottom navigation button text and attribute values have been added.');
    } else {
        console.log("No bottom navigation buttons on page");
    }
}

/// FIX IMPORTED CONFLUENCE TABLES FOR ACCESSIBILITY (not in MadWorld demo)


function wrapTableHeader() { // if there is a table inserted from Confluence, we need to wrap the first row in a thead element for accessibility and for table sorting. 
    if ($( "table.confluenceTable" ).length) { // check to see if a table with class confluenceTable exists on the page
          $("table.confluenceTable tr:lt(1)").wrapAll("<thead></thead>"); // if table exists, wrap the first row in a thead tag
          $('table.confluenceTable colgroup').after( $('table.confluenceTable thead') ); // move thead tag to be right after colgroup tag
          console.log("Confluence table header row created");
    } else {
      console.log("No confluence table on page"); // script didn't find a table with class confluenceTable on the page, so no further action was taken. 
    }
  }





