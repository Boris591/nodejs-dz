import addition from "../../math-operations/addition/addition.js";
import subtraction from "../../math-operations/subtraction/subtraction.js";
import multiply from "../../math-operations/multiply/multiply.js";
import division from "../../math-operations/division/division.js";

const ParamsOperators = {
    '+': addition,
    '-': subtraction,
    'x': multiply,
    '/': division
};

export default ParamsOperators;
