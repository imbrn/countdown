import {Time} from '../time';
import {Clock} from '../clock';

/**
 * System implementation of Clock.
 * It uses interval to count time.
 */
export class SystemClock extends Clock {

    constructor(frequency = 1) {
        super();
        this._frequency = frequency;
    }

    _onStart() {
        this._lastUpdate = undefined;
        this._interval = setInterval(() => {
            const now = new Date().getTime();
            const elapsed = now - (this._lastUpdate ? this._lastUpdate : now);
            this._lastUpdate = now;
            this._passTime(Time.fromMilliseconds(elapsed));
        }, this._frequency);
    }

    _onStop() {
        clearInterval(this._interval);
    }

    get frequency() {
        return this._frequency;
    }

    set frequency(frequency) {
        this._frequency = frequency;
    }

}