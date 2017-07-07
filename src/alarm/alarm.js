import {Composite} from '../composite';
import {Countdown} from '../countdown';
import alarm from './alarm.mp3';

/**
 * Alarm for notifying about countdown state change.
 */
export class Alarm extends Composite {

    constructor() {
        super();
        this.audio = new Audio(alarm);
    }

    onStateChange(countdown, state) {
        if (state === Countdown.State.FINISHED) {
            this.audio.play();
        }
    }

}