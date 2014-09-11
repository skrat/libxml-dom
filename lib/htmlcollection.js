var HTMLCollection = module.exports = function HTMLCollection(elements) {
    elements.forEach(function(el) { this.push(el); }.bind(this));
};

HTMLCollection.prototype = Object.create(Array.prototype)
HTMLCollection.prototype.constructor = HTMLCollection;
