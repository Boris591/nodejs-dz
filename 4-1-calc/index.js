import Calc from "./modules/calc/calc.js";
import messages from "./modules/params/messages/messages.js";

const operand1 = process.argv[2];
const operator = process.argv[3];
const operand2 = process.argv[4];

const res = Calc(operand1, operand2, operator);
let msg = '';
if(res.status){
    msg = `${messages['ok']} ${res.value}`;
}else {
    msg = messages['err'];
}

console.log(msg);
