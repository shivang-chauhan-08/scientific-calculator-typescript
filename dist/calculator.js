var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Calculator_instances, _Calculator_trig;
import { degToRad, factorial } from "./util.js";
export class Calculator {
    constructor(inputEl, outputEl, historyObj) {
        _Calculator_instances.add(this);
        this.inputEl = inputEl;
        this.outputEl = outputEl;
        this.historyObj = historyObj;
        this.expression = "";
    }
    append(value) {
        this.expression += value;
        this.outputEl.innerText = this.expression;
    }
    clear() {
        this.expression = "";
        this.inputEl.innerText = "";
        this.outputEl.innerText = "";
    }
    backspace() {
        this.expression = this.expression.slice(0, -1);
        this.outputEl.innerText = this.expression;
    }
    evaluate() {
        try {
            let finalExp = this.expression
                .replaceAll("x", "*")
                .replaceAll("÷", "/");
            let result = eval(finalExp);
            if (!isFinite(result))
                throw Error();
            this.inputEl.innerText = this.outputEl.innerText;
            this.outputEl.innerText = result;
            this.historyObj.add(this.expression, result);
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Math Error";
        }
    }
    add(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    mul(a, b) {
        return a * b;
    }
    div(a, b) {
        if (b === 0) {
            return "Divide By Zero";
        }
        return a / b;
    }
    sin() {
        __classPrivateFieldGet(this, _Calculator_instances, "m", _Calculator_trig).call(this, Math.sin);
    }
    cos() {
        __classPrivateFieldGet(this, _Calculator_instances, "m", _Calculator_trig).call(this, Math.cos);
    }
    tan() {
        __classPrivateFieldGet(this, _Calculator_instances, "m", _Calculator_trig).call(this, Math.tan);
    }
    sec() {
        if (!this.expression)
            return;
        try {
            let num = eval(this.expression);
            let rad = num * Math.PI / 180;
            let result = 1 / Math.cos(rad);
            this.inputEl.innerText = "sec(" + num + ")";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Error";
        }
    }
    csc() {
        if (!this.expression)
            return;
        try {
            let num = eval(this.expression);
            let rad = num * Math.PI / 180;
            let result = 1 / Math.sin(rad);
            this.inputEl.innerText = "csc(" + num + ")";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Error";
        }
    }
    cot() {
        if (!this.expression)
            return;
        try {
            let num = eval(this.expression);
            let rad = num * Math.PI / 180;
            let result = 1 / Math.tan(rad);
            this.inputEl.innerText = "cot(" + num + ")";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Error";
        }
    }
    sqrt() {
        try {
            let num = eval(this.expression);
            if (num < 0)
                throw Error();
            let result = Math.sqrt(num);
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Math Error";
        }
    }
    log() {
        try {
            let num = eval(this.expression);
            if (num <= 0)
                throw Error();
            let result = Math.log10(num);
            this.inputEl.innerText = "log(" + num + ")";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Math Error";
        }
    }
    ln() {
        try {
            let num = eval(this.expression);
            if (num <= 0)
                throw Error();
            let result = Math.log(num);
            this.inputEl.innerText = "ln(" + num + ")";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Math Error";
        }
    }
    fact() {
        try {
            let num = eval(this.expression);
            let result = factorial(num);
            if (result === null)
                throw Error();
            this.inputEl.innerText = num + "!";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Math Error";
        }
    }
    clearEntry() {
        this.expression = "";
        this.outputEl.innerText = "";
    }
    inverse() {
        try {
            let num = eval(this.expression);
            if (num === 0)
                throw Error();
            let result = 1 / num;
            this.inputEl.innerText = "1/(" + num + ")";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Math Error";
        }
    }
    square() {
        try {
            let num = eval(this.expression);
            let result = num * num;
            this.inputEl.innerText = "(" + num + ")²";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Error";
        }
    }
    toggleSign() {
        if (!this.expression)
            return;
        if (this.expression.startsWith("-")) {
            this.expression = this.expression.slice(1);
        }
        else {
            this.expression = "-" + this.expression;
        }
        this.outputEl.innerText = this.expression;
    }
    pow() {
        this.expression += "**";
        this.outputEl.innerText = this.expression;
    }
    tenPower() {
        if (!this.expression)
            return;
        try {
            let num = eval(this.expression);
            let result = Math.pow(10, num);
            this.inputEl.innerText = "10^(" + num + ")";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Error";
        }
    }
    exp() {
        if (!this.expression)
            return;
        try {
            let num = eval(this.expression);
            let result = Math.exp(num);
            this.inputEl.innerText = "exp(" + num + ")";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Error";
        }
    }
    abs() {
        if (!this.expression)
            return;
        try {
            let num = eval(this.expression);
            let result = Math.abs(num);
            this.inputEl.innerText = "|" + num + "|";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Error";
        }
    }
    floor() {
        if (!this.expression)
            return;
        let num = eval(this.expression);
        let result = Math.floor(num);
        this.inputEl.innerText = "floor(" + num + ")";
        this.outputEl.innerText = result.toString();
        this.expression = result.toString();
    }
    ceil() {
        if (!this.expression)
            return;
        let num = eval(this.expression);
        let result = Math.ceil(num);
        this.inputEl.innerText = "ceil(" + num + ")";
        this.outputEl.innerText = result.toString();
        this.expression = result.toString();
    }
    rand() {
        let result = Math.random();
        this.inputEl.innerText = "rand()";
        this.outputEl.innerText = result.toString();
        this.expression = result.toString();
    }
    dms() {
        if (!this.expression)
            return;
        let deg = eval(this.expression);
        let d = Math.floor(deg);
        let minFloat = (deg - d) * 60;
        let m = Math.floor(minFloat);
        let s = Math.floor((minFloat - m) * 60);
        let result = `${d}° ${m}' ${s}"`;
        this.inputEl.innerText = deg + "°";
        this.outputEl.innerText = result;
    }
    deg() {
        try {
            let parts = this.expression.split(" ");
            let d = parseFloat(parts[0] ?? "0");
            let m = parseFloat(parts[1] ?? "0");
            let s = parseFloat(parts[2] ?? "0");
            let result = d + (m / 60) + (s / 3600);
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Error";
        }
    }
    mod() {
        this.expression += "%";
        this.outputEl.innerText = this.expression;
    }
    modX() {
        try {
            let num = eval(this.expression);
            let result = Math.abs(num);
            this.inputEl.innerText = "|" + num + "|";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Error";
        }
    }
    twoPower() {
        if (!this.expression)
            return;
        try {
            let num = eval(this.expression);
            let result = Math.pow(2, num);
            this.inputEl.innerText = "2^(" + num + ")";
            this.outputEl.innerText = result.toString();
            this.expression = result.toString();
        }
        catch {
            this.outputEl.innerText = "Error";
        }
    }
}
_Calculator_instances = new WeakSet(), _Calculator_trig = function _Calculator_trig(fn) {
    try {
        let num = eval(this.expression);
        let result = fn(degToRad(num));
        this.outputEl.innerText = result.toString();
        this.expression = result.toString();
    }
    catch {
        this.outputEl.innerText = "Error";
    }
};
//# sourceMappingURL=calculator.js.map