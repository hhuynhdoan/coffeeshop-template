
/*------for-search-bar------------------*/
		$(document).on('click','.search',function(){
			$('.search-bar').addClass('search-bar-active')
		});
		/*---for-search-cancel*/
		$(document).on('click','.search-cancel',function(){
			$('.search-bar').removeClass('search-bar-active')
		});
		/*---for-login-signup------------------*/
		//login
		$(document).on('click','.user',function(){
			$('.form').addClass('login-active')
		});

		$(document).on('click','.form-cancel',function(){
			$('.form').removeClass('login-active')
		});

		//signup

		$(document).on('click','.sign-up-btn',function(){
			$('.form').addClass('sign-up-active').removeClass('login-active')
		});
		$(document).on('click','.form-cancel',function(){
			$('.form').removeClass('sign-up-active')
		});

		//already-account

		$(document).on('click','.already-account',function(){
			$('.form').addClass('login-active').removeClass('sign-up-active')
		});

/*full-slider--------------*/	
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        auto: true,
        loop:true
    });
});

/*feature-box*----------*/
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

/*for-fix-menu-when-scroll*/

$(window).scroll(function(){
	if($(document).scrollTop() > 50){
		$('.navigation').addClass('fix-nav');
	}
	else{
		$('.navigation').removeClass('fix-nav');
	}
	
});

/*for-responsive-menu*/
$(document).ready(function(){
		$('.toggle').click(function(){
			$('.toggle').toggleClass('active')
			$('.navigation').toggleClass('active')
		})
	});