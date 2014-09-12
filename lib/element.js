var css2xpath = require('./css2xpath'),
    memoize   = require('./memoize'),
    Node      = require('./node'),
    NodeList  = require('./nodelist'),
    NamedNodeMap = require('./nodemap.js'),
    HTMLCollection = require('./htmlcollection');

/**
 * Wrapper from libxmljs.Element to W3C DOM Element
 * @param  {Element} el libxmljs Element object
 * @constructor
 */
var Element = module.exports = function(el) {
    this._lib = el;
};

Element.prototype = Object.create(Node.prototype, {

    attributes : {
        get : memoize('attributes', function() {
            return new NamedNodeMap(this._lib.attrs());
        })
    },

    children : {
        get : memoize('children', function() {
            return new HTMLCollection(this.childNodes.filter(function(n) {
                return n._lib.type() == 'element';
            }));
        })
    },

    nodeName : {
        get : function() {
            return this._lib.name();
        }
    },

    tagName : {
        get : function() {
            return this._lib.name();
        }
    }

});

Element.prototype.constructor = Element;

Element.prototype.querySelectorAll = function(s) {
    return new NodeList(this._lib.find('.' + css2xpath(s)));
};

Element.prototype.querySelector = function(s) {
    return this.querySelectorAll(s)[0];
};

Element.prototype.getAttribute = function(name) {
    return this.attributes[name];
};
