import {expect} from 'chai';
import {Time} from '../src/time';
import {FakeClock} from '../src/clock';
import {Countdown} from '../src/countdown';

describe('Countdown', () => {

    let fakeClock, countdown;

    beforeEach(() => {
        fakeClock = new FakeClock();
        countdown = Countdown.fromTime(Time.fromSeconds(10));
        countdown.clock = fakeClock;
    });

    it('should be created at ready state', () => {
        expect(countdown.state).to.equal(Countdown.State.READY);
    });

    it ('shoud be able to start', () => {
        countdown.start();
        expect(countdown.state).to.equal(Countdown.State.STARTED);
    });

    it('should be able to stop', () => {
        countdown.start();
        countdown.stop();
        expect(countdown.state).to.equal(Countdown.State.READY);
    });

    it('should be able to pause', () => {
        countdown.start();
        countdown.pause();
        expect(countdown.state).to.equal(Countdown.State.PAUSED);
    });

    it('should be able to resume', () => {
        countdown.start();
        countdown.pause();
        countdown.resume();
        expect(countdown.state).to.equal(Countdown.State.STARTED);
    });

    it('should be able to restart after finished', () => {
        countdown.start();
        fakeClock.passTime(countdown.remaining);
        expect(countdown.state).to.equal(Countdown.State.FINISHED);
        countdown.start();
        expect(countdown.state).to.equal(Countdown.State.STARTED);
    });

    it('should be able to destroy', () => {
        countdown.destroy();
        expect(countdown.state).to.be.equal(Countdown.State.DESTROYED);
    });

    it('should notify when time elapse', () => {
        let elapsed;
        countdown.addTimeElapsedListener((c, t) => elapsed = t);
        countdown.start();
        fakeClock.passTime(Time.fromSeconds(5));
        expect(elapsed).to.deep.equal(Time.fromSeconds(5));
    });

    it('should notify when state change', () => {
        let state;
        countdown.addStateChangeListener((c, s) => state = s);
        countdown.start();
        countdown.pause();
        expect(state).to.equal(Countdown.State.PAUSED);
    });

});