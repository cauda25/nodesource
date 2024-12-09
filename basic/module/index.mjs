import checkOddEven from "./func.mjs";
import {odd,even} from "./var.mjs";

function checkStringOddEven(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkOddEven(5));
console.log(checkStringOddEven("banana"));