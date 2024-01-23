import emptyVal from "../empty-val/empty-val.js";
import numberVal from "../number-val/number-val.js";

const MainVal = (input) => {
    return emptyVal(input) && numberVal(input);
}

export default MainVal;
