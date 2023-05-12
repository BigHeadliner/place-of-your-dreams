$(function () { 
       
      $('.header-inner__slider').slick({
        dots: false, 
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // centerMode: true,
        variableWidth: true
      });   
       
      $('.eatured-inner__items').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1, 
        arrows: true,
      });

       
      var mixer = mixitup('.featured-inner__items');

});  
