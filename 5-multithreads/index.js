import os from 'os';
import {Worker} from "node:worker_threads";
import { performance, PerformanceObserver } from "node:perf_hooks";
import arrayGenerator from "./modules/arrayGenerator/arrayGenerator.js";
import getPartsArray from "./modules/getPartsArray/getPartsArray.js";
import divThree from "./modules/divThree/divThree.js";

const cpuCores = os.cpus().length;
let countForWorker = 0;
let countForSimple = 0;
const arr = arrayGenerator(1, 300000);

const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}`);
    });
});
performanceObserver.observe({ entryTypes: ['measure'] });

const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./divThreeWorker.js', {
            workerData: {array}
        });
        worker.on('message', (msg) => {
            countForWorker += msg;
            resolve(msg);
        });
    });
}

const mainWorker = async () => {
    const arrParts = getPartsArray(arr, cpuCores);
    performance.mark('worker start');
    const calc = arrParts.map(el => compute(el));
    Promise.all(calc).then(() => {
        performance.mark('worker end');
        performance.measure('worker', 'worker start', 'worker end');
        console.log('worker res: ', countForWorker)
    });
}

const mainSimple = () => {
    performance.mark('simple start');
    countForSimple = divThree({array: arr});
    performance.mark('simple end');
    performance.measure('simple', 'simple start', 'simple end');
    console.log('simple res: ', countForSimple);
}
mainSimple();
mainWorker();
