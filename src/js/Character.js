class Character {
      constructor(name, baseAttack) {
            this.name = name;
            this.baseAttack = baseAttack;
            this.stoned = false;
            this.distance = 1; // default distance
        
    }
    
      get attack() {
            let attack = this.baseAttack;
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
    
      getAttackMultiplier() {
            return 1 - (this.distance - 1) * 0.1;
        
    }
    
}

export default Character;