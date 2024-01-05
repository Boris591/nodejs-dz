import Calc from "./modules/calc/calc.js";
import initEmitters from "./modules/emitters/init-emitters/init-emitters.js";
import { EventEmitter } from 'node:events';


const myEmmiter = new EventEmitter();
const operand1 = process.argv[2];
const operator = process.argv[3];
const operand2 = process.argv[4];

initEmitters(myEmmiter);
Calc(operand1, operand2, operator, myEmmiter);
