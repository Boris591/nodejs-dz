import numberValidator from "./number-validator.js";

const mainValidator = (input) => {
    return input && numberValidator(input);
}

export default mainValidator;
