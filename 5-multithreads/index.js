import os from 'os';
import {Worker} from "node:worker_threads";
import arrayGenerator from "./modules/arrayGenerator/arrayGenerator.js";
import getPartsArray from "./modules/getPartsArray/getPartsArray.js";

const cpuCores = os.cpus().length;
let count = 0;

const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./divThreeWorker.js', {
            workerData: {array}
        });
        worker.on('message', (msg) => {
            count += msg;
            resolve(msg);
        });
        worker.on('error', (msg) => {
            reject(msg);
        });
    });
}

const main = async () => {
    const arr = arrayGenerator(1, 300000);
    const arrParts = getPartsArray(arr, cpuCores);
    const calc = arrParts.map(el => compute(el));
    Promise.all(calc).then(() => console.log(count));
}

main();
