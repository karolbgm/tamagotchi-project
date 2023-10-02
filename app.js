// class Tamagotchi {
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

const tamagotchi = {
    age: 0
}

const progressBar1 = document.querySelector('#hunger');
const progressBar2 = document.querySelector('#sleep');
const progressBar3 = document.querySelector('#bored');

const ageInterval = setInterval(function() {
    tamagotchi.age++;
    const age = document.querySelector('#age');
    const pet = document.querySelector('#petImg');
    age.innerHTML = `Age: ${tamagotchi.age}`;
    if (tamagotchi.age >= 4) {
        pet.src = 'img/gif3.gif';
    } else if (tamagotchi.age >= 2) {
        pet.src = 'img/gif2.gif';
    }
    // aging();
}, 3000);

// function aging(){
//     const pet = document.querySelector('#a')
//     if (tamagotchi.age >= 2){
//         pet.src = 'img/gif2.gif'
//     } else if (tamagotchi.age >= 4){
//         pet.src = 'img/gif3.gif'
//     }
// }

const interval1 = setInterval(function(){
    progressBar1.value++;
    progressBar2.value++;
}, 2200)

const interval2 = setInterval(function(){
    progressBar3.value++;;
  }, 2600)

  function checkMetrics() {
    if((progressBar1.value === 10) ||
    (progressBar2.value === 10) ||
    (progressBar3.value ===10)){
        feedBtn.disabled = true;
        lightsBtn.disabled = true;
        playBtn.disabled = true;
        alert('Your pet died!')
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(ageInterval)
    }
}

const feedBtn = document.querySelector('#feed');
feedBtn.addEventListener('click', () => { 
const progressBar = document.querySelector('#hunger');
progressBar.value--;
checkMetrics()
});

const lightsBtn = document.querySelector('#lightsOff');
lightsBtn.addEventListener('click', () => { 
const progressBar = document.querySelector('#sleep');
progressBar.value--;
checkMetrics()
});

const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', () => { 
const progressBar = document.querySelector('#bored');
progressBar.value--;
checkMetrics()
});

// const inputName = document.querySelector('#petName')

//  document.getElementById("startGame").addEventListener("click", function (event) {
//     const tamaName = inputName.value;
//     localStorage.setItem('tamaName', tamaName)
//     // Redirect to the main page (replace 'main.html' with your main page's URL)
//     window.location.href = "main.html";
// });

// if (tamaName){
//     const tamagotchiName = document.getElementById("tamagotchiName");
//     const petName = localStorage.getItem('tamaName')
//     tamagotchiName.innerHTML = petName;
// } 

// document.addEventListener("DOMContentLoaded", function () {
//     // Your code here
//     document.getElementById("startGame").addEventListener("click", function (event) {
//         const inputName = document.querySelector('#petName');
//         const tamaName = inputName.value;
        
//         if (tamaName) {
//             // Save tamaName to localStorage
//             localStorage.setItem('tamaName', tamaName);
    
//             // Redirect to the main page (replace 'main.html' with your main page's URL)
//             window.location.href = "main.html";
//         } else {
//             alert("Please enter a Tamagotchi name.");
//         }
//     });
    
//     // Check tamaName and update tamagotchiName on the main page
//     const tamaName = localStorage.getItem('tamaName');
//     if (tamaName) {
//         const tamagotchiName = document.getElementById("tamagotchiName");
//         tamagotchiName.innerHTML = tamaName;
//     }
// });
// document.getElementById("startGame").addEventListener("click", function (event) {
//     const inputName = document.querySelector('#petName');
//     const tamaName = inputName.value;
    
//     if (tamaName) {
//         // Save tamaName to localStorage
//         localStorage.setItem('tamaName', tamaName);

//         // Redirect to the main page (replace 'main.html' with your main page's URL)
//         window.location.href = "main.html";
//     } else {
//         alert("Please enter a Tamagotchi name.");
//     }
// });

// // Check tamaName and update tamagotchiName on the main page
// const tamaName = localStorage.getItem('tamaName');
// if (tamaName) {
//     const tamagotchiName = document.getElementById("tamagotchiName");
//     tamagotchiName.innerHTML = tamaName;
// }
