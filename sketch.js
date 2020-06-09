var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, player1, player2,player3,player4;
var player1image,player2,player3,player4,groundimage, trackimage;

function preload(){
player1image=loadImage("images/player1.png")
player2image=loadImage("images/player2.png")
player3image=loadImage("images/player3.png")
player4image=loadImage("images/player4.png")
groundimage=loadImage("images/ground.png")
trackimage=loadImage("images/track.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
    if(keyDown("space")&&player.y>=159) {
        player1.velocityY = -10;
      }
      player1.velocityY = player1.velocityY + 0.8
      if(keyDown("space")&&player2.y>=159) {
        player2.velocityY = -10;
      }
      player2.velocityY = player2.velocityY + 0.8
      if(keyDown("space")&&player3.y>=159) {
        player3.velocityY = -10;
      }
      player3.velocityY = player3.velocityY + 0.8
      if(keyDown("space")&&player4.y>=159) {
        player4.velocityY = -10;
      }
      player4.velocityY = player4.velocityY + 0.8

       if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
if (gameState===2) {
  game.end()
}

}

