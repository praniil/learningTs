var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        (_a = this.items).push.apply(_a, items);
    };
    Stack.prototype.pop = function () {
        this.items.pop();
    };
    Stack.prototype.print = function () {
        console.log(this.items);
    };
    return Stack;
}());
var numberStact = new Stack();
numberStact.push(2, 3);
numberStact.pop();
numberStact.print();
var stringStack = new Stack();
stringStack.push("Pranil", "TypeScript");
stringStack.print();
