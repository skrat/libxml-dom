var assert = require('assert'),
    parse = require('../lib/index').parse;

describe("parse", function() {
    it("should return a document", function() {
        assert(parse("<a>foo</a>").documentElement);
    });
});

describe("Document", function() {
    it("should inherit from Node", function() {
        assert.equal(
            parse("<a>foo</a>").childNodes.length,
            1);
    });
    it("should have correct documentElement", function() {
        assert.equal(
            parse("<a>foo</a>").documentElement.tagName,
            'a');
    });
    it("should support Selectors API", function() {
        assert.equal(
            parse("<a><b/>foo</a>").querySelector('b').tagName,
            'b');
        assert.equal(
            parse("<a><b/>foo<c><b/></c></a>").querySelectorAll('b').length,
            2);
    });
    it("should have '#document' nodeName", function() {
        assert.equal(
            parse("<a>foo</a>").nodeName,
            '#document');
    });
});
