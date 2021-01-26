define(['uiElement'], function (UiElement) {
    'use strict';

    return UiElement.extend({
       defaults: {
           template: 'Mage2tv_Js/ui-component-template',
           label: 'Some random numbers',
           values: [22, 11, 14]
       }
    });
})
