/*!
 * Custom-Countdown v1.0.0
 *
 * Copyright (c)
 *  Ahmad Hussnain

 * MIT License
 */

/*
 * Custom Countdown that helps to manage timing of your event.
 * For getting `event expiry date` we could use 2 methods.
 * 1st method using with `CMS`:
 * In `CMS` user can pass year, date, month & time as an input through some ui
 * widget. We could store date and time on a server side configuration file.
 * On page load we get those values and pass that values into constructor
 * parameters i.e.
 * let eventExpireDateTime = new Date(2018 , 2 , 26 , 0 , 0 , 0).getTime();
 * But this method is only applicable on `CMS` not in static `HTML Template`.
 * 2nd method using with static templates:
 * For static `Templates` we use fictitious hours.
 * e.g. In this template all timers are start with 5 hours left.
 * How this is happening:
 * From online google resource 1 hour has 3600 seconds.
 * 5hours = 5 * 3600 = 18000
 * We enter fixed seconds in `HTML Template` and get those seconds, After
 * getting seconds we multiply seconds with 1000 and add current seconds.
 */

;(function ($, window, document, undefined) {
    'use strict';
    // Create the defaults once
    let pluginName = 'CountDown';
    // let plugin; We can call property plugin.settings
    let defaults = {};

    /**
     * Represents a CountDown constructor
     * @param {Object} element
     * @param {Object} options
     * @constructor
     */
    function CountDown(element, options) {
        // If nothing is enter options object is undefined
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        // Main Function
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(CountDown.prototype, {
        init: function () {
            // function invoke on select menu
            this.startCountDown();
        },
        /**
         * Start Countdown Timer on section or specific product
         */
        startCountDown: function () {
            // First take wrapper element where plugin is invoke and convert
            // that element into jQuery array like Object
            let $this = $(this.element);
            // Get Seconds
            let fictSeconds = $this.find('.fictitious-seconds').text();
            // Days Html Element
            let $dayElm = $this.children('.box-days').find('.section-key');
            // Hours Html Element
            let $hoursElm = $this.children('.box-hrs').find('.section-key');
            // Minutes Html Element
            let $MinutesElm = $this.children('.box-mins').find('.section-key');
            // Seconds Html Element
            let $SecondsElm = $this.children('.box-secs').find('.section-key');
            // Multiply that seconds with 1000 and add current seconds into that
            // get seconds
            let targetSeconds = (new Date().getTime()) + (fictSeconds * 1000);
            // variables for time units
            let days, hours, minutes, seconds;
            // update the "countdown" every 1 second
            setInterval(function () {
                // find the amount of "seconds" between now and target
                let currentMilliseconds = new Date().getTime();
                // Seconds Left
                let secondsLeft = (targetSeconds - currentMilliseconds) / 1000;
                // do some time calculations
                // Resource google: How many seconds in a day = 86400
                days = parseInt(secondsLeft / 86400);
                secondsLeft = secondsLeft % 86400;
                // Resource google: How many seconds in an hour = 3600
                hours = parseInt(secondsLeft / 3600);
                secondsLeft = secondsLeft % 3600;
                // Resource google: how many minutes in one hour = 60
                minutes = parseInt(secondsLeft / 60);
                seconds = parseInt(secondsLeft % 60);
                // format
                $dayElm.text(days);
                $hoursElm.text(hours);
                $MinutesElm.text(minutes);
                $SecondsElm.text(seconds);
            }, 1000);
        },

    });

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new CountDown(this, options));
            }
        });
    };
})(jQuery, window, document);
