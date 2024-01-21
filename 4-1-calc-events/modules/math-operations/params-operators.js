import addition from "./addition.js";
import subtraction from "./subtraction.js";
import multiply from "./multiply.js";
import division from "./division.js";

const paramsOperators = {
    '+': addition,
    '-': subtraction,
    'x': multiply,
    '/': division
};

export default paramsOperators;
