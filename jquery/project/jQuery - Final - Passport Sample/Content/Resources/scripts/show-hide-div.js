/// 
/// filter buttons that apply based on class
///


$(function() {
    var $btns = $('.btn').click(function() {
      if (this.id == 'all') { // triggers if user clicks the button with id="all"
        console.log("Show All filter button clicked");
        $('#pagetopics > div').fadeIn(625);
      } else {
        var $classClicked = $('.' + this.id).fadeIn(625); // triggers is user clicks any other button
        console.log("Filter button clicked");
        $('#pagetopics > div').not($classClicked).hide();
      }
      $btns.removeClass('active'); //removes active class from the previously-clicked element
      $(this).addClass('active'); // adds active class to the current element
    });
  });