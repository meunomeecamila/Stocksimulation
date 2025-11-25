var dog, sadDog, happyDog, database;
var foodS, foodStock;
var addFood;
var foodObj;
var feed, lastFed;

function preload() {
  sadDog = loadImage("Dog.png");
  happyDog = loadImage("happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000, 400);

  foodObj = new Food();

  // Lê o estoque inicial no Firebase
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  // Lê o último horário de alimentação
  let fedRef = database.ref('FeedTime');
  fedRef.on("value", function (data) {
    lastFed = data.val();
  });

  dog = createSprite(800, 200, 150, 150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  // Botão de alimentar
  feed = createButton("Feed the dog");
  feed.position(900, 85);
  feed.mousePressed(feedDog);

  // Botão de adicionar comida
  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);
}

function draw() {
  background(46, 139, 87);
  foodObj.display();

  fill(255);
  textSize(20);

  // Exibe o horário da última refeição
  if (lastFed !== undefined) {
    if (lastFed >= 12) {
      text("Last Feed: " + (lastFed % 12) + " PM", 50, 30);
    } else if (lastFed === 0) {
      text("Last Feed: 12 AM", 50, 30);
    } else {
      text("Last Feed: " + lastFed + " AM", 50, 30);
    }
  }

  drawSprites();
}

// Lê o valor de Food no banco
function readStock(data) {
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}

// Alimenta o cachorro
function feedDog() {
  dog.addImage(happyDog);

  let currentStock = foodObj.getFoodStock();

  if (currentStock > 0) {
    currentStock -= 1;
    foodObj.updateFoodStock(currentStock);

    // Atualiza o estoque no Firebase
    database.ref('/').update({
      Food: currentStock,
      FeedTime: hour() // salva horário correto
    });
  }
}

// Adiciona comida ao estoque
function addFoods() {
  foodS++;
  database.ref('/').update({
    Food: foodS
  });
}
