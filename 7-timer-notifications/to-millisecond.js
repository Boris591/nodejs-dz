const ToMillisecond = (hours, minutes, seconds) => {
    return (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
}

export default ToMillisecond;
