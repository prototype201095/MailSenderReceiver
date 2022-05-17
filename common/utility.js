class Utility {
    constructor() { }
    static isNullOrEmpty(data) {
        // Data Types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
        // Undefined or Null
        if (typeof data == 'undefined' || data == null) return true;
        // boolean || Boolean
        if (typeof data == 'boolean' || data instanceof Boolean) return !data;
        // number || Number
        if (typeof data == 'number' || data instanceof Number) return data === 0 || data === 0.0;
        // bigint
        if (typeof data == 'bigint') return data === 0n;
        // string
        if (typeof data == 'string') return data === '';
        // object
        if (typeof data == 'object') {
            // Typed Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
            if (ArrayBuffer.isView(data)) return data.byteLength === 0;
            // Set
            else if (data instanceof Set) return data.size === 0;
            // Object - Array || Map etc
            return Object.keys(data).length === 0;
        }
        return false;
    }

    static concatStrings(...strings) {
        return strings.join("");
    }
}

module.exports = Utility;