import calc from "./modules/calc.js";

const operand1 = process.argv[2];
const operator = process.argv[3];
const operand2 = process.argv[4];

calc(operand1, operand2, operator);
