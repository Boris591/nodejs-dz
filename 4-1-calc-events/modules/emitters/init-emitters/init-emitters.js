import paramsOperators from "../../params/params-operators/params-operators.js";
import messages from "../../params/messages/messages.js";

const InitEmitters = (emitter) => {
    emitter.on('result', (res) => {
        let msg = '';
        if(res.status){
            msg = `${messages['ok']} ${res.value}`;
        }else {
            msg = messages['err'];
        }

        console.log(msg);
    });
    for (let operator in paramsOperators){
        emitter.on(operator, (operand1, operand2) => {
            const res = {
                status: true,
                value: paramsOperators[operator](operand1, operand2, operator)
            };
            emitter.emit('result', res);
        })
    }
}

export default InitEmitters;
