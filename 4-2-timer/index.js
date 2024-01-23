import getTime from "./modules/get-time/get-time.js";

const time = process.argv[2];

if(time){
    const ms = getTime(time);
    console.log(`Таймер запущен на ${time}...` );
    setTimeout(() => {
        console.log('Таймер сработал!');
    }, ms);
}else{
    console.warn("Введите время!");
}
