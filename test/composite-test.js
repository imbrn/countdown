import {expect} from 'chai';
import {FakeClock} from '../src/clock';
import {Time} from '../src/time';
import {Countdown} from '../src/countdown';
import {CompositeList, MockComposite} from '../src/composite';

describe('CompositeList', () => {

    let clock;
    let countdown;

    beforeEach(() => {
        clock = new FakeClock();
        countdown = Countdown.fromTime(Time.fromSeconds(10));
        countdown.clock = clock;
    });

    it('should be create with a list of composites', () => {
        const list = new CompositeList(
            new MockComposite(),
            new MockComposite()
        );
        expect(list.length).to.be.equal(2);
    });

    it('should be create empty', () => {
        const list = new CompositeList();
        expect(list.length).to.be.equal(0);
    });

    it('should be create through its builder', () => {
        const list = CompositeList.create()
            .add(new MockComposite())
            .add(new MockComposite())
            .done();
        expect(list.length).to.be.equal(2);
    });

    it('shoudl size return the same as length', () => {
        const list = new CompositeList(
            new MockComposite(),
            new MockComposite()
        );
        expect(list.size).to.be.equal(list.length);
    })

    it('should be able to add composites', () => {
        const list = new CompositeList();
        list.add(new MockComposite());
        expect(list.length).to.be.equal(1);
    });

    it('should be able to remove composites', () => {
        const a = new MockComposite();
        const list = new CompositeList(a);
        list.remove(a);
        expect(list.length).to.be.equal(0);
    });

    it('should spread time notification through composites', () => {
        const mock = new MockComposite();
        const list = new CompositeList(mock);
        countdown.addTimeElapsedListener(list);
        countdown.start();
        clock.passTime(Time.fromSeconds(2));
        expect(mock.elapsed).to.deep.equal(Time.fromSeconds(2));
    });

});