//click on start/reset:
  //if playing:
    //reload page
  //if not playing:
    //set score to 0
    //show countdown
    //reduce time by 1 second every second
      //time left?
        //yes->continue
        //no->gameover
    //change button to reset
    //generate new Q and A

//click on answer box:
  //if playing:
    //correct?
      //yes
        //increase score by 1
        //show correct box for 1 second
        //generate new Q and A
      //no
        //show try again box for 1 second


var playing = false;
var score = 0;

function generate(){
  var randOne = (Math.floor(Math.random()*12)+1);
  var randTwo = (Math.floor(Math.random()*12)+1);
  var answer = randOne * randTwo;
  document.getElementById("question").innerHTML = (randOne+"x"+randTwo);
  var randOne = (Math.floor(Math.random()*144)+1).toString();
  var randTwo = (Math.floor(Math.random()*144)+1).toString();
  var randThree = (Math.floor(Math.random()*144)+1).toString();
  console.log("answer = " + answer);
  var randomBox = Math.floor(Math.random()*4)+1;

  switch(randomBox){
    case 1:
      document.getElementById("one").innerHTML = answer;
      document.getElementById("two").innerHTML = randOne;
      document.getElementById("three").innerHTML = randTwo;
      document.getElementById("four").innerHTML = randThree;
      window.correctBlock = document.getElementById("one");
      break;
    case 2:
      document.getElementById("two").innerHTML = answer;
      document.getElementById("three").innerHTML = randTwo;
      document.getElementById("four").innerHTML = randThree;
      document.getElementById("one").innerHTML = randOne;
      window.correctBlock = document.getElementById("two");
      break;
    case 3:
      document.getElementById("three").innerHTML = answer;
      document.getElementById("two").innerHTML = randTwo;
      document.getElementById("four").innerHTML = randThree;
      document.getElementById("one").innerHTML = randOne;
      window.correctBlock = document.getElementById("three");
      break;
    case 4:
      document.getElementById("four").innerHTML = answer;
      document.getElementById("two").innerHTML = randThree;
      document.getElementById("three").innerHTML = randTwo;
      document.getElementById("one").innerHTML = randOne;
      window.correctBlock = document.getElementById("four");
      break;
    defualt:
      console.log("switch error");
  }
}//end of function generate

function countDown(){

  action = setInterval(function(){
    if(timeRemaining > 0) timeRemaining -= 1;
    if(timeRemaining == 0) {
      document.getElementById("gameOver").style.display = 'block';
      document.getElementById("gameOver").innerHTML = ("GAME OVER!"+"<br/>"+"YOUR SCORE IS " + score);
      clearInterval(action);
    }
    document.getElementById("timeRemaining").innerHTML = ("Time remaining: " + timeRemaining);
  }, 1000);

}

document.getElementById("startReset").addEventListener('click',function(){
  if(!playing){
    playing = true;
    score = 0;
    timeRemaining = 60;
    document.getElementById("timeRemaining").style.display = 'block';
    document.getElementById("startReset").innerHTML = "Reset";
    generate();
    countDown();
  }
  else{
    location.reload();
  }
})

var boxes = document.getElementsByClassName("box");

for(var i = 0; i < boxes.length; i++){

  boxes[i].addEventListener('click', function(){

    if(this == window.correctBlock){

      score += 1;
      document.getElementById("score").innerHTML = "Score: " + score;

      document.getElementById("correct").style.display = "block";
      setTimeout(function(){
        document.getElementById("correct").style.display = "none";
      }, 1000);

      generate();
    }
    else{
      document.getElementById("wrong").style.display = 'block';
      setTimeout(function(){
        document.getElementById("wrong").style.display = 'none';
      },1000);
    }
  })
}
