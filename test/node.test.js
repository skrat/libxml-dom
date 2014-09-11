var assert = require('assert'),
    parse = require('../lib/index').parse;

describe("Node", function() {
    it("should have childNodes", function() {
        assert(
            parse("<a></a>").documentElement.childNodes);
        assert.equal(
            parse("<a><b/>sdg<c/><d/></a>").documentElement.childNodes.length,
            4);
    });
    it("should have textContent", function() {
        assert(
            typeof
            parse("<a></a>").documentElement.textContent
            == 'string');
        assert.equal(
            parse("<a>foo</a>").documentElement.textContent,
            "foo");
    });
});
