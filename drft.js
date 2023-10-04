//class Tamagotchi {
//     constructor(name, age = 0, hunger = 1, sleepiness = 1, boredom = 1) {
//         this.name = name;
//         this.age = age;
//         this.hunger = hunger;
//         this.sleepiness = sleepiness;
//         this.boredom = boredom;
//     }
//     feeding() {
//         this.hunger = this.hunger - 1
//     }
//     playing() {
//         this.boredom = this.boredom - 1
//     }
//     sleeping() {
//         this.sleepiness = this.sleepiness - 1
//     }
//     aging() {
//         this.age = this.age + 1
//     }
//     getHungry() {
//         this.hunger = this.hunger + 1
//     }
//     getBored() {
//         this.boredom = this.boredom + 1
//     }
//     getSleepy() {
//         this.sleepiness = this.sleepiness + 1
//     }
// }
// const myTamagotchi = new Tamagotchi("bubble")
// const tamagotchi = {
//     age: 0
// }
// const progressBar1 = document.querySelector('#hunger');
// const progressBar2 = document.querySelector('#sleep');
// const progressBar3 = document.querySelector('#bored');
// const ageInterval = setInterval(function () {
//     tamagotchi.age++;
//     const age = document.querySelector('#age');
    
//     age.innerHTML = `Age: ${tamagotchi.age}`;
    
//     if (tamagotchi.age === 4) {
//         alert(`${petName} is evolving!`)
//         const pet = document.querySelector('.teen');
//         pet.src = 'img/gif3.gif';
//         pet.classList.remove('teen')
//         pet.classList.add('adult')
//     } else if (tamagotchi.age === 2) {
//         alert(`${petName} is evolving!`)
//         const pet = document.querySelector('.petImg');
//         pet.src = 'img/gif2.gif';
//         pet.classList.remove('petImg')
//         pet.classList.add('teen')
//     }
// }, 3000);
// const hungerInterval = setInterval(function () {
//     progressBar1.value++;
// }, 2200)
// let awakeInterval = setInterval(function () {
//     progressBar2.value++;
// }, 2200)
// const boredInterval = setInterval(function () {
//     progressBar3.value++;
// }, 2600)
// function checkMetrics() {
//     if ((progressBar1.value === 10) ||
//         (progressBar2.value === 10) ||
//         (progressBar3.value === 10)) {
//         feedBtn.disabled = true;
//         lightsBtn.disabled = true;
//         playBtn.disabled = true;
//         clearInterval(hungerInterval)
//         clearInterval(awakeInterval)
//         clearInterval(boredInterval)
//         clearInterval(ageInterval)
//         window.location.href = "game-over.html";
//     }
// }
// const html = document.querySelector('html');
// let sleepInterval; // Declare sleepInterval outside of the if block
// function runSleep() {
//     if (html.classList.contains('image-overlay')) {
//         feedBtn.disabled = true;
//         playBtn.disabled = true;
//         clearInterval(awakeInterval);
//         sleepInterval = setInterval(function () {
//             progressBar2.value--;
//             if (progressBar2.value === 0) {
//                 clearInterval(sleepInterval);
//             }
//         }, 1000);
//     } else {
//         clearInterval(sleepInterval); // Clear the interval if it exists
//         startAwakeInterval();
//         feedBtn.disabled = false;
//         playBtn.disabled = false;
//     }
// }
// function startAwakeInterval() {
//     clearInterval(awakeInterval);
//     awakeInterval = setInterval(function () {
//         progressBar2.value++;
//     }, 2200);
// }
// const feedBtn = document.querySelector('#feed');
// feedBtn.addEventListener('click', () => {
//     progressBar1.value--;
//     checkMetrics()
//     // Restore the original background image
//     const body = document.body;
//     body.style.backgroundImage = 'url(img/newimg.jpg)';
// });
// const lightsBtn = document.querySelector('#lightsOff');
// lightsBtn.addEventListener('click', () => {
//     // const html = document.querySelector('html');
//     html.classList.toggle('image-overlay');
//     // Restore the original background image
//     const body = document.body;
//     body.style.backgroundImage = 'url(img/newimg.jpg)';
//     runSleep()
//     checkMetrics()
//     // Restore the original background image
//     // const body = document.body;
//     // body.style.backgroundImage = 'url(img/newimg.jpg)';
// });
// const playBtn = document.querySelector('#play');
// playBtn.addEventListener('click', () => {
//     const body = document.body
//     body.style.backgroundImage = 'url(img/outsidef.jpg)'
//     progressBar3.value--;
//     checkMetrics()
// });
// // // Check tamaName and update tamagotchiName on the main page
// const petName = localStorage.getItem('tamagotchiName');
// if (petName) {
//     const tamagotchi = document.getElementById("tamagotchi");
//     tamagotchi.innerHTML = petName;
// }





// new

// const tamagotchi = {
//     age: 0,
//     feeding: () => {
//         progressBar1.value--;
//         checkMetrics()
//         // Restore the original background image
//         const body = document.body;
//         body.style.backgroundImage = 'url(img/newimg.jpg)';
//     }
// }
// const progressBar1 = document.querySelector('#hunger');
// const progressBar2 = document.querySelector('#sleep');
// const progressBar3 = document.querySelector('#bored');
// const ageInterval = setInterval(function () {
//     tamagotchi.age++;
//     const age = document.querySelector('#age');
    
//     age.innerHTML = `Age: ${tamagotchi.age}`;
    
//     if (tamagotchi.age === 4) {
//         alert(`${petName} is evolving!`)
//         const pet = document.querySelector('.teen');
//         pet.src = 'img/gif3.gif';
//         pet.classList.remove('teen')
//         pet.classList.add('adult')
//     } else if (tamagotchi.age === 2) {
//         alert(`${petName} is evolving!`)
//         const pet = document.querySelector('.petImg');
//         pet.src = 'img/gif2.gif';
//         pet.classList.remove('petImg')
//         pet.classList.add('teen')
//     }
// }, 3000);
// const hungerInterval = setInterval(function () {
//     progressBar1.value++;
// }, 2200)
// let awakeInterval = setInterval(function () {
//     progressBar2.value++;
// }, 2200)
// const boredInterval = setInterval(function () {
//     progressBar3.value++;
// }, 2600)
// function checkMetrics() {
//     if ((progressBar1.value === 10) ||
//         (progressBar2.value === 10) ||
//         (progressBar3.value === 10)) {
//         feedBtn.disabled = true;
//         lightsBtn.disabled = true;
//         playBtn.disabled = true;
//         clearInterval(hungerInterval)
//         clearInterval(awakeInterval)
//         clearInterval(boredInterval)
//         clearInterval(ageInterval)
//         window.location.href = "game-over.html";
//     }
// }
// const html = document.querySelector('html');
// let sleepInterval; // Declare sleepInterval outside of the if block
// function runSleep() {
//     if (html.classList.contains('image-overlay')) {
//         feedBtn.disabled = true;
//         playBtn.disabled = true;
//         clearInterval(awakeInterval);
//         sleepInterval = setInterval(function () {
//             progressBar2.value--;
//             if (progressBar2.value === 0) {
//                 clearInterval(sleepInterval);
//             }
//         }, 1000);
//     } else {
//         clearInterval(sleepInterval); // Clear the interval if it exists
//         startAwakeInterval();
//         feedBtn.disabled = false;
//         playBtn.disabled = false;
//     }
// }
// function startAwakeInterval() {
//     clearInterval(awakeInterval);
//     awakeInterval = setInterval(function () {
//         progressBar2.value++;
//     }, 2200);
// }
// const feedBtn = document.querySelector('#feed');
// feedBtn.addEventListener('click', () => {
//     tamagotchi.feeding();
//     // progressBar1.value--;
//     // checkMetrics()
//     // // Restore the original background image
//     // const body = document.body;
//     // body.style.backgroundImage = 'url(img/newimg.jpg)';
// });
// const lightsBtn = document.querySelector('#lightsOff');
// lightsBtn.addEventListener('click', () => {
//     // const html = document.querySelector('html');
//     html.classList.toggle('image-overlay');
//     // Restore the original background image
//     const body = document.body;
//     body.style.backgroundImage = 'url(img/newimg.jpg)';
//     runSleep()
//     checkMetrics()
//     // Restore the original background image
//     // const body = document.body;
//     // body.style.backgroundImage = 'url(img/newimg.jpg)';
// });
// const playBtn = document.querySelector('#play');
// playBtn.addEventListener('click', () => {
//     const body = document.body
//     body.style.backgroundImage = 'url(img/outsidef.jpg)'
//     progressBar3.value--;
//     checkMetrics()
// });
// // // Check tamaName and update tamagotchiName on the main page
// const petName = localStorage.getItem('tamagotchiName');
// if (petName) {
//     const tamagotchi = document.getElementById("tamagotchi");
//     tamagotchi.innerHTML = petName;
// }