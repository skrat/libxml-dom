W3C DOM compatible API to libxml2 
=================================

[![Circle CI](https://circleci.com/gh/skrat/libxml-dom.svg?style=svg)](https://circleci.com/gh/skrat/libxml-dom)

This exists due to frustration from poor performance of [xmldom](https://github.com/jindw/xmldom).

W3C DOM comptible API to [libxmljs](https://github.com/polotek/libxmljs/)
including Selectors API (`.querySelector` function). Everything here so far is incomplete and implemented
partially. Use with caution, contributions welcome.

CSS query to XPath is done with modified version of [css2xpath](https://code.google.com/p/css2xpath/).

What's supported
----------------

 - **Node**.childNodes
 - **Node**.textContent
 - /
 - **Document**.documentElement
 - **Document**.querySelector(...)
 - **Document**.querySelectorAll(...)
 - /
 - **Element**.attributes
 - **Element**.children
 - **Element**.parentNode
 - **Element**.tagName
 - **Element**.getAttribute(...)
 - **Element**.querySelector(...)
 - **Element**.querySelectorAll(...)
 - /
 - **NodeList**.length
 - **NodeList**.item(...)
 - **NodeList**.map(...)*
 - **NodeList**.filter(...)*
 - /
 - **NamedNodeMap**.length
 - **NamedNodeMap**.item(...)
 - /
 - **HTMLCollection**.length
 - **HTMLCollection**.item(...)

*extension methods not in W3C DOM API
