(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 



  if (window.matchMedia('(max-width: 991px)').matches)
  {
      $(".Leaderboard_left .ldbn_title a").click(function(){
          $(".Leaderboard_left ul").fadeToggle()
          $(".Leaderboard_left").toggleClass("active")
      })
      $(".Leaderboard_right .ldbn_title a").click(function(){
          $(".Leaderboard_right ul").fadeToggle()
          $(".Leaderboard_right").toggleClass("active")
      })

  }
 
})(jQuery);
