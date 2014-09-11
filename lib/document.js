var Node    = require('./node'),
    Element = require('./element'),
    memoize = require('./memoize');

/**
 * Wrapper from libxmljs.Document to W3C DOM Document
 * @param  {Document} doc libxmljs Document object
 * @constructor
 */
var Document = module.exports = function(doc) {
    this._lib = doc;
};

Document.prototype = Object.create(Node.prototype, {

    documentElement : {
        get : memoize('documentElement', function() {
            return new Element(this._lib.root());
        })
    },

    nodeName : { value : '#document' }

});

Document.prototype.constructor = Document;
Document.prototype.querySelector = Element.prototype.querySelector;
Document.prototype.querySelectorAll = Element.prototype.querySelectorAll;
