Object.defineProperty(Array.prototype, 'reduce', {
    value: function (callback /* ,  initialValue*/) {
        if (this === null) { throw new TypeError }
        if (typeof callback !== 'function') { throw new TypeError }
        var o = Object(this); //对象数组对象化  
        var len = o.length
        var k = 0; //计数                 
         var value; //上次返回值
        if (arguments.length >= 2) { value = arguments[1]; }
        else {
            if (k >= len) { throw new TypeError(); }
            value = o[k++];
        }
        while (k < len) {
            if (k in o) { value = callback(value, o[k], k, o) }
            k++;
        } return value;
    }
})