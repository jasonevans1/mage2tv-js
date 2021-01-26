//Mixin to intercept the getSelectedShippingAddress JS function. This is not a jQuery widget or a UI component.
define([], function () {
    'use strict';

    return function (checkoutData) {
        const orig = checkoutData.getSelectedShippingAddress;
        checkoutData.getSelectedShippingAddress = function () {
            //call the original method keeping the object execution context.
            const address = orig.bind(checkoutData)();
            console.log('Selected address', address);
            return address;
        };
        return checkoutData;
    }
})
