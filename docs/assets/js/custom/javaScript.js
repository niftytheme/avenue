/*
	Template Name: Avenue - HTML5 Landing Page Template
	Author: Nifty Theme - Osama Bakri
	Themeforest Account: https://themeforest.net/user/niftytheme
	Contact: niftytheme@gmail.com
	Version: 1.0.0
  Page Name : Custom JavaScript File
	Created: September 2019
	License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
*/

/*global window, jQuery */
(function ($) {

  'use strict';
  // ----------------------------------

  // -- :: Loading Page
  $(window).on('load', function () {
    $('#loading').fadeOut(1000);
    $('html').css('overflow-y', 'visible');
  });
  // ----------------------------------

  // -- :: Navbar
  // Open Search Bar
  $('nav .navbar-link .search-btn').on('click', function () {
    // toggleClass 'clicked'
    $(this).toggleClass('clicked');
    // fadeIn '#search-bar'
    $('#search-bar').fadeIn();
    // addClass 'show'
    $('#search-bar').addClass('show');
  });

  // Close Search Bar
  $('#close-search-bar').on('click', function () {
    // removeClass 'clicked'
    $('nav .navbar-link .search-btn').removeClass('clicked');
    // fadeToggle '#search-bar'
    $('#search-bar').fadeOut();
    // removeClass 'show'
    $('#search-bar').removeClass('show');
  });

  // Open Navbar in Small Screen
  $('#navToggler').on('click', function () {
    // toggleClass 'on'
    $(this).toggleClass('on');
    // toggleClass 'open'
    $('nav .nav-links').toggleClass('open')
    // toggle body overlay
    $('nav .overlay').fadeToggle();
  });

  // Show dropdown menu in small screen
  $('nav .navbar-link > a').on('click', function () {
    if ($(window).width() < 991) {
      // remove class 'clicked' from other '.navbar-link'
      $(this).parent('.navbar-link').siblings().removeClass('clicked');
      // slideUp other 'ol.navbar-dropdown-menu'
      $(this).parent('.navbar-link').siblings().find('ol.navbar-dropdown-menu').slideUp();
    }
  });

  $('.navbar-link.navbar-dropdown-link > span').on('click', function () {
    // toggleClass 'clicked' in '.navbar-dropdown-link' and remove class 'clicked' from other elements
    $(this).parent('.navbar-dropdown-link').toggleClass('clicked').siblings().removeClass('clicked');
    // slideUp 'ol.navbar-dropdown-menu'
    $(this).parent('.navbar-dropdown-link').find('ol.navbar-dropdown-menu').slideToggle();
    // slideUp '.dropdown-level-two'
    $('.dropdown-level-two').slideUp('normal');
  });

  $('.navbar-dropdown-menu > .dropdown-link > a').on('click', function () {
    // toggleClass 'clicked' in '.dropdown-link' and remove class 'clicked' from other elements
    $(this).parent('.dropdown-link').toggleClass('clicked').siblings().removeClass('clicked');
    // slideToggle '.dropdown-level-two' and slideUp other '.dropdown-level-two'
    $(this).parent('.dropdown-link').find('.dropdown-level-two').slideToggle().parent('.dropdown-link').siblings().find('.dropdown-level-two').slideUp();
  });

  // Reset all classes when resizing
  $(window).on('resize', function () {
    // removeClass 'on'
    $('#navToggler').removeClass('on');
    // removeClass 'clicked'
    $('.dropdown-link, .navbar-link').removeClass('clicked');
    // removeClass 'open'
    $('nav .nav-links').removeClass('open')
    // slideToggle dropdown menu
    $('ol.navbar-dropdown-menu, .dropdown-level-two').slideUp();
    // fadeOut body overlay
    $('nav .overlay').fadeOut();
  });
  // ----------------------------------

  // -- :: Index Page
  // Fav Button
  $('section.section-3 .item-head .fav-btn, section.events .item-head .fav-btn').on('click', function () {
    // toggleClass 'clicked'
    $(this).toggleClass('clicked');
  });

  // Testimonials carousel 
  $(document).ready(function(){
    $(".testimonials-carousel").owlCarousel({
      nav: true,
      margin: 30,
      autoplay: false,
      loop: true,
      responsive : {
        // breakpoint from 0 up
        0 : {
          items: 1,
          autoplay: false
        },
        // breakpoint from 768 up
        768 : {
          items: 2,
          autoplay: false
        },
        // breakpoint from 992 up
        992 : {
          items: 3
        }
      }
    });
  });

  // Owl Carousel
  $(document).ready(function(){
    $(".courses-carousel").owlCarousel({
      nav: true,
      margin: 30,
      autoplay: false,
      autoplayHoverPause: true,
      loop: true,
      responsive : {
        // breakpoint from 0 up
        0 : {
          items: 1
        },
        // breakpoint from 768 up
        768 : {
          items: 2
        },
        // breakpoint from 992 up
        992 : {
          items: 3
        }
      }
    });
  });

  // Select list
  $(document).ready(function() {
    $('.avenue-select').select2();
  });

  // Team items
  $('section.team .item .info button').on('click', function () {
    // toggleClass 'clicked'
    $(this).toggleClass('clicked');
    // slideToggle '.details'
    $(this).parent('.info').find('.details').slideToggle();
  });
  // ----------------------------------

  // -- :: Login Page
  $('#login-page section .control-btns ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $($(this).data('show')).addClass('active').siblings().removeClass('active');
    $('#login-page section form input:not([type="submit"])').val('');
  });
  // ----------------------------------

}(jQuery));
