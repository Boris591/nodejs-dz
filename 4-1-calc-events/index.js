import calc from "./modules/calc.js";
import setCalcEmitters from "./modules/emitters/set-calc-emitters.js";
import myEmitter from "./modules/emitters/myEmitter.js";

const operand1 = process.argv[2];
const operator = process.argv[3];
const operand2 = process.argv[4];

setCalcEmitters(myEmitter);
calc(operand1, operand2, operator, myEmitter);
