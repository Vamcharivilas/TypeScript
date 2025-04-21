var greeting = /** @class */ (function () {
    function greeting() {
    }
    greeting.prototype.wish = function () {
        console.log("Good Morning");
    };
    return greeting;
}());
var obj = new greeting();
obj.wish();
