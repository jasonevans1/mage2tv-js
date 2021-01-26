var config = {
    shim: {
        'Magento_Catalog/js/view/compare-products.js': {
            deps: ['Mage2tv_Js/js/before-compare-log-when-loaded']
        }
    },
    deps: ['Mage2tv_Js/js/log-when-loaded'],
    config: {
        mixins: {
            "Magento_Checkout/js/checkout-data" : {
                "Mage2tv_Js/js/checkout-data-mixin": true
            },
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Mage2tv_Js/js/add-to-cart-mixin': true
            },
            'Magento_Checkout/js/view/minicart': {
                'Mage2tv_Js/js/minicart-mixin': true
            }
        }
    }
};
