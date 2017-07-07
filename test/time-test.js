import {expect} from 'chai';
import {Time} from '../src/time';

describe('Time', () => {
    describe('fromString', () => {
        it('should be created from string template', () => {
            expect(Time.fromString('2 hours 5 minutes 35 seconds').amount)
                .to.equal(((60 * 60 * 2) + (60 * 5) + (35)) * 1000);
            expect(Time.fromString('2h51m35s').amount)
                .to.equal(((60 * 60 * 2) + (60 * 51) + (35)) * 1000);
            expect(Time.fromString('5 minutes 35 seconds').amount)
                .to.equal(((60 * 5) + (35)) * 1000);
            expect(Time.fromString('2 hours 35 seconds').amount)
                .to.equal(((60 * 60 * 2) + (35)) * 1000);
            expect(Time.fromString('35').amount)
                .to.equal(((35)) * 1000);
        });

        it('fromString should be created from "1 minute" string', () => {
            expect(Time.fromString("1 minute")).to.deep.equal(Time.fromMinutes(1));
        });

        it('fromString should be created from "1 hour" string', () => {
            expect(Time.fromString("1 hour")).to.deep.equal(Time.fromHours(1));
        });

        it('fromString shoud be created with seconds when unit is not specified', () => {
            expect(Time.fromString("15")).to.deep.equal(Time.fromSeconds(15));
        });
    })

    it('should be created from milliseconds', () => {
        expect(Time.fromMilliseconds(1000).amount).equal(1000);
    });

    it('should be created from seconds', () => {
        expect(Time.fromSeconds(4).amount).equal(1000 * 4);
    });

    it('should be created from minutes', () => {
        expect(Time.fromMinutes(5).amount).equal(1000 * 60 * 5);
    });

    it('should be created from hours', () => {
        expect(Time.fromHours(2).amount).equal(1000 * 60 * 60 * 2);
    });

    it('should add other time', () => {
        const a = Time.fromMilliseconds(100);
        const b = Time.fromMilliseconds(250);
        expect(a.add(b)).to.deep.equal(Time.fromMilliseconds(100 + 250));
    });

    it('should subtract other time', () => {
        const a = Time.fromMinutes(5);
        const b = Time.fromMinutes(2);
        const c = a.subtract(b);
        expect(c).to.deep.equal(Time.fromMinutes(5 - 2));
    });
});
