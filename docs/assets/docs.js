/* jshint jquery: true */
/* global FingerBlast: true */

$(function () {
  'use strict';

  var doc;
  var device;
  var windowWidth;
  var windowHeight;
  var pageHeight;
  var contentPadding;
  var footerHeight;
  var navComponentLinks;
  var componentsList;
  var componentLinks;
  var contentSection;
  var currentActive;
  var topCache;
  var win;
  var bod;
  var eventListeners;
  var toolbarToggle;
  var $iwindow;
  var loaded = false;


  var initialize = function () {
    currentActive          = 0;
    win                    = $(window);
    doc                    = $(document);
    bod                    = $(document.body);
    device                 = $('.js-device');
    navComponentLinks      = $('.js-jump-menu');
    componentsList         = $('.js-component-group');
    componentLinks         = $('.component-example a');
    contentSection         = $('.component');
    topCache               = contentSection.map(function () { return $(this).offset().top; });
    windowHeight           = $(window).height() / 3;
    windowWidth            = $(window).width();
    pageHeight             = $(document).height();
    contentPadding         = parseInt($('.docs-content').css('padding-bottom'), 10);
    footerHeight           = $('.docs-footer').outerHeight(false);
    toolbarToggle          = $('.js-docs-component-toolbar');
    $iwindow               = $("#iwindow");

    // console.log( "initialize." )
    if( !loaded ){
      loaded = true;
      $(contentSection[0]).addClass('active').find('.component-example').children().appendTo( $iwindow );
    }
    
    // Device placement
    if (windowWidth >= 768 && device.offset()) {   
      device.initialLeft   = device.offset().left;
      device.initialTop    = device.initialTop || device.offset().top;
      device.dockingOffset = -60;
    }else{
      $iwindow.children().appendTo( $('.component.active').find('.component-example') ); 
    }

    // checkDesktopContent();
    calculateScroll();
    calculateToggle();

    if (!eventListeners) {
      addEventListeners();
    }
  };

  var addEventListeners = function () {
    eventListeners = true;

    // device.on('click', function (e) {
    //   e.preventDefault();
    // });

    // Mobile navigation
    $('.js-docs-nav-trigger').on('click', function () {
      var nav     = $('.docs-nav-group');
      var trigger = $('.js-docs-nav-trigger');

      trigger.toggleClass('active');
      nav.toggleClass('active');
    });

    navComponentLinks.click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      componentsList.toggleClass('active');
    });

    doc.on('click', function () {
      componentsList.removeClass('active');
    });

    // Platform switcher
    $('.platform-switch').on('click', function () {
      var components = $('.docs-components');
      var platform   = $(this).attr('data-platform');

      // Set platform
      if (components.hasClass('platform-ios')) {
        components.removeClass('platform-ios');
        components.addClass(platform);
      } else if (components.hasClass('platform-android')) {
        components.removeClass('platform-android');
        components.addClass(platform);
      } else {
        components.addClass(platform);
      }

      // Deal with active states
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
    });

    win
      .off('scroll')
      .on('scroll', calculateScroll)
      .on('scroll', calculateToggle);
  };

  // var checkDesktopContent = function () {
    
  //   if ($(window).width() <= 768) {
  //     var content = $('.content');
  //     if (content.length > 1) {
  //       $(content[0]).remove();
  //     }
  //   }
  // };

  var calculateScroll = function () {
    // if small screen don't worry about this
    if (windowWidth <= 768) {
      return;
    }

    // Save scrollTop value
    var contentSectionItem;
    var currentTop = win.scrollTop();
    var oldActived;

    // exit if no device
    if (!device.length) {
      return;
    }

    if ((device.initialTop - currentTop) <= device.dockingOffset) {
      device.addClass('device-fixed');
      device.css({ top: device.dockingOffset });
    } else {
      device.removeClass('device-fixed');
      device[0].setAttribute('style', '');
    }

    // Injection of components into device
    for (var l = contentSection.length; l--;) {
      if ((topCache[l] - currentTop) < windowHeight) {
        if (currentActive === l) {
          return;
        }
        currentActive = l;
        oldActived = bod.find('.component.active').removeClass('active');
        contentSectionItem = $(contentSection[l]);
        contentSectionItem.addClass('active');

        //用来控制组件的样式
        if (contentSectionItem.attr('id')) {
          device.attr('id', contentSectionItem.attr('id') + 'InDevice');
        } else {
          device.attr('id', '');
        }
        
        $iwindow.children().appendTo( oldActived.find('.component-example') );
        contentSectionItem.find('.component-example').children().appendTo( $iwindow );

        break;
      }
    }

  };

  // Toolbar toggle
  var calculateToggle = function () {
    var currentTop   = win.scrollTop();
    var headerHeight = $('.docs-sub-header').outerHeight();

    if (windowWidth >= 768 && currentTop >= headerHeight) {
      toolbarToggle.addClass('visible');
    } else if (currentTop <= headerHeight) {
      toolbarToggle.removeClass('visible');
      componentsList.removeClass('active');
    }
  };

  $(window).on('load resize', initialize);
  // $(window).on('load', function () {
  //   if (window.FingerBlast) {
  //     new FingerBlast('.device-content');
  //   }
  // });
});
