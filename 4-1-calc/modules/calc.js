import paramsOperators from "./math-operations/params-operators.js";
import mainValidator from "./validators/main-validator.js";

const calc = (operand1, operand2, operator) => {
    if(!(mainValidator(operand1) && mainValidator(operand2) && operator in paramsOperators)){
        console.log('Ошибка! Попробуйте другие значения.');
    }else {
        const result = paramsOperators[operator](Number(operand1), Number(operand2));
        console.log(`Ваш результат: ${result}`);
    }
}

export default calc;
