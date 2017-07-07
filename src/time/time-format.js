import {TimeParsing} from './time-parsing';

/**
 * TimeFormat.
 * It formats the time to be presented.
 */
export class TimeFormat {

    constructor(time) {
        this._time = time;
        this._parsing = new TimeParsing(this._time);
    }

    get full() {
        return this.basic + '.' + this.milliseconds;
    }

    get basic() {
        const h = this._leadingZeros(this._parsing.hours, 2);
        const m = this._leadingZeros(this._parsing.minutes, 2);
        const s = this._leadingZeros(this._parsing.seconds, 2);
        return `${h}:${m}:${s}`;
    }

    get milliseconds() {
        return this._leadingZeros(this._parsing.milliseconds, 3);
    }

    _leadingZeros(value, places=1) {
        let result = '';
        while (places > 0 || value > 0) {
            const n = value % 10;
            value = parseInt(value / 10);
            result = Math.max(n, 0) + result;
            places--;
        }
        return result;
    }

}