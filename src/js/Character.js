class Character {
      constructor(name, baseAttack) {
            this.name = name;
            this._baseAttack = baseAttack;
            this.stoned = false;
            this.distance = 1; // default distance
      }

      get attack() {
            let attack = this._baseAttack;
            if (this.stoned) {
                  attack -= Math.log2(this.distance) * 5;
            }
            return Math.max(attack * this.getAttackMultiplier(), 0);
      }

      set stoned(value) {
            this._stoned = value;
      }

      get stoned() {
            return this._stoned;
      }

      set baseAttack(value) {
            this._baseAttack = value;
      }

      get baseAttack() {
            return this._baseAttack;
      }

      getAttackMultiplier() {
            return 1 - (this.distance - 1) * 0.1;
      }
}

export default Character;