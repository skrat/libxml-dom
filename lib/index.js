var libxml = require('libxmljs'),
    Document = require('./document');

module.exports.parse = function(data) {
    return new Document(libxml.parseXmlString(data));
};
