/* --------------------------------------------------------------------------------------------
    Autor:
      Jan Dousek (prace@jandousek.cz)
-------------------------------------------------------------------------------------------- */

/* jQuery  ------ */
jQuery(document).ready(function(){

  /* Fancybox --- */
  jQuery('.fancybox,.gallery a').fancybox();

  /* Rozbalovaci (FAQ) --- */
  jQuery(".faq dd").hide();
  jQuery(".faq dt").click(function(){
  	jQuery(this).toggleClass("ac").next().slideToggle("fast");
  });

  /* Skryvani a zobrazovani kategorii --- */
  jQuery(".navs .box").hide();
  jQuery(".navs .show-cats").click(function(){
  	jQuery(".navs .cats").slideDown("fast");
  	return false;
  });
  jQuery(".navs .show-issues").click(function(){
  	jQuery(".navs .issues").slideDown("fast");
  	return false;
  });
  jQuery(".navs .box").click(function(){
  	jQuery(this).fadeOut("medium");
  });

  /* Skryvani a zobrazovani obsahu cisla --- */
  jQuery(".article.detail .f-right img,.article.detail .f-right p").hide();
  jQuery(".show-article-content").click(function(){
  	jQuery(".article.detail img,.article.detail p").show();
  	return false;
  });

  /* Sirka wp-captions --- */
  jQuery(window).resize(function() {
    var sirka = $(".wp-caption").width();
    jQuery(".wp-caption").css("width",sirka);
  });

  /* Taby --- */
  jQuery(".tab-content").hide();
	jQuery(".tabs.js li:first").addClass("ac").show();
	jQuery(".tab-content:first").show();
	jQuery(".tabs.js li").click(function() {
		jQuery(".tabs.js li").removeClass("ac");
		jQuery(this).addClass("ac");
		jQuery(".tab-content").hide();
		var activeTab = $(this).find("a").attr("href");
		jQuery(activeTab).fadeIn();
		return false;
	});

	/* Oznacovani polozek --- */
  jQuery("ul li:last-child,table tr th:last-child,table tr td:last-child").addClass("last");
  jQuery("ul li:first-child,table tr th:first-child,table tr td:first-child").addClass("first");
  jQuery("table tbody tr:odd").addClass("odd");

  /* Slidery --- */
  jQuery('.gallery-slider .slides-c').slides({
    preload: false,
    effect: 'fade, fade',
    crossfade: true,
    generateNextPrev: false,
    generatePagination: true,
    play: 4000,
    pause: 2000,
    fadeSpeed: 200,
    hoverPause: true
  });

});