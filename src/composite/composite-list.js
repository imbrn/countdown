import {Composite} from './composite';

/**
 * Implementation of Composite which allows multiple composite objects to
 * be wired together.
 */
export class CompositeList extends Composite {

    constructor(...composites) {
        super();
        this._composites = composites;
    }

    static create() {
        return new Builder();
    }

    add(composite) {
        this._composites.push(composite);
    }

    remove(composite) {
        const index = this._composites.indexOf(composite);
        if (index >= 0) {
            this._composites.splice(index, 1);
        }
    }

    onTimeElapsed(countdown, elapsed) {
        this._composites.forEach(it => {
            if (it.onTimeElapsed) {
                it.onTimeElapsed(countdown, elapsed);
            }
        });
    }

    onStateChange(countdown, state) {
        this._composites.forEach(it => {
            if (it.onStateChange) {
                it.onStateChange(countdown, state);
            }
        });
    }

    get size() {
        return this.length;
    }

    get length() {
        return this._composites.length;
    }

}

// Builder for Composite list
class Builder {
    constructor() {
        this._composites = [];
    }

    add(composite) {
        this._composites.push(composite);
        return this;
    }

    done() {
        return new CompositeList(...this._composites);
    }
}