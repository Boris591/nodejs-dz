const NumberVal = (input) => {
    return /^-?\d+(\.\d+)?$/.test(input);
}

export default NumberVal;
