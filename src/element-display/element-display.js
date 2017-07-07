import "./_element-display.scss";
import {Countdown} from '../countdown';
import {TimeFormat} from '../time';
import {Composite} from '../composite';

/**
 * ElementDisplay.
 * It displays time inside an HTML element.
 */
export class ElementDisplay {

    constructor(selector) {
        this._selector = selector;
        this._updateElements();
    }

    _updateElements() {
        this._elements = [];
        document.querySelectorAll(this._selector) .forEach(element => {
            this._elements.push(new ElementDisplay.Element(element));
        });
    }

    onTimeElapsed(countdown, elapsed) {
        const format = new TimeFormat(countdown.remaining);
        this._elements.forEach(element => element.format(format));
    }

}

/**
 * Represent an element for displaying time.
 */
ElementDisplay.Element = class {
    
    constructor(element) {
        this._element = element;
        this._prepare();
    }

    _prepare() {
        this._element.innerHTML = '';
        this._createBasicPart();
        this._createMillisecondsPart();
    }

    _createBasicPart() {
        this._basicPart = document.createElement('h1');
        this._basicPart.classList.add('basic');
        this._element.appendChild(this._basicPart);
    }

    _createMillisecondsPart() {
        this._millisecondsPart = document.createElement('h2');
        this._millisecondsPart.classList.add('milliseconds');
        this._element.appendChild(this._millisecondsPart);
    }

    format(format) {
        this._basicPart.innerHTML = format.basic;
        this._millisecondsPart.innerHTML = '.' + format.milliseconds;
    }

}