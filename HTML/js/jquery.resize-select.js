/*!
 * Custom-Countdown v1.0.0
 *
 * Copyright (c)
 *  Ahmad Hussnain

 * MIT License
 */

/*
 * Automatic resize `select menu` width which is based on the `option` text.
 */
;(function ($, window, document, undefined) {
    'use strict';
    // Create the defaults once
    let pluginName = 'ResizeSelect';
    // let plugin; We can call property plugin.settings
    let defaults = {};

    /**
     * Represents a ResizeSelect constructor
     * @param {Object} element
     * @param {Object} options
     * @constructor
     */
    function ResizeSelect(element, options) {
        // If nothing is enter options object is undefined
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        // Main Function
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(ResizeSelect.prototype, {
        init: function () {
            // function invoke on select menu
            this.stubSelect();
        },
        /**
         * Reset Sub menus when the plugin is bind
         */
        stubSelect: function () {
            // First get text from original selected option and using innerHtml
            // to set the content into hidden option
            $('#compute-option').html($('#select-category option:selected').text());
            // Get width of the hidden select menu, and set that width to
            // original select menu
            $('#select-category').width($('#compute-select').width());
            // $(this.element) syntax makes element as a jQuery array like
            // object, so now its a select menu and we iterate from this
            $(this.element).each(function () {
                // Attach change event to select menu
                $(this).change(function ()  {
                    // Get select menu as a jQuery object
                    let $selectMenu = $(this);
                    // Again repetitive line:
                    // First get text from original selected option
                    // and using innerHtml to set the content into hidden option
                    $('#compute-option').html($selectMenu.find('option:selected').text());
                    // Again repetitive line:
                    // Get width of the hidden select menu, and set that width
                    // to original select menu
                    $selectMenu.width($('#compute-select').width());
                }).change();  // Run on start
            });
        },

    });

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new ResizeSelect(this, options));
            }
        });
    };
})(jQuery, window, document);
