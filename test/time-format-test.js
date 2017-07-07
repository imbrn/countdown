import {expect} from 'chai';
import {Time, TimeFormat} from '../src/time';

describe('TimeFormat', () => {

    it('should return correct basic data', () => {
        const time = Time.fromString('5h53m27')
            .add(Time.fromMilliseconds(456));
        const format = new TimeFormat(time);
        expect(format.basic).to.equal('05:53:27');
    });

    it('should return correct milliseconds', () => {
        const time = Time.fromString('5h53m27')
            .add(Time.fromMilliseconds(456));
        const format = new TimeFormat(time);
        expect(format.milliseconds).to.equal('456');
    });

    it('should return correct full data', () => {
        const time = Time.fromString('5h53m27')
            .add(Time.fromMilliseconds(456));
        const format = new TimeFormat(time);
        expect(format.full).to.equal('05:53:27.456');
    });

    it('shoud return zeros', () => {
        const time = Time.zero();
        const format = new TimeFormat(time);
        expect(format.full).to.equal('00:00:00.000');
    });

});