import getTime from "./get-time.js";
import NotifySend from "node-notifier";


const time = process.argv[2];

if(time){
    const ms = getTime(time);
    console.log(`Таймер запущен на ${time}...` );
    setTimeout(() => NotifySend.notify({
        title: 'Таймер сработал!',
        message: 'Время вышло =)',
        sound:  true,
    }), ms);
}else{
    console.warn("Введите время!");
}
