import {Composite} from './composite';

/**
 * Mock implementation of Composite.
 */
export class MockComposite extends Composite {

    onTimeElapsed(countdown, elapsed) {
        this.countdown = countdown;
        this.elapsed = elapsed;
    }

    onStateChange(countdown, state) {
        this.countdown = countdown;
        this.state = state;
    }

}
