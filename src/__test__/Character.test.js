import Character from '../js/Character';

describe('Character', () => {
    it('should calculate attack correctly', () => {
        const character = new Character('Test', 100);
        character.distance = 2;
        expect(character.attack).toBe(90);
    });

    it('should calculate attack with stoned correctly', () => {
        const character = new Character('Test', 100);
        character.distance = 2;
        character.stoned = true;
        expect(character.attack).toBe(85.5);
    });

    it('should set base attack correctly', () => {
        const character = new Character('Test', 100);
        character.baseAttack = 150;
        expect(character.baseAttack).toBe(150);
    });
});