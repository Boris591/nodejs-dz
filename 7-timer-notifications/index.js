import getTime from "./get-time.js";
import {NotifySend} from "node-notifier";


const time = process.argv[2];

if(time){
    const ms = getTime(time);
    const notifier =  new NotifySend();
    console.log(`Таймер запущен на ${time}...` );
    setTimeout(() => notifier.notify({
        title: 'Таймер сработал!'
    }), ms);
}else{
    console.warn("Введите время!");
}
