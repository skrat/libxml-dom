/**
 * Wraps any object into W3C DOM NamedNodeMap
 * @param  {object} map key-value map
 * @constructor
 */
var NamedNodeMap = module.exports = function NamedNodeMap(items) {
    items.forEach(function(itm, i) {
        Object.defineProperty(this, itm.name(), {
            value : itm.value()
        });
        Object.defineProperty(this, i, {
            value : itm.value()
        });
    }.bind(this));
    Object.defineProperty(this, 'length', {
        value : items.length
    });
};

NamedNodeMap.prototype.item = function(i) {
    return this[i];
};
