var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var Bg
var form, player, game;

var characters, blue, green, red, orange, cyan, white, black, lime, yellow, purple, brown
var Bg

function preload(){
 bg1 = loadAnimation("BG Start/1.jpg", "2.jpg" , "3.jpg" , "4.jpg" , "5.jpg" , "6.jpg" , "7.jpg" , "8.jpg" , "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg", "57.jpg", "58.jpg", "59.jpg", "60.jpg", "61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpg", "66.jpg", "67.jpg", "68.jpg", "69.jpg", "70.jpg", "71.jpg", "72.jpg", "73.jpg", "74.jpg", "75.jpg", "76.jpg", "77.jpg", "78.jpg", "79.jpg", "80.jpg", "81.jpg", "82.jpg", "83.jpg", "84.jpg", "85.jpg", "86.jpg", "87.jpg", "88.jpg", "89.jpg", "90.jpg", "91.jpg", "92.jpg", "93.jpg", "94.jpg", "95.jpg", "96.jpg", "97.jpg", "98.jpg", "99.jpg", "100.jpg")
 
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-230);
    game = new Game()
    game.start()
    blue = createSprite(100,200);
    blue.shapeColor = "blue"

    Bg = createSprite(0,0)
    Bg.addAnimation(bg1)
 
    green = createSprite(300,200);
    green.shapeColor = "green"
    

    red = createSprite(700,200);
    red.shapeColor = "red"
   
    orange = createSprite(700,200);
    orange.shapeColor = "orange"
   
    characters = [blue, green, red, orange];
  
 
}


function draw(){
  console.log(playerCount)
  if (gameState === 0){
    background(Bg)
  }
  if(gameState === 1){
    clear();
   
  }
  if(gameState === 2){

  }
  form.display();
}