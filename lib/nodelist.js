/**
 * Wrapper from array of libxml's Node's to W3C DOM NodeList
 * @param  {Array} nodes array of libxmljs Node objects
 * @constructor
 */
var NodeList = module.exports = function(nodes) {
    nodes.forEach(function(n, i) {
        if (n.type() == 'element')
            Object.defineProperty(this, i, {
                value : new (require('./element'))(nodes[i])
            });
        else
            Object.defineProperty(this, i, {
                value : new (require('./node'))(nodes[i])
            });
    }.bind(this));
    Object.defineProperty(this, 'length', {
        value : nodes.length
    })
};

NodeList.prototype.item = function(i) {
    return this[i];
};

/**
 * Convenience extensions
 */
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.filter = Array.prototype.filter;
