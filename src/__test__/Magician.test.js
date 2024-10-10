import Magician from '../js/Magician';

describe('Magician', () => {
    it('should calculate attack correctly', () => {
        const magician = new Magician('Test', 100);
        magician.distance = 2;
        expect(magician.attack).toBe(90);
    });

    it('should calculate attack with stoned correctly', () => {
        const magician = new Magician('Test', 100);
        magician.distance = 2;
        magician.stoned = true;
        expect(magician.attack).toBe(85.5);
    });

    it('should set base attack correctly', () => {
        const magician = new Magician('Test', 100);
        magician.baseAttack = 150;
        expect(magician.baseAttack).toBe(150);
    });
});