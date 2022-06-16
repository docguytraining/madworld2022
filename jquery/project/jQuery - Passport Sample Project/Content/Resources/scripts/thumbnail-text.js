///
/// ADD TEXT BEFORE IMAGE THUMBNAIL
/// Edit img.thumbnail class in stylesheet
///

function addThumbnailText() {
  console.log("step thumbnail function called");
    if ($( "img.imgthumbnail" ).length) { // checks to see if any img elements with class 'thumbnail' exist on the page. If yes:
        $("<span class='imgTxt'>Click image to expand</span>").insertBefore("img.imgthumbnail"); // insert this text.
        console.log("Text inserted before thumbnail(s).");
    }  
    else { // if not
       console.log("No image thumbnails on this page."); // write a message to the console that no images with chat class were found.
    }
}



/*   Styles that need to be in style sheet    */
/* 

img {
	max-width:95%;
}

img.imgthumbnail {
	min-height: auto;
	max-width: 900px;
	color: #ff3333;
	mc-thumbnail-max-height: 200px;
	mc-thumbnail: popup;
  }
  @media print {
	img.imgthumbnail {
	  mc-thumbnail: none;
	  max-width: 5in;
	}
  }


*/
