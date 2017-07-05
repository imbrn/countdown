describe('SystemClock', () => {

    it('should pass time automatically', (done) => {
        let passedTime = Time.zero();
        clock = new SystemClock(60);
        clock.addListener(time => {
            passedTime = passedTime.add(time);
            if (passedTime.amount >= 1000) {
                clock.stop();
                done();
            }
        });
        clock.start();
    });

});