//
// Copyright 2022 by Paul Pehrson.
// All Rights Reserved.
// Releaed under the MIT license
//
// Requires:    jQuery 3.4.1+
//              MadCap Flare 2021 R2+
//
// Author: Paul Pehrson
//

$( window ).on( "load", function() { // on load waits until the page is fully loaded then does the followng: 
    removeSideMenu();
	prependIcons();
});


function removeSideMenu() { //used on home page to remove sidenav. This is better than hiding it because it is more accessible this way. 
	$( "nav.sidenav-wrapper" ).remove();
	console.log("Sidenav removed from home page");
}

function prependIcons() { //used on home page to prepend icons and text for accessibility
	$('li:has(a.new)').removeClass("new").prepend($('<span class="icon-new" aria-label="New" role="image"></span>'));
	$('li:has(a.updated)').removeClass("updated").prepend($('<span class="icon-updated" aria-label="Updated" role"image"></span>'));
	console.log("New and Updated icons added");

}