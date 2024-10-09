import Daemon from '../js/Deamon';

describe('Daemon', () => {
      it('should calculate attack correctly', () => {
            const daemon = new Daemon('Test', 100);
            daemon.distance = 2;
            expect(daemon.attack).toBe(90);
      });

      it('should calculate attack with stoned correctly', () => {
            const daemon = new Daemon('Test', 100);
            daemon.distance = 2;
            daemon.stoned = true;
            expect(daemon.attack).toBe(85.5);
      });

      it('should set base attack correctly', () => {
            const daemon = new Daemon('Test', 100);
            daemon.baseAttack = 150;
            expect(daemon.baseAttack).toBe(150);
      });
});