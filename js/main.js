

$(document).ready(function(){
	

	/* TOP Menu Stick  */
	
	$(window).on('scroll',function() {
	if ($(this).scrollTop() > 1){  
		$('#sticky-header').addClass("sticky");
	  }
	  else{
		$('#sticky-header').removeClass("sticky");
	  }
}); 
	
	
//Mobile Menu active//
	
	jQuery('#mobile_menu_active').meanmenu();
	
	
//main slider active//
	
	$('.slider_active').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
	
	//one page nav active//
	
	$('#nav').onePageNav();
	
	
	//parallax active//
	
	$('.testimonial-area').parallaxie({
		speed: 0.5,
		offset: 50,

});
	
	
})


//testimonial active//

$('#testimonial-active').owlCarousel({
						
			
			autoplay:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:1
				},
				1000:{
					items:2
				}
			}
})
	

//letest_blog_active//

$('#letest_blog_active').owlCarousel({
						
			
			autoplay:false,
			smartSpeed:1000,
			margin:30,
			loop:true,
			nav:false,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:1
				},
				1000:{
					items:2
				}
			}
})
	

//partner area active//

$('#partner_active').owlCarousel({
						
			
			autoplay:true,
			smartSpeed:2000,
			margin:30,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				0:{
					items:1
				},
				700:{
					items:4
				},
				1000:{
					items:5
				}
			}
})
	

//portfolio active//

var mixer = mixitup('.portfolio_item',{
	animation:{
		effectsOut:'fade translate(-100%)',
	}
});



