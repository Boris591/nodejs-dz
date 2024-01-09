import checkDiv from "../checkDiv/checkDiv.js";

const divThree = ({ array }) => {
    return array.filter(el => checkDiv(el, 3)).length;
}

export default divThree;
