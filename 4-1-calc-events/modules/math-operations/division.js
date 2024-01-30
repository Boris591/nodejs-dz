const division = (operand1, operand2) => {
    if(operand2 === 0) throw new Error("Деление на ноль!");
    return operand1 / operand2;
}

export default division;
