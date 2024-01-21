import mainValidator from "./validators/main-validator.js";
import paramsOperators from "./math-operations/params-operators.js";


const calc = (operand1, operand2, operator, emitter) => {
    if(!(mainValidator(operand1) && mainValidator(operand2) && operator in paramsOperators)){
        emitter.emit('result', 'Ошибка! Попробуйте другие значения.');
    }else {
        emitter.emit(operator, operand1, operand2);
    }
}

export default calc;
