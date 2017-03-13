window.addEventListener('load',function(){
  
  
  var snow = [];
  
  
  var GAME_WIDTH = 1280;
  var GAME_HEIGHT = 720;
  
  
  var canvas = document.getElementById("theCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle="white";
  
  
  ctx.globalAlpha = 1;
  
  var distance="1-5";
  var snowHeight = 0;
  var snowWidth = 0;
  
  function step(){
    
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    
    
      var snowCoord = Math.floor(Math.random()*(GAME_WIDTH+150));
      snow.push({x:snowCoord-200, y:-20, d:Math.random()*3+1});
    
    
      var snowCoord = Math.floor(Math.random()*(GAME_WIDTH+150));
      snow.push({x:snowCoord-200, y:-20, d:Math.random()*3+1});
    
    
      var snowCoord = Math.floor(Math.random()*(GAME_WIDTH+150));
      snow.push({x:snowCoord-200, y:-20, d:Math.random()*3+1});
      
      
    for(var i in snow){
        snow[i].y += snow[i].d;
        snow[i].x += 0.3 * snow[i].d;
        if(snow[i].y > GAME_HEIGHT) snow.splice(i, 1);
    }
    
    for(var i in snow){
        ctx.fillRect(snow[i].x, snow[i].y, snow[i].d * 2, snow[i].d * 2);
    }
    
    
    window.requestAnimationFrame(step);
  }//step
  
  step();
});
