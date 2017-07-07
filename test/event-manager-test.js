import {expect} from 'chai';
import {EventManager} from '../src/event-manager';

describe('EventManager', () => {

    let manager;

    beforeEach(() => {
        manager = new EventManager();
    });

    it('should be able to add listeners', () => {
        manager.add(() => {});
        manager.add(() => {});
        manager.add({ callback() {} });
        manager.add({ callback() {} });
        manager.add({ callback() {} });
        expect(manager.listeners).to.have.lengthOf(5);
    });

    it('should be able to remove listeners', () => {
        const a = { callback() {} };
        const b = { callback() {} };
        const c = () => {};

        manager.add(a);
        manager.add(b);
        manager.add(c);
        expect(manager.listeners).to.have.lengthOf(3);

        manager.remove(listener => listener === b);
        manager.remove(listener => listener === b);
        expect(manager.listeners).to.have.lengthOf(2);

        manager.remove(listener => listener === a);
        expect(manager.listeners).to.have.lengthOf(1);

        manager.remove(listener => listener === c);
        expect(manager.listeners).to.be.empty;
    });

    it('should be able to notify listeners', () => {
        let a = 0;
        let b = 0;
        manager.add(value => a = value);
        manager.add({ onValueChange(value) { b = value; } });
        manager.notify('onValueChange', 1);
        expect(a).to.be.equal(1);
        expect(b).to.be.equal(1);
    });

});