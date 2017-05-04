
$(document).ready(function(e){
	/* document click*/
	var sortflag = 0;
	$(document).click(function (e)
	{
	    var container = $(".sort-wrap-content");

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	    	if( sortflag == 1)
	        {
	        	container.slideUp(200);
	        }
	    }
	});
/*filters menu*/
$(".products-archive-filters-dropdown-wrap").on("click",function(e){
	$(".products-archive-filters-col").slideToggle();
});
/* mobile menu */
$(".wisdmjeans-navbar-links").find("a").on("click",function(e){
	$(".navbar-toggle").addClass("collapsed");
	$(".wisdmjeans-navbar-links").removeClass("in");
});	
/*-----------*/
$(".products-view-wish-link").on("click",function(e){
	e.preventDefault();
});
/*szie drop down*/
$(".procuts-details-page-size-dropdwon").on("click",function(e){
	$(".size-drop-down-link").slideToggle();
});
$(".size-drop-down-link li a").on("click",function(e){
	$(".size-drop-down-link").slideUp();
	$(".procuts-details-page-size-dropdwon .text").text($(this).text());
});
	/*zoom js*/
	//initiate the plugin and pass the id of the div containing gallery images
$("#zoom_03").elevateZoom({gallery:'gallery_01',  zoomType: "inner", cursor: "crosshair", galleryActiveClass: 'active', imageCrossfade: true}); 

//pass the images to Fancybox
$("#zoom_03").bind("click", function(e) {  
  var ez =   $('#zoom_03').data('elevateZoom');	
	$.fancybox(ez.getGalleryList());
  return false;
});
	/*sort dropdwon*/
	$(".sort-wrap-heading").on("click",function(e){
		$(".sort-wrap-content").slideToggle(200);
		sortflag = 1;
		e.stopPropagation();
	});
	
	$(".sort-wrap-content li a").on('click',function(e){
		$(".sort-wrap-content").slideUp(200);
		if(!$(this).hasClass("active"))
		{
			$(".sort-block-div").append("<div class='sort-block'>"+$(this).text()+"<span class='glyphicon glyphicon-remove sort-block-close'></span></div>");
		}
		$(this).addClass("active");
		
	});
	$(document).on("click",".sort-block-close",function(e){
		var str = $(this).closest(".sort-block").text();
		$(".sort-wrap-content li a").each(function(e){
			if(str === $(this).text())
			{
				$(this).removeClass("active");
			}
		});
		$(this).closest(".sort-block").fadeOut(200);
	});
	

 	doResize();
	
	/*quickview-owl-carousel*/
	$(".quickview-owl-carousel").owlCarousel({
		 items:1,
        loop:false,	
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
	});
	/*slideer*/
	 $(".owl-carousel").owlCarousel();
 	/*price slider*/
	 	var slider = document.getElementById('price-slider');

	noUiSlider.create(slider, {
		start: [18,100],
		connect: true,
		margin: 20,
		range: {
			'min': 0,
			'max': 100
		},
		format: wNumb({
			decimals: 0,
			thousand: '.',
			prefix: '$',
		})
	});

	var marginMin = document.getElementById('price-slider-min-value'),
		marginMax = document.getElementById('price-slider-max-value');

	slider.noUiSlider.on('update', function ( values, handle ) {
		if ( handle ) {
			marginMax.innerHTML = values[handle];
		} else {
			marginMin.innerHTML = values[handle];
		}
	});

	
});
/* scroll */
 (function($){
    $(window).on("load",function(){
        $(".products-wrapper-filter ul.list").mCustomScrollbar();
    });
})(jQuery);

/*loader*/
var myVar;
function myFunction() {
    myVar = setTimeout(showPage,200);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

/* doresize function*/
function doResize()
{

    // FONT SIZE
    var ww = $('body').width();
    var maxW = 1920;
    ww = Math.min(ww, maxW);
    var fw = ww*(10/maxW);
    var fpc = fw*100/16;
    var fpc = Math.round(fpc*100)/100;
    $('html').css('font-size',fpc+'%');

}
