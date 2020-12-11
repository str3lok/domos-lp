$(function() {
	
	// главный слайдер
	$(".mainSliderInit").slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchThreshold: 50
	}); 

		// СОТРУДНИЧЕСТВО табы
	$(".coop-tab-js").on("click", function (e) {
		e.preventDefault();

		if (!$(this).hasClass("is-active")) {
			var tabId = $(this).attr("data-tab");
			var parentTabsBox = $(this).closest(".cooperation__content");
			var tabList = $(parentTabsBox).find(".cooperation__tabs");
			$(tabList).find(".is-active").removeClass("is-active");
			$(this).addClass("is-active");

			$(parentTabsBox)
				.find(".cooperation__tab-block:not(." + tabId + ")")
				.hide();
			$(parentTabsBox)
				.find(".cooperation__tab-block." + tabId)
				.show();
		}
	});	
		// слайдер Наши проекты изображение
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		arrows: true,
		dots: true,
		touchThreshold: 50,
		centerMode: true,
		asNavFor: '.slider-nav',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					variableWidth: false
				},
			},
		],

	});
	// слайдер Наши проекты текст
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		touchThreshold: 50,
		variableWidth: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					variableWidth: false
				},
			},
		],		
	});	

	// слайдер отзывов
	$(".reviewsInit").slick({
		infinite: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		touchThreshold: 50,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				},
			},
		],				
	}); 

	// показать форму width <= 1023
	$(".btn-request-js").on("click", function (e) {
		e.preventDefault();
		var request_form = $('.main__request').find('.request__container');
		
		if($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$(request_form).hide();
		}
		else {
			$(this).addClass('is-active');
			$(request_form).show();
		}
	});		
	
	// скролл до блока
	$(".link-scroll").on("click", function (e) {
	
		if (this.hash !== "") {
			e.preventDefault();
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});			
		}

	});

	// мобильное меню
	$(".touch-btn-js").on("click", function (e) {
		e.preventDefault();
		var nav_block = $('.header__nav--container').find('.header__nav');
		
		if($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$(nav_block).hide();
		}
		else {
			$(this).addClass('is-active');
			$(nav_block).show();
		}
	});			


// маска для телефона
try {
 Inputmask("+7 (999) 999 - 9999").mask("input[type=tel]");
} catch (e) {}

}); //- end 

function slide_bg() {
	var windowWidth = $(window).outerWidth(); 
	var imgPath;
	$('.main__slider--item').each(function () {
		if (windowWidth >= 1024) {
			imgPath = $(this).attr('data-lg');
			$(this).css({ 'backgroundImage': 'url(' + imgPath + ')' }); 
		}
		else {
			imgPath = $(this).attr('data-xs');
			$(this).css({ 'backgroundImage': 'url(' + imgPath + ')' }); 
		}
	});
	
}

function sliderSlickInit(slider, params) {
	$('.' + slider).slick(params);
}
function sliderSlickDestroy(slider) {
	$('.' + slider).slick('unslick');
}

var advantages_slider_params = {
	infinite: true,
	dots: false,
	slidesToShow: 2,
	slidesToScroll: 2,
	arrows: true,
	touchThreshold: 50,
	responsive: [
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}



function loadPage() {
	var windowWidth = $(window).outerWidth();
	if($('.mainSliderInit')) {
		slide_bg();
	}

	if(($('.advantages_slider')) && (windowWidth <= 1023) ) {
		sliderSlickInit('advantages_slider', advantages_slider_params);
	};	

}//end loadPage
window.addEventListener("load", loadPage);


function resizePage() {
	var windowWidth = $(window).outerWidth(); 

	if(windowWidth >= 1024) {
		$(".btn-request-js").removeClass('is-active');
		$('.main__request').find('.request__container').removeAttr('style');

		if(($('.advantages_slider')) && ($('.advantages_slider').hasClass('slick-initialized')) ) {
			sliderSlickDestroy('advantages_slider');
		};		

	}

	if(windowWidth >= 640) {
		$(".touch-btn-js").removeClass('is-active');
		$('.header__nav--container').find('.header__nav').removeAttr('style');
	}

	if(windowWidth <= 1023) {
		if(($('.advantages_slider')) && (!$('.advantages_slider').hasClass('slick-initialized')) ) {
			sliderSlickInit('advantages_slider', advantages_slider_params);
		};		
	}



	if ($('.mainSliderInit')) {
		slide_bg();
	}		
}//end resizePage
window.addEventListener("resize", resizePage);