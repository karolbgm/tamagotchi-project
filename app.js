class Tamagotchi {
    constructor(name, age = 0, hunger = 1, sleepiness = 1, boredom = 1) {
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }
    feeding() {
        return this.hunger - 1
        checkMetrics()
    }
    playing() {
        return this.boredom - 1
        checkMetrics()
    }
    sleeping() {
        return this.sleepiness - 1
        checkMetrics()
    }
    aging() {
        return this.age + 1
        checkMetrics()
    }
    hunger() {
        return this.hunger + 1
        checkMetrics()
    }
    boredom() {
        return this.boredom + 1
        checkMetrics()
    }
    sleepiness() {
        return this.sleepiness + 1
        checkMetrics()
    }

}

const myTamagotchi = new Tamagotchi("bubble")

function checkMetrics() {
    if ((this.hunger === 10) ||
        (this.boredom === 10) ||
        (this.sleepiness === 10)) {
        return 'Your pet died!'
    }
}