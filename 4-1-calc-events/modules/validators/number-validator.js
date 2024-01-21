const numberValidator = (input) => {
    return /^-?\d+(\.\d+)?$/.test(input);
}

export default numberValidator;
