var player, wormGroup, score, bg, bgImg, playerImg, wormImg, edges;
function preload() {
  bgImg = loadImage("https://i.ibb.co/Jzz1KDS/5-2-space-png-pic.png");
  playerImg = loadImage("https://i.ibb.co/pnHPf9w/spaceship.png");
  wormImg = loadImage("https://i.ibb.co/yqQ5tth/Worms.png");
}
function setup() {
  bg = createSprite(300, 300, 600, 600);
  bg.addImage(bgImg);
  player = createSprite(0, 0, 30, 30);
  player.addImage(playerImg);
  createCanvas(600, 600);
  wormGroup = new Group();
  score = 0;
  player.scale = 0.125;
  edges = createEdgeSprites()
}
function draw() {
  background("black");
  player.x = mouseX;
  player.y = mouseY;

  worms();
  for (var i = 0; i < wormGroup.length; i++) {
    var temp = wormGroup.get(i);
    if (
      temp.isTouching(edges[0]) ||
      temp.isTouching(edges[1]) ||
      temp.isTouching(edges[2]) ||
      temp.isTouching(edges[3])
    ) {
      if (score>0){
      score -= 1;
      }
      temp.destroy()
      temp = null
    }
    if (temp!=null){
    if (player.isTouching(temp)) {
      score++;
      temp.destroy();
      temp = null;
    }
  }
  }
  drawSprites();

  textSize(25);
  fill("pink");
  text("SCORE: " + score, 400, 50);
}

function worms() {
  if (frameCount % 25 == 0) {
    var worm = createSprite(
      random(150, 450),
      random(150, 450),
      random(40, 80),
      5
    );
    worm.addImage(wormImg);
    worm.scale = 0.1;
    wormGroup.add(worm);
    worm.shapeColor = "green";
    worm.velocityX = random(random(-10, -5), random(5, 10));
    worm.velocityY = random(random(-10, -5), random(5, 10));
  }
}
