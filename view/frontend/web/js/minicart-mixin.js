// Mixin to intercept the minicart update UI component function.
define([], function () {
    'use strict';

    return function (Minicart) {
        return Minicart.extend({
           update: function (updateCart) {
               console.log('update cart successfully intercepted.');
               console.log(updateCart);
               //_super will delegate to the parent function.
               return this._super(updateCart);
           }
        });
    }
})
