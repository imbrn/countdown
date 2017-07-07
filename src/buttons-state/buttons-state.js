import "./_buttons-state.scss"
import {Composite} from '../composite';
import {Countdown} from '../countdown';

/**
 * Manages states of buttons accordingly to the countdown state.
 */
export class ButtonsState extends Composite {

    onStateChange(countdown, state) {
        if (state === Countdown.State.PAUSED) {
            this._showResumeButtons();
        } else {
            this._showPauseButtons();
        }
    }

    _showResumeButtons() {
        document.querySelectorAll(".countdown-pause-button")
            .forEach(button => button.classList.add("hidden"));
        document.querySelectorAll(".countdown-resume-button")
            .forEach(button => button.classList.remove("hidden"));
    }

    _showPauseButtons() {
        document.querySelectorAll(".countdown-pause-button")
            .forEach(button => button.classList.remove("hidden"));
        document.querySelectorAll(".countdown-resume-button")
            .forEach(button => button.classList.add("hidden"));
    }

}