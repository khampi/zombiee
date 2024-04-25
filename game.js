// Iteration 1: Declare variables required for this game
const zombies =['assets/zombie-1.png',
'assets/zombie-2.png',
'assets/zombie-3.png',
'assets/zombie-4.png',
'assets/zombie-5.png',
'assets/zombie-6.png',
]
// Iteration 1.2: Add shotgun sound
var shotgunsound = new Audio('assets/shotgun.wav');

// Iteration 1.3: Add background sound
var bgsound = new Audio('assets/bgm.mp3');

// Iteration 1.4: Add lives
let lives = 3;

// Iteration 2: Write a function to make a zombie
function createZombie(){
    let index = Math.floor(Math.random() * zombies.length);
   
    const zombie = document.createElement('img');
    zombie.src=zombies[index];
    zombie.classList.add('zombie');
    
    document.getElementById("game-body").appendChild(zombie);
    moveZombie(zombie);
    
}



// Iteration 3: Write a function to check if the player missed a zombie

function checkMiss(zombie){
    if(zombie.offsetTop > window.innerHeight){
        lives--;
        updateLives();
        zombie.remove();
    }
}
// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function destroyZombie(zombie){
    zombie.onclick() = function(){
        shotgunsound.play();
        zombie.remove();
    }
}
    


// Iteration 5: Creating timer
let n=60;
setInterval(function(){
    document.getElementById("timer").innerHTML = n;
    n--;
    if(n<0){
        clearInterval();
        window.open("game-over.html","_self");
    }
},1000);

// Iteration 6: Write a code to start the game by calling the first zombie
function startGame(){
    bgsound.play();
    spawnZombies();
}

// Iteration 7: Write the helper function to get random integer
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min+1))+min;
}

function updateLives(){
    document.getElementById("lives").innerHTML = lives;
    if(lives == 0){
        gameOver();
    }
}

function moveZombie(zombie){
    const  speed =1;
    const moveInterval = setInterval(function(){
        const currentBottom = parseInt(zombie.style.bottom)||0;
        zombie.style.bottom = currentBottom+speed+"px";

        if(currentTop > window.innerHeight){
            clearInterval(moveInterval);;
            checkMiss(zombie);
           
        }
    },4)
}

function spawnZombies() {
    setInterval(() => {
        createZombie();
    }, 2000); 
}



startGame();

