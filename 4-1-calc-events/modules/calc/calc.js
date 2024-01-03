import paramsOperators from "../params/params-operators/params-operators.js";
import mainVal from "../validators/main-val/main-val.js";

const Calc = (a, b, operator, emitter) => {
    const res = {
        status: false,
        value: null
    };

    if(!(mainVal(a) && mainVal(b) && operator in paramsOperators)){
        emitter.emit('result', res);
        return false;
    }

    const operand1 = Number(a);
    const operand2 = Number(b);

    if(operator === '/' && operand2 === 0){
        emitter.emit('result', res);
        return false;
    }

    emitter.emit(operator, operand1, operand2);
    return true;
}

export default Calc;
