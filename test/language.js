const { Controller } = require("../src");

const PLC = new Controller();

PLC.connect("10.116.171.147", 0).then(async () => {
    var x = await PLC._writeGenericSingle(100, 101, 100, Buffer.from([0]));
    console.log(x);
    x = await PLC._readGenericSingle(100, 101, 100);
    console.log(x);
    x = await PLC._writeGenericSingle(100, 101, 100, Buffer.from([1]));
    console.log(x);
    x = await PLC._readGenericSingle(100, 101, 100);
    console.log(x);
});