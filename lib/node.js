var NodeList = require('./nodelist'),
    memoize = require('./memoize');

/**
 * Wrapper from libxmljs.Node to W3C DOM Node
 * @param  {Node} el libxmljs Node object
 * @constructor
 */
var Node = module.exports = function(n) {
    this._lib = n;
}

Object.defineProperties(Node.prototype, {

    childNodes : {
        get : memoize('childNodes', function() {
            return new NodeList(this._lib.childNodes());
        })
    },

    textContent : {
        get : memoize('textContent', function() {
            return this._lib.text();
        })
    }

});
