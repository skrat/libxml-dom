var assert = require('assert'),
    parse = require('../lib/index').parse;

describe("Element", function() {
    it("should have attributes", function() {
        assert(
            parse("<a b='c'></a>").documentElement.attributes);
        assert.equal(
            parse("<a b='c'></a>").documentElement.attributes.b,
            'c');
        assert.equal(
            parse("<a b='c'></a>").documentElement.attributes.length ,
            1);
    });
    it("should have tagName as nodeName", function() {
        assert.equal(
            parse("<a>one</a>").documentElement.nodeName,
            'a');
    });
    it("should have children", function() {
        assert(
            parse("<a></a>").documentElement.children);
        assert.equal(
            parse("<a><b/>sdg<c/><d/></a>").documentElement.children.length,
            3);
    });
    it("should have parent", function() {
        assert.equal(
            parse("<a><b>one</b></a>").querySelector('b').parentNode.tagName,
            'a');
    });
});
