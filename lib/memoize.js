module.exports = function memoize(n, f) {
    return function() {
        var tcache = (this._cache = this._cache || {}),
            ncache = (tcache[n] = tcache[n] || {}),
            key = JSON.stringify(arguments),
            val;

        if((val = ncache[key]) === undefined)
            val = ncache[key] = f.apply(this, arguments);
        return val;
    };
};
