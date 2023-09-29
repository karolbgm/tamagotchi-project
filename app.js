class Tamagotchi{
    constructor(name, age=0, hunger=1, sleepiness=1, boredom=1){
      this.name = name;
      this.age = age;
      this.hunger = hunger;
      this.sleepiness = sleepiness;
      this.boredom = boredom;
    }
}

const myTamagotchi = new Tamagotchi("bubble")