const bigInt = require('big-integer');
const Utility = require('./utility');
class PrimaryKeyProcessor {
    constructor() { }

    generatePrimaryKey(name = "anupam mukherjee", typeCategory = "user") {
        if (!Utility.isNullOrEmpty(name) || !Utility.isNullOrEmpty(typeCategory)) {
            const concatenatedName = name.concat(typeCategory);
            let bufferArr = [];
            const buffer = new Buffer.alloc(concatenatedName.length, concatenatedName); // concatenated name with its type
            for (let i = 0; i < buffer.length; i++) {
                bufferArr.push(buffer[i]);
            }
            return (bigInt.fromArray(bufferArr).abs())
        }

    }


}

new PrimaryKeyProcessor().generatePrimaryKey();

module.exports = PrimaryKeyProcessor;