var tabla = [
    [30, 25, 22, 42, 31],
    [31, 23, 36, 20, 37],
    [34, 30, 34, 31, 27],
    [25, 34, 28, 20, 31],
    [23, 20, 35, 36, 26],
    [23, 25, 29, 39, 33]
];
var sumatoria = /** @class */ (function () {
    function sumatoria() {
    }
    sumatoria.prototype.secuencia = function (start, end, count) {
        if (count === void 0) { count = 1; }
        var colection = [];
        for (var index = start; index <= end; index += count) {
            colection.push(index);
        }
        return colection;
    };
    sumatoria.prototype.secuencia_ = function (start, end, count) {
        if (count === void 0) { count = 1; }
        return function (funcion) {
            var suma = 0;
            for (var index = start; index <= end; index += count) {
                suma += funcion(index);
            }
            return suma;
        };
    };
    return sumatoria;
}());
"\n 30 # 25 # 22# 42# 31 ## \n 31 # 23 # 36# 20# 37 ##\n 34 # 30 # 34# 31# 27 ##\n 25 # 34 # 28# 20# 31 ##\n 23 # 20 # 35# 36# 26 ##\n 23 # 25 # 29# 39# 33 \n\n";
