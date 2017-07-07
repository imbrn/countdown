import {Clock} from './clock';

export class FakeClock extends Clock {
    passTime(time) {
        this._passTime(time);
    }
}