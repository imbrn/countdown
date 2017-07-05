/**
 * Abstraction of clock.
 * It's used for counting time
 */
class Clock {

    constructor() {
        this._listeners = new EventManager();
        this._started = false;
    }

    start() {
        if (this.isStopped) {
            this._started = true;
            this._onStart();
        }
    }

    _onStart() {
        /* Should be implemented by subclasses. */
    }

    stop() {
        if (this.isStarted) {
            this._started = false;
            this._onStop();
        }
    }

    _onStop() {
        /* Should be implemented by subclasses. */
    }

    get isStarted() {
        return this._started;
    }

    get isNotStarted() {
        return !this.isStarted;
    }

    get isStopped() {
        return this.isNotStarted;
    }

    get listeners() {
        return this._listeners.listeners;
    }

    addListener(listener) {
        this._listeners.add(listener);
    }

    removeListener(listener) {
        this._listeners.remove(it => it === listener);
    }

    _passTime(time) {
        if (this.isStarted)
            this._notifyTimePassed(time);
    }

    _notifyTimePassed(time) {
        this._listeners.notify('onTimePassed', time);
    }

}
