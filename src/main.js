import {Time} from '../src/time';
import {Countdown} from './countdown';
import {Router} from './router';
import {CompositeList} from '../src/composite';
import {TitleDisplay} from './title-display';
import {ElementDisplay} from './element-display';
import {ButtonsState} from './buttons-state';

// Reference to the current countdown.
let countdown;
let router;
let composite;

function init() {
    configureRouter();
    configureComposite();
}

function configureRouter() {
    router = Router.config()
        .page(Countdown.State.READY, "ready")
        .page(Countdown.State.DESTROYED, "ready")
        .page(Countdown.State.STARTED, "started")
        .page(Countdown.State.FINISHED, "finished")
        .done();
}

function configureComposite() {
    composite = CompositeList.create()
        .add(new TitleDisplay())
        .add(new ElementDisplay(".element-display"))
        .add(new ButtonsState())
        .done();
}

function startCustomCountdown() {
    try {
        const value = document.querySelector("#custom-time").value;
        startCountdown(value||"1 minute");
    } catch(e) {
        console.error(e);
    }
}

function startPredefinedCountdown(value) {
    startCountdown(value);
}

function startCountdown(value) {
    countdown = Countdown.fromTime(Time.fromString(value));
    countdown.addStateChangeListener(router);
    countdown.addStateChangeListener(composite);
    countdown.addTimeElapsedListener(composite);
    countdown.start();
}

function pauseCountdown() {
    countdown.pause();
}

function resumeCountdown() {
    countdown.resume();
}

function stopCountdown() {
    countdown.stop();
    countdown.destroy();
}

function restartCountdown() {
    countdown.start();
}

function back() {
    countdown.destroy();
}

export {
    init,
    startCustomCountdown,
    startPredefinedCountdown,
    pauseCountdown,
    resumeCountdown,
    stopCountdown,
    restartCountdown,
    back
}