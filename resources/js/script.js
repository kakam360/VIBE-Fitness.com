$(document).ready(function(){
  
//   let scrollLink = $('.scroll');

//   scrollLink.click(function(e){
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 1000)
//   });

//   // Active link switching
//   $(window).scroll(function(){
//     let scroolBarLocation = $(this).scrollTop();

//     scrollLink.each(function() {
//       let sectionOffset = $(this.hash).offset().top -20;

//       if(sectionOffset <= scroolBarLocation) {
//         $(this).parent().addClass('active');
//         $(this).parent().siblings().removeClass('active');
//       }
//     })
//   });

  $('.pricing').waypoint(function(direction) {

    if(direction == "down") {

      $('nav').addClass('sticky');

    } else {

      $('nav').removeClass('sticky');

    }

  }, {

    offset: '70px;'

  });

  new WOW().init();

})