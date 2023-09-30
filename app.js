class Tamagotchi {
    constructor(name, age = 0, hunger = 1, sleepiness = 1, boredom = 1) {
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }
    feeding() {
        this.hunger = this.hunger - 1
        updateMetrics(this)
        checkMetrics(this)
    }
    playing() {
        this.boredom = this.boredom - 1
        updateMetrics(this)
        checkMetrics(this)
    }
    sleeping() {
        this.sleepiness = this.sleepiness - 1
        updateMetrics(this)
        checkMetrics(this)
    }
    aging() {
        this.age = this.age + 1
        updateMetrics(this)
        checkMetrics(this)
    }
    getHungry() {
        this.hunger = this.hunger + 1
        updateMetrics(this)
        checkMetrics(this)
    }
    getBored() {
        this.boredom = this.boredom + 1
        updateMetrics(this)
        checkMetrics(this)
    }
    getSleepy() {
        this.sleepiness = this.sleepiness + 1
        updateMetrics(this)
        checkMetrics(this)
    }

}

function updateMetrics(obj) {
    document.querySelector('#age').innerHTML = `Age: ${obj.age}`;
    document.querySelector('#hunger').innerHTML = `Hunger: ${obj.hunger}`;
    document.querySelector('#sleepiness').innerHTML = `Sleepiness: ${obj.sleepiness}`;
    document.querySelector('#boredom').innerHTML = `Boredom: ${obj.boredom}`;
}
const myTamagotchi = new Tamagotchi("bubble")

setInterval(function(){
    myTamagotchi.getHungry()
    myTamagotchi.getSleepy()
  }, 20000)

setInterval(function(){
    myTamagotchi.aging();
    myTamagotchi.getBored();
  }, 30000)

  function checkMetrics(obj) {
    if ((obj.hunger === 10) ||
        (obj.boredom === 10) ||
        (obj.sleepiness === 10)) {
        alert('Your pet died!')
    }
}

const startBtn = document.querySelector('#startGame');
startBtn.addEventListener('submit', function(e){
    e.preventDefault();
    feedBtn.disabled = false;
    lightsBtn.disabled = false;
    playBtn.disabled = false;
})

const feedBtn = document.querySelector('#feed')
feedBtn.addEventListener('click', () => myTamagotchi.feeding());

const lightsBtn = document.querySelector('#lightsOff')
lightsBtn.addEventListener('click', () => myTamagotchi.sleeping());

const playBtn = document.querySelector('#play')
playBtn.addEventListener('click', () => myTamagotchi.playing());