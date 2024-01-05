import toMillisecond from "../to-millisecond/to-millisecond.js";

const GetTime = (str) => {
    const timeArr = str.split(' ').map(el => el.match(/^(\d+)(h|m|s)$/));
    const time = {
        'h': 0,
        'm': 0,
        's': 0,
    };
    timeArr.map(el => {
        if(el && el.length === 3 && el[2] in time){
            time[el[2]] = Number(el[1]);
        }
    });
    return toMillisecond(time.h, time.m, time.s);
}

export default GetTime;
