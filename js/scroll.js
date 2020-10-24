$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.overlay-image').css('top',(0-(scrolled*0.2))+'px');
}

