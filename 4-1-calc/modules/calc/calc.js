import paramsOperators from "../params/params-operators/params-operators.js";
import mainVal from "../validators/main-val/main-val.js";

const Calc = (a, b, operator) => {
    const res = {
        status: false,
        value: null
    };

    if(!(mainVal(a) && mainVal(b) && operator in paramsOperators)){
        return res;
    }

    const operand1 = Number(a);
    const operand2 = Number(b);

    if(operator === '/' && operand2 === 0){
        return res;
    }

    res.value = paramsOperators[operator](operand1, operand2);
    res.status = true;

    return res;
}

export default Calc;
