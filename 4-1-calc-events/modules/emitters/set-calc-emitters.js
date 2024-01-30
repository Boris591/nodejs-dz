import paramsOperators from "../math-operations/params-operators.js";


const setCalcEmitters = (emitter) => {
    emitter.on('result', (res) => {
        console.log(res);
    });
    for (let operator in paramsOperators){
        emitter.on(operator, (operand1, operand2) => {
            const result = paramsOperators[operator](Number(operand1), Number(operand2));
            emitter.emit('result', `Ваш результат: ${result}`);
        })
    }
}

export default setCalcEmitters;
