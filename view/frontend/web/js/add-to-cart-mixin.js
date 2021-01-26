// Mixin to intercept the jQuery widget add-to-cart submit form function.
define(['jquery'], function ($) {
    'use strict';

    return function (catalogAddToCart) {
        $.widget('mage.catalogAddToCart', catalogAddToCart, {
            submitForm: function (form) {
                console.log('add to cart success interception');
                console.log(form);
                return this._super(form);
            }
        });
        return $.mage.catalogAddToCart;
    };

});
