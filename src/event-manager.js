/**
 * EventManager object.
 * It manages listeners objects.
 */
export class EventManager {

    constructor() {
        this._listeners = [];
    }

    notify(action, ...params) {
        this._listeners.forEach(listener => {
            if (typeof listener === 'function') {
                listener(...params);
            } else if (listener[action]) {
                listener[action].call(listener, ...params);
            }
        });
    }

    add(listener) {
        this._listeners.push(listener);
    }

    push(listener) {
        this.add(listener);
    }

    remove(expression) {
        let size = this._listeners.length;
        let index = 0;
        while (index < size) {
            if (expression(this._listeners[index])) {
                this._listeners.splice(index, 1);
                size--;
            } else {
                index++;
            }
        }
    }

    get listeners() {
        return this._listeners;
    }

}