/*!
 * Custom-MegaMenu v1.0.0
 *
 * Copyright (c)
 *  Ahmad Hussnain

 * MIT License
 */

/*
 * A mega-menu which shows dropdowns when hovering over.
 */

;(function ($, window, document, undefined) {
    'use strict';
    // Create the defaults once
    let pluginName = 'MegaMenuDropDowns';
    let defaults = {};
    // Get all icon buttons
    let $allIconButtons = $('.v-list > li > button');
    // Get all dropdowns that are the next elements of the icon buttons
    let $allRightDropDowns = $allIconButtons.next();
    // These variables are used in windowResizeBreakpoint() function and
    // that function will invoke flushMegaMenusFromPortraitMode()
    let bigScreenFlag = Number.MAX_VALUE;
    let smallScreenFlag = 1;
    /**
     * return the window's width
     * @return {Number|number}
     */
    const windowWidth =  function ()  {
        return window.innerWidth || document.documentElement.clientWidth
            || document.body.clientWidth;
    };
    /**
     * Attach Click Event to View More `<a>'s`.
     */
    const attachClickOnViewMore = function () {
        $('.v-more').on('click', function () {
            // Check if anchor has class, Remove class and change Text to view more
            // else add class, and change Text to view less
            if ($(this).hasClass('v-less')) {
                // Remove class so icon is change
                $(this).removeClass('v-less');
                // v-none
                $('.v-none').stop(true, true).slideToggle();
                // change text
                $(this).find('span').html('View More');
            } else {
                // add class so icon is change
                $(this).addClass('v-less');
                // v-none
                $('.v-none').stop(true, true).slideToggle();
                // change text
                $(this).find('span').html('View Less');
            }

        });
    };
    /**
     *  Flush mega menus from portrait mode.
     */
    const flushMegaMenusFromPortraitMode =  function () {
        // Set all opened mega menus to `display:none.`
        $allRightDropDowns.css('display', '');
        // Remove `js-icon-changed` class from buttons.
        $allIconButtons.removeClass('js-icon-changed');
    };
    /**
     * Mega Menu behavior on portrait mode
     */
    const portraitMegaMenuFunctionality = function () {
        $allIconButtons.on('click',function () {
            // Set all `js-icon-changed` menus to `display:none`
            // except current click
            $allRightDropDowns.not($(this).next()).stop(true, true).slideUp();
            // Remove `js-icon-changed` class from all buttons except current
            // click
            $allIconButtons.not($(this)).removeClass('js-icon-changed');
            // add class to current click button
            $(this).toggleClass('js-icon-changed');
            // Toggle current right menu
            $(this).next().stop(true, true).slideToggle();
        });
    };




    /**
     * Window Resize Breakpoint Function
     */
    const windowResizeBreakpoint =  function ()  {
            if (windowWidth() > 991 && smallScreenFlag <= 991) {
            // Flush mega menus from portrait mode
            flushMegaMenusFromPortraitMode();
        }
        bigScreenFlag = windowWidth();
        smallScreenFlag = windowWidth();
    };


    /**
     * Represents a MegaMenuDropDowns constructor
     * @param {Object} element
     * @param {Object} options
     * @constructor
     */
    function MegaMenuDropDowns(element, options) {
        // If nothing is enter options object is undefined
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        // Assign Object Settings to another object
        //   pluginSettings = this.settings;
        // Main Function
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(MegaMenuDropDowns.prototype, {
        init: function () {
            // Performs MegaMenu Functionality on portrait mode
            portraitMegaMenuFunctionality();
            // Attach Click Event to View More `<a>'s`
            attachClickOnViewMore();
            // Resize Function
           windowResizeBreakpoint();
            // Resize Event
            $(window).resize(function ()  {
              // Window Resize Breakpoint
               windowResizeBreakpoint();
            });
        },
    });

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new MegaMenuDropDowns(this, options));
            }
        });
    };
})(jQuery, window, document);
