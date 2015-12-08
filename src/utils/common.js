(function(){
    'use strict';

    var RATCHET = {};

    RATCHET.customEvent = function(type, config) {
        var e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, config.bubbles, config.cancelable, config.detail);
        return e;
    };

    RATCHET.getBrowserCapabilities = function () {
        var styles = window.getComputedStyle(document.documentElement, '');
        var pre = (Array.prototype.slice
                .call(styles)
                .join('')
                .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
            )[1];
        return {
            prefix: '-' + pre + '-',
            transform: pre[0].toUpperCase() + pre.substr(1) + 'Transform'
        };
    };

    RATCHET.getTransitionEnd = function () {
        var el = document.createElement('ratchet');
        var transEndEventNames = {
            WebkitTransition : 'webkitTransitionEnd',
            MozTransition : 'transitionend',
            OTransition : 'oTransitionEnd otransitionend',
            transition : 'transitionend'
        };

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return transEndEventNames[name];
            }
        }

        return transEndEventNames.transition;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = RATCHET;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define('RATCHET', [], function () {
            return RATCHET;
        });
    } else {
        window.RATCHET = RATCHET;
    }

}());