import {Time} from './time';

/**
 * TimeParsing.
 * It's used to parse a time into its pieces.
 */
export class TimeParsing {

    constructor(time) {
        this.time = time;
    }

    get seconds() {
        return parseInt(this.time.amount / 1000) % 60;
    }

    get minutes() {
        return parseInt((this.time.amount / (1000 * 60)) % 60);
    }

    get hours() {
        return parseInt((this.time.amount / (1000 * 60 * 60)) % 24);
    }

    get milliseconds() {
        return parseInt(this.time.amount % 1000);
    }

}
