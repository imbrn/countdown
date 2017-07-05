describe('Clock', () => {

    let clock;

    beforeEach(() => {
        clock = new FakeClock();
    });

    it('lifecycle should be correct', () => {
        clock.start();
        expect(clock.isStarted).equal(true);
        clock.stop();
        expect(clock.isStopped).equal(true);
    });

    it('time should pass', () => {
        let elapsed = Time.zero();
        clock.addListener(time => elapsed = elapsed.add(time));
        clock.start();
        clock.passTime(Time.fromSeconds(2));
        expect(elapsed).to.deep.equal(Time.fromSeconds(2));
    });

    it('should stop counting after stop', () => {
        let elapsed = Time.zero();
        clock.addListener(time => elapsed = elapsed.add(time));
        clock.start();
        clock.passTime(Time.fromSeconds(3));
        clock.passTime(Time.fromSeconds(2));
        expect(elapsed).to.deep.equal(Time.fromSeconds(5));
        clock.stop();
        clock.passTime(Time.fromSeconds(1));
        expect(elapsed).to.deep.equal(Time.fromSeconds(5));
    });

    it('should be able to remove listeners', () => {
        const a = (time) => {}
        const b = (time) => {}
        const c = { onTimePassed(time) {} };
        const d = (time) => {}
        clock.addListener(a);
        clock.addListener(b);
        clock.addListener(c);
        clock.addListener(d);
        expect(clock.listeners).to.have.lengthOf(4);
        clock.removeListener(b);
        expect(clock.listeners).to.have.lengthOf(3);
        clock.removeListener(c);
        expect(clock.listeners).to.have.lengthOf(2);
        clock.removeListener(a);
        clock.removeListener(d);
        expect(clock.listeners).to.be.empty;
    });

});