const { Controller } = require("../src");

const PLC = new Controller();

PLC.connect("10.116.171.147", 0).then(async () => {
    // STW
    x = await PLC._readGenericSingle(116, 103, 100);
    console.log(x);
    // REF
    x = await PLC._readGenericSingle(116, 105, 100);
    console.log(x);
    // Fieldbus CTW
    x = await PLC._readGenericSingle(116, 180, 100);
    console.log(x);
    // Fieldbus Ref
    x = await PLC._readGenericSingle(116, 182, 100);
    console.log(x);

});