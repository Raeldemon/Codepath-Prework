/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Start");

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//Global constants 
  
  
  const nextClueWaitTime = 1000; //how long to wait before starting the playback of the clue sequence
  

//Global variables 

  var cluePauseTime = 200; // how long to pause in between clues
  var clueHoldTime = 600; //how long to hold a clue's light/sound
  
  var pattern = [1,1,1,1,1,1];
  var progress = 0;
  var gamePlaying = false;
  var tonePlaying = false;
  var volume = 0.1; // Must be between 0.0 and 1.0
  var guessCounter ;

  var lives = 0;
  var time = 2;
  var timer;

function startGame(){
  //initialize game variables
  progress = 2;
  lives = 2;
  time = 2;
  gamePlaying = true;
  updateLives(lives);
  //swap the Start and End Buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("endBtn").classList.remove("hidden");
  
  ramdomSequnce();
  playClueSequence();
  timer = setInterval(clock,1000);
}

function stopGame(){
  //stop game 
  gamePlaying = false;
  //swap the Start and End Buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("endBtn").classList.add("hidden");
}

//Lit and clear button with JavaScript
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//Clue System Functions
function playSingleClue(btn){
  time = 2;
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume();
  updateLives(lives);
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime = clueHoldTime - 50; //decreases the duration of clues
  cluePauseTime = cluePauseTime - 10; 
}

//Random sequence cretion
function ramdomSequnce(){
  for (let i = 0; i <= 6; i++){
    pattern[i] = Math.floor(1 + Math.random() * 4);
    console.log(pattern[i]);
  }
  
}


//Game Mechanics
function loseGame(){
  stopGame();
  alert("Game Over. you have lost");
}

function winGame(){
  stopGame();
  alert("Congratulations, you have won");
}

function guess(btn){
  time = 2;
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;}
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    if(lives == 0){
      loseGame(); //GAME OVER: LOSE!
    }
    else{
      lives -= 1;
      playClueSequence();
    }
  }
}
//Live updatind fuction
function updateLives(lives){
  document.getElementById("livesText").innerHTML=("Lives : " + lives);
}

//Time clock fuction
function clock(){
  
    if(time < 1){
      document.getElementById("timeText").innerHTML=("Time : " + time + " s");
      time = 3;
      loseGame();
    }else{
      document.getElementById("timeText").innerHTML=("Time : " + time + " s");
    }
      time -= 1;
  
  console.log(time);
}


// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 300,
  3: 400,
  4: 500
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

