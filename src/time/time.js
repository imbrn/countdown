/**
 * Represent a time object throughout the system.
 */
export class Time {

    constructor(amount) {
        this._amount = amount;
    }

    static fromString(string) {
        const regexp = /^(([0-9]+)\s*(h|hr|hour[s]?))?\s*(([0-9]+)\s*(m|min|minute[s]?))?\s*(([0-9]+)\s*(s|sec|second[s]?)?)?$/i;
        const result = regexp.exec(string);
        const hours = result[2] ? parseInt(result[2]) : 0;
        const minutes = result[5] ? parseInt(result[5]) : 0;
        const seconds = result[8] ? parseInt(result[8]) : 0;
        const total = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
        return new Time(total);
    }

    static zero() {
        return Time.fromMilliseconds(0);
    }

    static fromMilliseconds(milliseconds) {
        return new Time(milliseconds);
    }

    static fromSeconds(seconds) {
        return Time.fromMilliseconds(seconds * 1000);
    }

    static fromMinutes(minutes) {
        return Time.fromSeconds(minutes * 60);
    }

    static fromHours(hours) {
        return Time.fromMinutes(hours * 60);
    }
    
    get amount() {
        return this._amount;
    }

    add(other) {
        const newAmount = this.amount + other.amount;
        return new Time(newAmount);
    }

    subtract(other) {
        const newAmount = this.amount - other.amount;
        return new Time(newAmount);
    }

}
