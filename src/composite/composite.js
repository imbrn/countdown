import {Time} from '../time';
import {Countdown} from '../countdown';

/**
 * Represents a composition of the system.
 * This "interface" allows composition of components in the countdown.
 */
export class Composite {
    
    /**
     * This function is called when the countdown time is elapsed.
     * @param {*Countdown} countdown reference to the countdown.
     * @param {*Time} elapsed amount of time elapsed since the last update.
     */
    onTimeElapsed(countdown, elapsed) {
    }

    /**
     * This function is called when the countdown has its state changed.
     * @param {*Countdown} countdown reference to the countdown.
     * @param {*Countdow.State} state state of the countdown after the change.
     */
    onStateChange(countdown, state) {
    }

}