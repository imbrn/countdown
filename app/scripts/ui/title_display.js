/**
 * It displays the countdown progress in the navigator title.
 */
class TitleDisplay {

    constructor() {
        this._saveTitle();
    }

    onStateChange(countdown, state) {
        if (state == Countdown.State.READY) {
            if (!this._title) this._saveTitle();
            document.title = this._title;
        } else if (state == Countdown.State.FINISHED) {
            document.title = this._title;
        }
    }

    _saveTitle() {
        this._title = document.title;
    }

    onTimeElapsed(countdown, elapsed) {
        const format = new TimeFormat(countdown.remaining);
        document.title = format.basic;
    }

}
