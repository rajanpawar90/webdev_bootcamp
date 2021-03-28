const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

const returnH = function () {
    return 'Hello W'
}
exports.returnH = returnH;

exports.square = square;
exports.PI = PI;

// Nor supported in es6 nodejs
// export function returnH() {
//     return "Hello W"
// }
// =========================
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;


