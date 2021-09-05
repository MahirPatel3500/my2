var hockey,hockeyimg;
var line,line1,line2,line3,line2,line5,line6,line7,line8;
var stricker , strickerimg;
var paddle,paddle2,paddleimg,paddle2img;
var PLAY  = 1
var SERVE = 2
var END = 0
var score = 0
var score2 = 0

var gameState = SERVE
var gameover,gameoverImg;
var restart,restartImg;
var sb,sbimg;
function preload(){


  hockeyimg = loadImage("images.jpg");
  strickerimg = loadImage("stricker.png");
  paddleimg = loadImage("st.png")
  paddle2img = loadImage("st.png")
  gameoverImg = loadImage("game.png");
  restartImg = loadImage("restart.png");
  sbimg = loadImage("space.png");

  }

  
  

  function setup(){ 
  createCanvas(400,600);
 
  hockey = createSprite(200,300);
  hockey.addImage(hockeyimg)
  hockey.scale = 2.2
  
  sb = createSprite(200,300)
  sb.addImage(sbimg)
  sb.scale = 0.5
  sb.visible = true;


  line = createSprite(205,200,400,190)
  line.visible = false;
  line.debug = true;

  line1 = createSprite(1,300,18,590)
  line1.visible =false;

  line3 = createSprite(400,300,18,590)
  line3.visible = false;

  line4 = createSprite(70,10,160,10) 
  line4.visible = false; 

  line2 = createSprite(335,10,160,10)
  line2.visible = false;

  line5 = createSprite(70,595,160,10)
  line5.visible = false;
  
  line6 = createSprite(335,595,160,10)
  line6.visible = false;

  line7 = createSprite(200,600,200,10)
  line7.visible = false; 

  line8 = createSprite(200,5,200,10)
  line8.visible = false;

  gameover = createSprite(200,300)
  gameover.addImage(gameoverImg);
  gameover.scale = 0.7
  gameover.visible =false;

  restart = createSprite(200,350);
  restart.addImage(restartImg);
  restart.scale = 0.5
  restart.visible = false;


  stricker = createSprite(200,300,20,10)
  stricker.addImage(strickerimg)
  stricker.scale = 0.19
  stricker.visible = false ;
  
  
  paddle = createSprite(280,100,30,30)
  paddle.addImage(paddleimg)
  paddle.scale = 0.17 
  paddle.debug = false
  paddle.setCollider("circle",0,0,200);
  paddle.visible = false

  paddle2 = createSprite(200,500,30,30)
  paddle2.addImage(paddle2img)
  paddle2.scale = 0.17
  paddle2.debug =false
  paddle2.setCollider("circle",0,0,200);
  paddle2.visible = false

  }

function draw() {
  background(0);
  drawSprites();

  text(score2,20,320)
  text(score,20,290 )
  text.scale = 5

    paddle2.y = World.mouseY
    paddle2.x = World.mouseX

     paddle.x = stricker.x;

  
    if(gameState===SERVE){
      stricker.velocityX = 0
      stricker.velocityY = 0
      sb.visible = true;
      if(keyDown("space")){
        gameState = PLAY;
        stricker.velocityX = 0;
      stricker.velocityY = 9;
      paddle.visible = true;
      stricker.visible = true;
      paddle2.visible = true;
     
      }
      
    }
    
     if(gameState===PLAY){
      stricker.bounceOff(line1)
      stricker.bounceOff(line2)
      stricker.bounceOff(line3)
      stricker.bounceOff(line4)
      stricker.bounceOff(line5)
      stricker.bounceOff(line6)
      stricker.bounceOff(paddle)
      stricker.bounceOff(paddle2)
      paddle2.collide(line);
      sb.visible = false;

      if(stricker.isTouching(line7)){

        stricker = createSprite(200,300,20,10)
        stricker.addImage(strickerimg)
        stricker.scale = 0.19
        stricker.visible = false
         sb.vesible = true;
        gameState = SERVE
     
       score = score+=1
       if(score > 4){
         gameState = END

       }
       if(score > 0){
        sb.vesible = true;
       }
      }else if(stricker.isTouching(line8)){
        stricker = createSprite(200,300,20,10)
        stricker.addImage(strickerimg)
        stricker.scale = 0.19
        sb.
        gameState = SERVE
        
       score = score+=1
       if(score > 4){
         gameState = END
       }
     }
    
     }
    
     if(gameState===END){
       gameover.visible = true;
        restart.visible = true;
        paddle.visible = false;
        stricker.visible = false;
        paddle2.visible = false;
         
        if(mousePressedOver(restart)){
          reset();
        }
    }
      
  

    
  
  }
  function reset(){
    
    gameover.visible = false;
    restart.visible = false;
    score = 0
    score2 = 0
   gameState = SERVE
  }
