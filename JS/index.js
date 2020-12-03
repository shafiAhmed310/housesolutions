const responsive ={
  0:{
      items:1
  },
  320:{
      items:1
  },
  560:{
      items:2
  },
  960:{
      items:3
  }

}

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')
    // click event on the toggle icon
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
  $('a[href="#login"]').click(function(){
    $(this).modal({
        fadeDuration: 100,
        fadeDelay:0.50,
       clickClose:false,
      });
      return false;
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    navText:[$('owl-navigation .owl-nav-prev') , $('owl-navigation .owl-nav-next')],
    responsive:responsive

  
});

    //click to scroll top
    $('.move-up span').click(function(){
      $('html,body').animate({
          scrollTop:0
      },1000);
  })


    
});