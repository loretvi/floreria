/**
 * Theme functions file
 *
 * Contains handlers for navigation, accessibility, header sizing
 * footer widgets and Featured Content slider
 *
 */
( function( $ ) {
	"use strict";
	var _body    = $( 'body' ),
		_window = $( window );
	$(document).ready(function() {
		_filter_ajax_sort_count();
		_sticky_menu();
		_sticky_product();
		_sticky_nextproduct();
		_left_right_submenu();
		// Search toggle.
		_search_toggle();
		/*Menu Categories*/
		_categories_menu_toggle();
		//Check to see if the window is top if not then display button
		_back_to_top();
		/* Add button show / hide for widget_product_categories */
		_toggle_categories();
		_event_single_image();
		_load_wpbingo_menu_sidebar();
		_event_ajax_search();
		_event_circlestime();
		_event_accordion_slider();
		_tongle_menu();
		_remove_animation_tab_visua();
		_event_video_product();
		_load_video_popup();
		_moreverticalMenu();
		_click_button();
		_click_add_to_cart();
		_after_add_to_cart();
		_click_atribute_image();
		_active_form_login();
		_click_login_ajax();
		_load_event_countdown();
		_update_total_wishlist();
		_load_count_up();
		_load_360_view_product();
		_load_slick_carousel($(".related .slick-carousel"));
		_load_slick_carousel($(".upsells .slick-carousel"));
		_load_slick_carousel($(".cross_sell .slick-carousel"));
		_load_slick_carousel($(".woocommerce-product-subcategories.slick-carousel"));
		_load_slick_carousel($(".bestseller-product .slick-carousel"));
		$(".gallery-slider .slick-carousel").each(function(){
			_load_slick_carousel($(this));
		});		
		$(".bwp-single-product .slick-carousel").each(function(){
			_load_slick_carousel($(this));
			$('.video-additional iframe').css("width",$(".image-additional #image").width());
			$('.video-additional iframe').css("height",$(".image-additional #image").height());
			$('.content-thumbnail-scroll .img-thumbnail-video img').css("width",$(".content-thumbnail-scroll .img-thumbnail-scroll img").width());
			$('.content-thumbnail-scroll .img-thumbnail-video img').css("height",$(".content-thumbnail-scroll .img-thumbnail-scroll img").height());
		});
		_click_quickview_button();
		_event_quick_buy();
		if($(".woocommerce-product-subcategorie-content").length > 0){
			$(".woocommerce-product-subcategorie-content").addClass('active');
		}		
	});
	_window.resize(function() {
		_load_canvas_menu();
		_left_right_submenu();
		_tongle_menu();
		_moreverticalMenu();
	});	
	/* Show/hide NewsLetter Popup */
	_window.load(function() {
		$("#loader").addClass("pre-loading");
		_body.addClass('loaded');		
	});
	
	function _tongle_menu(){
		var wd_width = _window.width();
		var $menu_sidebar = $("#menu-main-menu",".home-sidebar");
		//Menu Left
		var $menu_left = $("#menu-main-menu",".header-v3");
		appendGrower($menu_left);
		//Menu Left Header 8
		var $menu_left_2 = $("#menu-main-menu",".header-v8");
		appendGrower($menu_left_2);
		//Menu Left
		if(wd_width > 991)
		{
			offtogglemegamenu($menu_sidebar);
		}else{
			appendGrower($menu_sidebar);
		}	
	}	
	function _filter_ajax_sort_count(){
		if(!$('.bwp-filter-ajax').length){
			$( ".sort-count" ).change(function() {
				var value = $(this).val();
				_setGetParameter('product_count',value);
			});
		}		
	}
	function _toggle_categories(){
		var $root = $(".widget_product_categories");
		if($(".current-cat-parent",$root).length > 0){
			var $current_parent = $(".current-cat-parent",$root);
			$current_parent.addClass('open');
			$("> .children",$current_parent).stop().slideToggle(400);
		}
		var $current = $(".current-cat",$root);
		$current.addClass('open');
		$("> .children",$current).stop().slideToggle(400);
		$( '.cat-parent',$root ).each(function(index) {
				var $element = $(this);
				if($(".children",$element).length > 0){
				$element.prepend('<span class="arrow"></span>');
				$(".arrow",$element).on( 'click', function(e) {
					e.preventDefault();
					$element.toggleClass('open').find( '> .children' ).stop().slideToggle(400);
				});
			}
		});
	}	
	function _back_to_top(){
	   _window.scroll(function() {
			if ($(this).scrollTop() > 800) {
				$('.back-top').addClass('button-show');
			} else {
				$('.back-top').removeClass('button-show');
			}
		});
		$('.back-top').on( "click", function() {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
			return false;
		});			
	}	
	function _categories_menu_toggle(){
		if($('.categories-menu .btn-categories').length){
			$('.categories-menu .btn-categories').on( "click", function(){
				$('.wrapper-categories').toggleClass('bwp-active');
			});
		}
	}
	function _search_toggle(){
		$( '.search-toggle' ).on( 'click.break', function( event ) {
			$('.page-wrapper').toggleClass('opacity-style');
			var wrapper = $( '.search-overlay' );
				wrapper.toggleClass( 'search-visible' );
		} );
		$( '.close-search','.search-overlay' ).on( 'click.break', function( event ) {
			$('.page-wrapper').toggleClass('opacity-style');
			var wrapper = $( '.search-overlay' );
				wrapper.toggleClass( 'search-visible');
		} );
	}
	
	function _show_homepage_sidebar(){
		var $homepage_sidebar = $('.header-sideward-left-menu');
		$('.btn-sideward-left').on( "click", function() {
			if($homepage_sidebar.hasClass('active')){
				$homepage_sidebar.removeClass('active');
			}
			else{
				$homepage_sidebar.addClass('active');
			}
			return false;
		});			
	}

	_show_homepage_sidebar();
	
	function _wpbingo_menu_left(){
		//Navigation Right
		var $header_wpbingo_menu_left = $('.header-wpbingo-menu-left');
		$('.wpbingo-menu-left .menu-title').on( "click", function() {
			if($header_wpbingo_menu_left.hasClass('active')){
				$header_wpbingo_menu_left.removeClass('active');
			}	
			else{
				$header_wpbingo_menu_left.addClass('active');
			}	
			return false;
		});			
	}
	_wpbingo_menu_left();
	function _show_sticky_sidebar(){
		var $sticky_sidebar = $('.sticky-sidebar');
		$('.btn-sticky').on( "click", function() {
			if($sticky_sidebar.hasClass('active')){
				$sticky_sidebar.removeClass('active');
			}	
			else{
				$sticky_sidebar.addClass('active');
			}	
			return false;
		});			
	}
	_show_sticky_sidebar();	
	
	function _flacio_accordion_menu(){	
		var $elements = $(".categories-vertical-menu.accordion");
		$('.widget-title',$elements).on( "click", function() {
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('.bwp-vertical-navigation >div',$elements).slideUp();	
			}	
			else{
				$(this).addClass('active');
				$('.bwp-vertical-navigation >div',$elements).slideDown();		
			}
		});		
	}
	
	_flacio_accordion_menu();
	
	function _headercategories(){
		//Navigation right
		var $menu_categories = $('.menu-categories');
		$('.navigation-categories').on( "click", function() {
			if($menu_categories.hasClass('active')){
				$menu_categories.removeClass('active');
			}	
			else{
				$menu_categories.addClass('active');
			}	
			return false;
		});		
		$('.flacio-close',$menu_categories).on( "click", function() {
			$menu_categories.removeClass('active');
			return false;
		});		
		//Navigation right			
	}
	 _headercategories();
	function _canvasrightNavigation(){
		//Navigation right
		var $wpbingo_menu_right = $('.wpbingo-menu-right');
		$('.navigation-right').on( "click", function() {
			if($wpbingo_menu_right.hasClass('active')){
				$wpbingo_menu_right.removeClass('active');
			}	
			else{
				$wpbingo_menu_right.addClass('active');
			}	
			return false;
		});		
		$('.flacio-close',$wpbingo_menu_right).on( "click", function() {
			$wpbingo_menu_right.removeClass('active');
			return false;
		});		
		//Navigation right			
	}
	 _canvasrightNavigation();
	function _setGetParameter(paramName, paramValue)
	{
		var url = window.location.href;
		var hash = location.hash;
		url = url.replace(hash, '');
		if (url.indexOf(paramName + "=") >= 0)
		{
			var prefix = url.substring(0, url.indexOf(paramName));
			var suffix = url.substring(url.indexOf(paramName));
			suffix = suffix.substring(suffix.indexOf("=") + 1);
			suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
			url = prefix + paramName + "=" + paramValue + suffix;
		}
		else
		{
		if (url.indexOf("?") < 0)
			url += "?" + paramName + "=" + paramValue;
		else
			url += "&" + paramName + "=" + paramValue;
		}
		window.location.href = url + hash;
	}
	function _sticky_menu(){
		if($(".header-wrapper").data("sticky_header")){
			var current_scroll = 0;
			var bwp_width = _window.width();
			_window.scroll(function() {
				var next_scroll = $(this).scrollTop();
				if ( next_scroll > 200) {
					$('.bwp-header').addClass('sticky');
				} else if ( next_scroll <=200 ) {
					$('.bwp-header').removeClass('sticky');
				}
				current_scroll = next_scroll;  
			});
		}
	}
	function _sticky_product(){
		var $parent = $(".single-product");
		if( $(".prev_next_buttons",$parent).length > 0 ){
			var bwp_width = _window.width();
			_window.scroll(function() {
				var scroll_top = _window.scrollTop();
				var offset_top = $(".woocommerce-tabs",$parent).offset().top;
				var distance   = (offset_top - scroll_top);
				if ( distance <= 0) {
					$('.prev_next_buttons',$parent).addClass('active');
				}else{
					$('.prev_next_buttons',$parent).removeClass('active');
				}
			});
		}
	}
	function _sticky_nextproduct(){
		var $parent = $(".single-product");
		if( $(".sticky-product",$parent).length > 0 ){
			var bwp_width = _window.width();
			_window.scroll(function() {
				var scroll_top = _window.scrollTop();
				var offset_top = $(".single_add_to_cart_button",$parent).offset().top;
				var distance   = (offset_top - scroll_top);
				if ( distance <= 0) {
					$('.sticky-product',$parent).addClass('sticky');
				}else{
					$('.sticky-product',$parent).removeClass('sticky');
				}
			});
		}
	}
	function _flacio_top_link(){
		var custom_menu = $('.block-top-link .widget-custom-menu');
		$('.widget-title',custom_menu).on( "click", function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('div',$(this).parent()).slideUp();	
			}
			else{
				$('.widget-title',custom_menu).removeClass('active');
				$('div',custom_menu).slideUp();				
				$(this).addClass('active');
				$('div',$(this).parent()).slideDown();	
			}	
		});
	}
	_flacio_top_link();
	function _load_slick_carousel($element){
		$element.slick({
			arrows: $element.data("nav") ? true : false ,
			dots: $element.data("dots") ? true : false ,
			draggable : $element.data("draggable") ? false : true ,
			infinite: $element.data("infinite") ? false : true ,
			autoplay: $element.data("autoplay") ? true : false ,
			prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
			slidesToScroll:$element.data("slidestoscroll") ? $element.data("columns") : 1,
			nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>',	
			slidesToShow: $element.data("columns"),
			asNavFor: $element.data("asnavfor") ? $element.data("asnavfor") : false ,
			vertical: $element.data("vertical") ? true : false ,
			verticalSwiping: $element.data("verticalswiping") ? $element.data("verticalswiping") : false ,
			rtl: (_body.hasClass("rtl") && !$element.data("vertical")) ? true : false ,
			centerMode: $element.data("centermode") ? $element.data("centermode") : false ,
			centerPadding: $element.data("centerpadding") ? $element.data("centerpadding") : false ,
			focusOnSelect: $element.data("focusonselect") ? $element.data("focusonselect") : false ,
			fade: ($element.data("fade") && !_body.hasClass("rtl")) ? true : false ,
			cssEase: 'linear',
			autoplaySpeed: 5000,
			pauseOnHover:false,
			pauseOnFocus: false,
			responsive: [
				{
				  breakpoint: 1441,
				  settings: {
					slidesToShow: $element.data("columns1440") ? $element.data("columns1440") : $element.data("columns"),
					slidesToScroll: $element.data("columns1440") ? $element.data("columns1440") : $element.data("columns"),
				  }
				},
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: $element.data("columns1"),
					slidesToScroll: $element.data("columns1"),
				  }
				},				
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: $element.data("columns2"),
					slidesToScroll: $element.data("columns2"),
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: $element.data("columns3"),
					slidesToScroll: $element.data("columns3"),
					vertical: false,
					verticalSwiping : false,
				  }
				},
				{
				  breakpoint: 480,			  
				  settings: {
					slidesToShow: $element.data("columns4"),
					slidesToScroll: $element.data("columns4"),
					vertical: false,
					verticalSwiping : false,
				  }
				}
			]	
		});
		var $single_product = $(".bwp-single-product");
		$element.on('afterChange', function(event, slick, currentSlide, nextSlide){
			_move_nav_slick($element);
			if($single_product.length > 0  && $single_product.hasClass("zoom") ){
				var _data = $single_product.data();
				if(_data.product_layout_thumb != "one_column" && _data.product_layout_thumb != "grid" ){
					$('.zoomContainer').remove();
					var $image_thumbnail = $(".img-thumbnail.slick-active",".main-single-product .image-additional");
					if (($(window).width()) >= 768 ){
						_load_zoom_single_inner($("img",$image_thumbnail),_data);
					}
				}
			}
		});
		_move_nav_slick($element);
		if($single_product.length > 0  && $single_product.hasClass("zoom") ){
			var _data = $single_product.data();
			var $image_thumbnail = $(".img-thumbnail.slick-current",".image-additional");
			if (($(window).width()) >= 768 ){
				_load_zoom_single_inner($("img",$image_thumbnail),_data);
			}
		}
	}
	function _move_nav_slick($element){
		if($(".slick-arrow",$element).length > 0){
			if( $(".fa-angle-left",$element).length > 0 ){
				var $prev = $(".fa-angle-left",$element).clone();
				$(".fa-angle-left",$element).remove();
				if($element.parent().find(".fa-angle-left").length == 0){
					$prev.prependTo($element.parent());
				}
				$prev.on( "click", function() {
					$element.slick('slickPrev');
				});				
			}
			if( $(".fa-angle-right",$element).length > 0 ){
				var $next =  $(".fa-angle-right",$element).clone();
				$(".fa-angle-right",$element).remove();
				if($element.parent().find(".fa-angle-right").length == 0){
					$next.appendTo($element.parent());
				}
				$next.on( "click", function() {
					$element.slick('slickNext');
				});
			}
		}	
	}
	//Dropdown Menu
	function _dropdown_menu(){
		$( ".pwb-dropdown" ).each(function(){
			var $dropdown = $(this);
			var active_text = $dropdown.find('li.active').text();
			if(active_text){
				$(".pwb-dropdown-toggle",$dropdown).html(active_text);
			}
			$("li",$dropdown).on( "click", function() {
				$("li",$dropdown).removeClass("active");
				$(this).addClass('active');
				var this_text = $(this).text();
				$(".pwb-dropdown-toggle",$dropdown).html(this_text);
				$dropdown.removeClass("open");
				if($dropdown.hasClass('select_category')){
					var this_value = $(this).data("value");
					$( ".product-cat",".select_category" ).val(this_value);
				}				
			});
		});		
	}
	_dropdown_menu();
	function _click_toggle_filter(){
		$(".button-filter-toggle").on( "click", function() {
			if($(this).hasClass('active')){
				$(".button-filter-toggle").removeClass('active');
				$(".filter_sideout").removeClass('active');
				$(".sidebar-product-filter").removeClass('active');
				$(".main-archive-product").removeClass('active');
				$(".sidebar-product-filter").slideUp();
			}else{
				$(".button-filter-toggle").addClass('active');
				$(".filter_sideout").addClass('active');
				$(".sidebar-product-filter").addClass('active');
				$(".main-archive-product").addClass('active');
				$(".sidebar-product-filter").slideDown();
			}
		});	
	}
	_click_toggle_filter();
	//Menu CanVas
	function _click_button_canvas_menu(){
		$('#show-megamenu').on( "click", function() {
			if($('.bwp-canvas-navigation').hasClass('active'))
				$('.bwp-canvas-navigation').removeClass('active');
			else
				$('.bwp-canvas-navigation').addClass('active');
			return false;
		});

		$('#show-verticalmenu').on( "click", function() {
			if( $(".bwp-canvas-vertical").hasClass('active')){
				$(".bwp-canvas-vertical").removeClass('active');
			}	
			else{
				$(".bwp-canvas-vertical").addClass('active');
			}	
			return false;
		});		
	}
	_click_button_canvas_menu();
	function _load_canvas_menu(){
		var wd_width = _window.width(); 
		var $main_menu = $(".menu","#main-navigation");
		if(wd_width <= 991){
			if($("#canvas-main-menu").length < 1 && $main_menu.length > 0){
				var $menu = $main_menu.parent().clone();
				$menu.attr( "id", "canvas-main-menu");
				$($menu).find(".menu").removeAttr('id');
				$('#page').append('<div  class="bwp-canvas-navigation"><span id="remove-megamenu" class="remove-megamenu icon-remove">'+$('.bwp-navigation').data('text_close')+'</span></div>');		
				$('.bwp-canvas-navigation').append($menu);
				$menu.mmenu({
					offCanvas: false,
					"navbar": {
					"title": false
					}
				});
				_remove_canvas_menu();
			}
			//Vertical Menu
			if($("#canvas-vertical-menu").length < 1){
				var $vertical = $(".bwp-vertical-navigation >div").clone();
				$vertical.attr( "id", "canvas-vertical-menu");
				$($vertical).find(".menu").removeAttr('id');
				$('#page').append('<div  class="bwp-canvas-vertical"><span id="remove-verticalmenu" class="remove-verticalmenu icon-remove">'+$('.bwp-navigation').data('text_close')+'</span></div>');			
				$('.bwp-canvas-vertical').append($vertical);
				$vertical.mmenu({
					offCanvas: false,
					"navbar": {
					"title": false
					}
				});
				_remove_canvas_menu();
			}			
		}else{
			$(".bwp-canvas-navigation").remove();
			$(".bwp-canvas-vertical").remove();
		}		
	}
	_load_canvas_menu();
	function _remove_canvas_menu(){
		$('#remove-megamenu').on( "click", function() {
			$('.bwp-canvas-navigation').removeClass('active');
			return false;
		});
		$('#remove-verticalmenu').on( "click", function() {
			$(".bwp-canvas-vertical").removeClass('active');
			return false;
		});
	}
	function _event_single_image(){
		if($(".bwp-single-product").length){
			var $element = $(".bwp-single-product");
			var _data = $element.data();
			if($element.hasClass("zoom")){
				$('.variations_form').on('wc_variation_form show_variation reset_image', function() {
					$('.zoomContainer .zoomWindowContainer .zoomWindow').first().css('background-image', 'url(' + $('#image').attr('src') + ')');
					$('.zoomContainer .zoomLens').first().css('background-image', 'url(' + $('#image').attr('src') + ')');
				});
				if(_data.product_layout_thumb == "one_column" || _data.product_layout_thumb == "grid"){
					_load_zoom_single_image(_data);
				}
			}
			if(_data.product_layout_thumb != "one_column" && _data.product_layout_thumb != "grid" ){
				$('.variations_form').on('wc_variation_form show_variation reset_image', function() {
					$('.image-additional').slick('slickGoTo',0);
				});
			}
			if(_data.product_layout_thumb == "one_column" || _data.product_layout_thumb == "grid"){
				$('.variations_form').on('wc_variation_form show_variation reset_image', function() {
					$(window).scrollTop( 300 );
				});
			}	
		}
	}
	function _load_zoom_single_image(_data){
		var $element = $(".image-additional");
		if (($(window).width()) >= 768){
			$(".img-thumbnail",$element).each(function(){
				var $parent_img = $("a",$(this));
				_load_zoom_single_inner($("img",$parent_img),_data);
			});
		}
	}
	function _load_zoom_single_inner($element,_data){
		if( $(".image-thumbnail").length > 0 ){
			var $gallery = "image-thumbnail";
		}else{
			var $gallery = false;
		}		
		$element.elevateZoom({
				zoomType : _data.zoomtype,
				scrollZoom  : _data.zoom_scroll,
				lensSize    : _data.lenssize,
				lensShape    : _data.lensshape,
				containLensZoom  : _data.zoom_contain_lens,
				gallery: $gallery,
				cursor: 'crosshair',
				galleryActiveClass: "active",
				lensBorder: _data.lensborder,
				borderSize : _data.bordersize,
				borderColour : _data.bordercolour,
		});	
	}	
	function _load_wpbingo_menu_sidebar(){
		var $menu = $(".wpbingo-menu-sidebar");
		appendGrower($menu);		
	}
	function appendGrower($menu)
	{
		if($("li.menu-item-has-children",$menu).find('.grower').length <= 0){
			$("li.menu-item-has-children",$menu).append('<span class="grower close"> </span>');
			clickGrower($menu);
		}	
	}
	function removeGrower($menu)
	{
		$(".grower",$menu).remove();
	}
	function offtogglemegamenu($menu)
	{
		$('li.menu-item-has-children .sub-menu',$menu).css('display','');	
		$menu.removeClass('active');
		$("li.menu-item-has-children  .grower",$menu).removeClass('open').addClass('close');	
	}	
	function clickGrower($menu){
		$("li.menu-item-has-children  .grower",$menu).on( "click", function() {
			if($(this).hasClass('close')){
				$(this).addClass('open').removeClass('close');
				$('.sub-menu',$(this).parent()).first().slideDown();	
			}else{
				$(this).addClass('close').removeClass('open');		
				$('.sub-menu',$(this).parent()).first().slideUp();
			}
		});			
	}
	function _moreverticalMenu(){
		var $element = $(".categories-vertical-menu");
		var max_number_1530 = $element.data("max_number_1530") ? $element.data("max_number_1530") : "15";	
		var max_number_1200 = $element.data("max_number_1200") ? $element.data("max_number_1200") : "8";
		var max_number_991 = $element.data("max_number_991") ? $element.data("max_number_991") : "6";
		if($(window).width() >= 1530){
			_appendMoreCategories($element,max_number_1530);
		}else if($(window).width() >= 1200){
			_appendMoreCategories($element,max_number_1200);
		}else if($(window).width() >= 992){
			_appendMoreCategories($element,max_number_991);
		}
	}
	function _appendMoreCategories($element,limit){
		var textmore = $element.data("textmore") ? $element.data("textmore") : "Load More";
		var closemore = $element.data("textclose") ? $element.data("textclose") : "Close";
		
		if($( "ul.menu >li",$element).length > limit && $element.find(".more-wrap").length <= 0){		
			$("ul.menu",$element).append('<div class="more-wrap"><span class="more-view">'+textmore+'</span></div>');
		}
		
		$(".more-wrap",$element).unbind( "click" );
		$(".more-wrap",$element).on( "click", function(){
			var this_more = $(this);
			if($(this).hasClass('open')){
				$("ul.menu >li",$element).each(function(i){
					if(i>limit-1){
						$(this).slideUp();
					}
				});
				$(this).removeClass('open');
				$(this_more).html('<span class="more-view">'+textmore+'</span>');
			}else{
				$('ul.menu >li',$element).each(function(i){
					if(i>limit-1){
						$(this).slideDown();
					}
				});
				$(this).addClass('open');
				$(this_more).html('<span class="more-view">'+closemore+'</span>');
			}
		});
		
		$("ul.menu >li",$element).css('display', 'block');
		$("ul.menu >li",$element).each(function(i){
			if(i> (limit -1)){ 
				$(this).css('display', 'none');
			}		
		});
	}
	/*Search JS*/
	function _event_ajax_search(){
		var $element = $(".ajax-search");
		$(".input-search",$element).on("keydown", function() {
			setTimeout(function($e){	
			var character = $e.val();
			var limit = $element.data("limit") ? $element.data("limit") : 5;
			var $category_search = $(".category-search",$element);
			var category = $("li.active",$category_search).data("value");
			if(character.length >= 2){
				$( ".result-search-products",$element ).empty();
				$( ".result-search-products",$element ).addClass("loading");
				$( ".result-search-products",$element ).show();
				$( ".result-search-products-content",$element ).show();
				$.ajax({
					url: $element.data("admin"),
					dataType: 'json',
					data: {
						action : "flacio_search_products_ajax",
						character : character,
						limit : limit,
						category : category
					},
					success: function(json) {
						var html = '';
						if (json.length) {
							for (var i = 0; i < json.length; i++) {
								if (!json[i]['category']) {
									html += '<li class="item-search">';
									html += '	<a class="item-image" href="' + json[i]['link'] + '"><img class="pull-left" src="' + json[i]['image'] + '"></a>';
									character = (character).toLowerCase(character);
									character = (character).replace("%20"," ");
									json[i]['name'] = (json[i]['name']).toLowerCase(json[i]['name']);
									json[i]['name'] = (json[i]['name']).replace(character, '<b>'+character+'</b>');
									html += '<div class="item-content">';
									html += '<a href="' + json[i]['link'] + '" title="' + json[i]['name'] + '"><span>'	+ json[i]['name'] + '</span></a>';
									if(json[i]['price']){
										html += '<div class="price">'+json[i]['price']+'</div>';
									}
									html += '</div></li>';
								}
							}
						}else{	
							html = '<li class="no-result-item">'+$element.data("noresult")+'</li>';
						}
						$( ".result-search-products",$element ).removeClass("loading");
						$( ".result-search-products",$element ).html(html);
					}
				});
			}else{
				$( ".result-search-products",$element ).removeClass("loading");
				$( ".result-search-products",$element ).empty();
				$( ".result-search-products",$element ).hide();
				$( ".result-search-products-content",$element ).hide();
			}				
		  }, 200, $(this));
		});	
	}
	function _event_circlestime(){
		$( ".time-circles" ).each(function(){
			var $circles = $(this);
			$circles.TimeCircles({
					circle_bg_color: $circles.data("bg_color"),
					fg_width: $circles.data("fg_width"),
					bg_width: $circles.data("bg_width"),
					time: {
						Days: { 
							color: $circles.data("time_color"),
							text : $circles.data("text_day")
						},
						Hours: { 
							color: $circles.data("time_color"),
							text : $circles.data("text_hour")	
						},
						Minutes: { 
							color: $circles.data("time_color"),
							text : $circles.data("text_min")
						},
						Seconds: { 
							color: $circles.data("time_color"),
							text : $circles.data("text_sec")
						}
					}
			});
		});
	}
	function _left_right_submenu(){
		$( ".menu-item-has-children.level-1" ).each(function() {
			var _item_menu = $(this);
			var spacing_item_menu = _item_menu.outerWidth();
			var spacing_item_menu_left = _item_menu.offset().left;
			var spacing_item_menu_right = _window.width() - (spacing_item_menu+spacing_item_menu_left);
			if(spacing_item_menu_right <= 225){
				_item_menu.addClass("sub-menu-left");
			}else{
				_item_menu.removeClass("sub-menu-left");
			}	
		});
	}
	function _event_accordion_slider(){
		$( ".bwp-slider .accordion" ).each(function(){
			var $accordion = $(this);
			$("li",$accordion).first().addClass("active");
			$("li",$accordion).hover(function() {
				$("li",$accordion).removeClass('active');
				$(this).addClass("active");
			});		
		});
	}
	function _remove_animation_tab_visua(){
		if(jQuery.fn.vcAccordion){
			var _isAnimated = jQuery.fn.vcAccordion.Constructor.prototype.isAnimated;
			jQuery.fn.vcAccordion.Constructor.prototype.isAnimated = function() {
				return 0;
			}
		}
	}
	function _event_video_product(){
		if($(".video-additional").length > 0){
			if($(".img-thumbnail",$element).length <= 0){
				$(".video-additional").addClass("active");
			}
			var $element = $("#image-thumbnail");
			$(".img-thumbnail-video",$element).on( "click", function(){
				$(".image-additional").removeClass("active");
				$(".img-thumbnail").removeClass("active");
				if(!$(".video-additional").hasClass("active")){
					$(".video-additional").addClass("active");
				}
				if(!$(this).hasClass("active")){
					$(this).addClass('active');
				}
			});
			$(".img-thumbnail",$element).on( "click", function(){
				$(".video-additional").removeClass("active");
				$(".img-thumbnail-video").removeClass("active");
				if(!$(".image-additional").hasClass("active")){
					$(".image-additional").addClass("active");
				}
			});	
		}
	}
	function _load_video_popup(){
		var $url_video = "";
		$url_video = $('.bwp-video').data( "src" );
		$(".remove-show-modal").on( "click", function() {
			if($('.content-video.modal').hasClass('show')){
				$('.content-video.modal').removeClass('show');
				$('.content-video.modal').css('display','none');
			}
			$("#video").attr('src',$url_video);
		});
		$(".bwp-video.modal").on( "click", function() {
			if(!$('.content-video.modal').hasClass('show')){
				$('.content-video.modal').addClass('show');
				$('.content-video.modal').css('display','block');
			}
		});
		$('.video-additional iframe').css("width",$(".image-additional #image").width());
		$('.video-additional iframe').css("height",$(".image-additional #image").height());
	}
	function _load_count_up(){
		var a = 0;
		if($('.bwp-cta').length > 0 ){
			_window.scroll(function() {
				var oTop = $('.bwp-cta').offset().top - window.innerHeight;
				if(a == 0 && _window.scrollTop() > oTop){
					$('.count-cta').each(function () {
						$(this).prop('Counter',0).animate({
							Counter: $(this).text()
						}, {
							duration: 2000,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now));
							}
						});
					});
					a = 1;
				}
			});
		}
	}	
	function _load_360_view_product(){
		$('.product-360-view').TreeSixtyImageRotate({
			totalFrames: $('.product-360-view').data("count"),
			endFrame: $('.product-360-view').data("count"),
			imagePlaceholderClass: "images-placeholder"
		}).initTreeSixty();
		$(".flacio-360-button").on( "click", function() {
			if($('.content-product-360-view').hasClass('active')){
				$('.content-product-360-view').removeClass('active');	
			}else{
				$('.content-product-360-view').addClass('active');
			}
		});
	}
	function _click_button(){
		$(".active-menu").on( "click", function() {
			if($(this).hasClass('active')){
				$(this).removeClass('active');	
			}else{
				$(this).addClass('active');		
			}
			if($('.header-main').hasClass('active')){
				$('.header-main').removeClass('active');	
			}else{
				$('.header-main').addClass('active');		
			}
		});
		$(".title-size-guide").on( "click", function() {
			if($('.size-guide').hasClass('active')){
				$('.size-guide').removeClass('active');	
			}else{
				$('.size-guide').addClass('active');		
			}
		});
		$(".showlogin").on( "click", function() {
			if($('.woocommerce-form-login').hasClass('active')){
				$('.woocommerce-form-login').removeClass('active');
				$('.woocommerce-form-login').slideUp();
			}else{
				$('.woocommerce-form-login').addClass('active');
				$('.woocommerce-form-login').slideDown();		
			}
		});
		$(".button-next-reregister").on( "click", function() {
			if($('.form-login').hasClass('active')){
				$('.form-login').removeClass('active');
				$('.form-register').addClass('active');
			}
		});
		$(".button-next-login").on( "click", function() {
			if($('.form-register').hasClass('active')){
				$('.form-register').removeClass('active');
				$('.form-login').addClass('active');
			}
		});
	}
	function _after_add_to_cart(){
		$( _body ).on( 'added_to_cart', function(){
			_click_add_to_cart();
			$('body').append('<div class="flacio-product-added"><div class="added-message">'+$(".mini-cart").data("text_added")+'</div>');
			setTimeout(function(){
				$('.flacio-product-added').remove();
			},3000);
		});
	}
	function _click_add_to_cart(){
		$(".cart-remove").on( "click", function() {
			if( $(".flacio-topcart.popup").hasClass("active") ){
				$(".flacio-topcart.popup").removeClass("active");
			}
			if( _body.hasClass("not-scroll") ){
				_body.removeClass("not-scroll");
			}
		});
		$(".cart-icon").on( "click", function() {
			if( !_body.hasClass("not-scroll") && $(".flacio-topcart").hasClass("popup") ){
				_body.addClass("not-scroll");
			}
		});
		$(".remove-cart-shadow").on( "click", function() {
			if( $(".flacio-topcart.popup").hasClass("active") ){
				$(".flacio-topcart.popup").removeClass("active");
			}
			if( _body.hasClass("not-scroll") ){
				_body.removeClass("not-scroll");
			}
		});
	}
	function _click_atribute_image(){
		$(".image-attribute",".product-attribute").on( "click", function() {
			if(!$(this).hasClass("active")){
				$(".image-attribute",".product-attribute").removeClass("active");
				$(this).addClass("active");
				var $parent = $(this).closest(".products-entry");
				var $thumb = $(".product-thumb-hover", $parent);
				var $image = $(this).data("image");
				$("img",$thumb).last().attr("src", $image);
			}
		});
	}
	function _click_login_ajax(){
		$('form#login_ajax').on('submit', function(e){
			e.preventDefault();
			$('form#login_ajax .button-login').addClass("active");
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: flacio_ajax.ajaxurl,
				data: { 
					'action': 'flacio_login_ajax',
					'username': $('form#login_ajax #username').val(), 
					'password': $('form#login_ajax #password').val(),
					'rememberme': $('form#login_ajax #rememberme').val(),
					'security': $('form#login_ajax #security').val()
				},
				success: function(data){
					$('form#login_ajax .button-login').removeClass("active");
					if (data.loggedin == true){
						$('form#login_ajax p.status').html('<div class="woocommerce-message" role="alert">'+data.message+'</div>');
						document.location.href = flacio_ajax.redirecturl;
					}else{
						$('form#login_ajax p.status').addClass("error");
						$('form#login_ajax p.status').html('<ul class="woocommerce-error" role="alert"><li>'+data.message+'</li></ul>');
					}
				}
			});
		});
	}
	function _active_form_login(){
		$(".active-login").on( "click", function(e) {
			e.preventDefault();
			if($('.form-login-register').hasClass('active')){
				$('.form-login-register').removeClass('active');
			}else{
				$('.form-login-register').addClass('active');		
			}
		});
		$(".remove-form-login-register").on( "click", function() {
			if($('.form-login-register').hasClass('active')){
				$('.form-login-register').removeClass('active');
			}
		});
	}
	function _load_event_countdown(){
		$('.product-countdown').each(function(event){
			var $this = $(this);
			_event_countdown( $(this) );
		});	
	}
	function _click_quickview_button(){
		$('.quickview-button').on( "click", function(e) {
			e.preventDefault();
			var product_id  = $(this).data('product_id');
			$(".quickview-"+product_id).addClass("loading");
			$.ajax({
				url: flacio_ajax.ajaxurl,
				data: {
					"action" : "flacio_quickviewproduct",
					'product_id' : product_id
				},
				success: function(results) {
					$('.bwp-quick-view').empty().html(results).addClass("active");
					$(".quickview-"+product_id).removeClass("loading");
					$("#quickview-slick-carousel .slick-carousel").each(function(){
						_load_slick_carousel($(this));
					});
					if( typeof jQuery.fn.tawcvs_variation_swatches_form != 'undefined' ) {
						$( '.variations_form' ).wc_variation_form();
						$( '.variations_form' ).tawcvs_variation_swatches_form();
					}else{
						var form_variation = $(".bwp-quick-view").find('.variations_form');
						var form_variation_select = $(".bwp-quick-view").find('.variations_form .variations select');
						form_variation.wc_variation_form();
						form_variation_select.change();
					}
					if( $(".product-countdown",".bwp-quick-view").length >0 )
					_event_countdown( $(".product-countdown",".bwp-quick-view") );
					_event_quick_buy();
					_close_quickview();
				},
				error: function(errorThrown) { console.log(errorThrown); },
			});
		});
	}
	function _close_quickview(){
		$('.quickview-close').on( "click", function(e) {
			e.preventDefault();
			$('.bwp-quick-view').empty().removeClass("active");
		});		
	}
	function _event_countdown($element){
		var $this = $element;
		var $id = $(this).data("id");		
		var $current_time 	= new Date().getTime();
		var $sttime 	= $(this).data('sttime');
		var $countdown_time = $this.data('cdtime');
		var $day = $this.data('day') ? $this.data('day') : "D";
		var $hour = $this.data('hour') ? $this.data('hour') : "H";
		var $min = $this.data('min') ? $this.data('min') : "M";
		var $sec = $this.data('sec') ? $this.data('sec') : "S";			
		var $austDay 	= new Date();
		$austDay 		= new Date( $countdown_time * 1000 );	
		if( $sttime > $current_time  ){
			$this.remove();
			return ;
		}
		if( $countdown_time.length > 0 && $current_time > $countdown_time ){
			$this.remove();
			return ;
		}
		if( $countdown_time.length <= 0 ){
			$this.remove();
			return ;
		}
		$this.countdown($austDay, function(event) {
			$(this).html(
				event.strftime('<span class="countdown-content"><span class="days"><span class="countdown-amount">%D</span><span class="countdown-text">'+$day+'</span></span><span class="countdown-section hours"><span class="countdown-amount">%H</span><span class="countdown-text">'+$hour+'</span></span><span class="countdown-section mins"><span class="countdown-amount">%M</span><span class="countdown-text">'+$min+'</span></span><span class="countdown-section secs"><span class="countdown-amount">%S</span><span class="countdown-text">'+$sec+'</span></span></span>')
			);
		}).on('finish.countdown', function(event){
			$this.remove();
			$id = $this.data( 'id' );
			$target = this;
			$this.hide('slow', function(){ $(this).remove(); });	
			$price = $this.data( 'price' );
			$('#' + $id + ' .item-price > span').hide('slow', function(){ $('#' + $id + ' .item-price > span').remove(); });					
			$('#' + $id + ' .item-price' ).append( '<span><span class="amount">' + $price + '</span></span>' );
		});	
	}
	function _drag_slider($element){
		var $wrap  = $element.parent();
		if(_window.width() >= 1200){
			var $width = Math.ceil($element.width()/($element.data("columns")));
		}else if( _window.width() < 1200 && _window.width() >= 998 ){
			var $width = Math.ceil($element.width()/($element.data("columns1")));
		}else if( _window.width() < 998 && _window.width() >= 768 ){
			var $width = Math.ceil($element.width()/($element.data("columns2")));
		}else{
			var $width = Math.ceil($element.width()/($element.data("columns3")));
		}
		$element.find('.item-product').css("width",$width);
		var options = {
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			prevPage: $wrap.find('.prev'),
			nextPage: $wrap.find('.next'),
			disabledClass: 'disabled'
		};
		$element.sly(options);
	}
	function _update_total_wishlist(){	
		$(document).on( 'woosw_change_count', function(event, count){
			var counter = $('.count-wishlist');
			counter.html( count );
		})
	}
	function _event_quick_buy(){
		var $form_cart = $('form.cart');
        if ($('.quick-buy',$form_cart).length <=0){
            return;
        }
        var $variations = $('.variations_form');
        $variations.on('show_variation', function (event,variation,allow){
            event.preventDefault();
            if (allow){
                $variations.find('.quick-buy').removeClass('disabled');
            }else{
                $variations.find('.quick-buy').addClass('disabled');
            }
        });		
        $variations.on('hide_variation', function (event){
            event.preventDefault();
            $variations.find('.quick-buy').addClass('disabled');
        });
		$('.quick-buy',$form_cart).on( "click", function(event){
			event.preventDefault();
            var $disabled = $(this).is(':disabled');
            if (!$disabled){
				$form_cart.append('<input type="hidden" name="quick_buy" value="1" />');
                $(this).parent().find('.single_add_to_cart_button').trigger('click');
            }
		});
	}
	class Elementor_Js_Flacio {
		static getInstance() {
			if (!Elementor_Js_Flacio.instance) {
				Elementor_Js_Flacio.instance = new Elementor_Js_Flacio();
			}
			return Elementor_Js_Flacio.instance;
		}
		constructor() {
			$(window).on('elementor/frontend/init', () => {
				this.init();
			});
		}
		init() {
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_product_categories.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);	
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_product_list.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
				let scrollElement     = $scope.find('.scroll-list');
				_drag_slider($(".list-product",scrollElement));
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_filter_homepage.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
				let scrollElement     = $scope.find('.scroll-list');
				_drag_slider($(".list-product",scrollElement));
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_testimonial.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_brand.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_recent_post.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_countdown_product.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_ourteam.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_slider.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_lookbook.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_instagram.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_slider_homepage.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				_load_slick_carousel(slickElement);
			});
			elementorFrontend.hooks.addAction('frontend/element_ready/bwp_image.default', ($scope) => {
				let slickElement     = $scope.find('.slick-carousel');
				slickElement.each(function(){
					_load_slick_carousel($(this));
				});
			});
		}
	}
	Elementor_Js_Flacio.getInstance();	
 

} )( jQuery );