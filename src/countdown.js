import {Time} from './time';
import {SystemClock} from './clock';
import {EventManager} from './event-manager';

/**
 * Countdown object.
 */
export class Countdown {

    constructor(time) {
        this._timeElapsedListeners = new EventManager();
        this._stateChangeListeners = new EventManager();
        this._time = time;
        this._elapsed = Time.zero();
        this._state = Countdown.State.READY;
        this.clock = new SystemClock();
    }

    static fromTime(time) {
        return new Countdown(time);
    }

    start() {
        if (this.isReady || this.isFinished) {
            this._elapsed = Time.zero();
            this.clock.start();
            this._setState(Countdown.State.STARTED);
        }
    }

    pause() {
        if (this.isStarted) {
            this.clock.stop();
            this._setState(Countdown.State.PAUSED);
        }
    }

    resume() {
        if (this.isPaused) {
            this.clock.start();
            this._setState(Countdown.State.STARTED);
        }
    }

    stop() {
        if (this.isStarted || this.isPaused) {
            this.clock.stop();
            this._setState(Countdown.State.READY);
        }
    }

    destroy() {
        this.clock.stop();
        this._setState(Countdown.State.DESTROYED);
    }

    onTimePassed(time) {
        this._setElapsed(this._elapsed.add(time));
        if (this._checkFinish()) {
            this._elapsed = this._time;
            this._setState(Countdown.State.FINISHED);
            this._clock.stop();
        }
    }

    _checkFinish() {
        return this.remaining.amount <= 0;
    }

    get isReady() {
        return this.state == Countdown.State.READY;
    }

    get isStarted() {
        return this.state == Countdown.State.STARTED;
    }

    get isPaused() {
        return this.state == Countdown.State.PAUSED;
    }

    get isFinished() {
        return this.state == Countdown.State.FINISHED;
    }

    get time() {
        return this._time;
    }

    get elapsed() {
        return this._elapsed;
    }

    _setElapsed(elapsed) {
        this._elapsed = elapsed;
        this._timeElapsedListeners.notify('onTimeElapsed', this, this._elapsed);
    }

    get remaining() {
        return this.time.subtract(this.elapsed);
    }

    get state() {
        return this._state;
    }

    _setState(state) {
        this._state = state;
        this._stateChangeListeners.notify('onStateChange', this, this._state);
    }

    get clock() {
        return this._clock;
    }

    set clock(clock) {
        this._uninstallCurrentClock();
        this._clock = clock;
        this._installClock();
    }

    _uninstallCurrentClock() {
        if (this._clock)
            this._clock.removeListener(this);
    }

    _installClock() {
        if (this._clock)
            this._clock.addListener(this);
    }

    addTimeElapsedListener(listener) {
        this._timeElapsedListeners.add(listener);
    }

    removeTimeElapsedListener(listener) {
        this._timeElapsedListeners.remove(listener);
    }

    addStateChangeListener(listener) {
        this._stateChangeListeners.add(listener);
    }

    removeStateChangeListener(listener) {
        this._stateChangeListeners.remove(listener);
    }

}

/**
 * Countdown states.
 */
Countdown.State = {
    READY: 0,
    STARTED: 1,
    PAUSED: 2,
    FINISHED: 3,
    DESTROYED: 4
};