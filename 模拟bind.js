if (!Function.prototype.bind) {
    Function.prototype.bind = function (o) {
        if (typeOf(this) !== 'function') {
            throw TypeError('error')
        }
        var args = Array.prototype.slice.call(arguments, 1)
        self = this
        nop = function () { }
        bound = function () {
            return self.apply(this.instanceOf(nop) ? this : o, args.concat(Array.prototype.slice.call(arguments)))
        }
        if (this.prototype) {
            nop.prototype = this.prototype;
            bound.prototype = new nop()
            return bound
        }
    }
}

if (!Function.prototype.bind) (function () {
    var slice = Array.prototype.slice;
    Function.prototype.bind = function () {
        var thatFunc = this, 
            thatArg = arguments[0]; 
        var args = slice.call(arguments, 1);
        if (typeof thatFunc !== 'function') { throw new TypeError }
        return function () {
            var funcArgs = args.concat(slice.call(arguments))
            return thatFunc.apply(thatArg, funcArgs);
        };
    };
})();