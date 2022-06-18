/// CHANGE TOP MENU SIZE SMALLER WHEN SCROLLING
/// REQUIRES JQUERY UI

$(window).scroll(function(){ // make top menu change size when scrolling
    if($(document).scrollTop() > 100) { // if the window scoll goes beyond thid point, then:
        $('nav').addClass('small'); // add the class 'small' to the 'nav' element.
    } else {  // if the window is NOT beyond that point, then:
        $('nav').removeClass('small'); // remove the 'small' class from the 'nav' element.
    }
});