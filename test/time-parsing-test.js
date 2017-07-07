import {expect} from 'chai';
import {Time, TimeParsing} from '../src/time';

describe('TimeParsing', () => {

    it('should get produce correct values', () => {
        const parsing = new TimeParsing(Time.fromString('5 hours 13 minutes 27 seconds').add(Time.fromMilliseconds(530)));
        expect(parsing.hours).to.equal(5);
        expect(parsing.minutes).to.equal(13);
        expect(parsing.seconds).to.equal(27);
        expect(parsing.milliseconds).to.equal(530);
    });

}); 