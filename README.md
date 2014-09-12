W3C DOM compatible API to libxml2
=================================

W3C DOM comptible API to [libxmljs](https://github.com/polotek/libxmljs/)
including Selectors API. Everything here so far is incomplete and implemented
partially. Use with caution, contributions welcome.

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