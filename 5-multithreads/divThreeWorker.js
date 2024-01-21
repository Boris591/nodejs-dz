import {parentPort, workerData} from "node:worker_threads";
import divThree from "./modules/divThree/divThree.js";

parentPort.postMessage(divThree(workerData));
