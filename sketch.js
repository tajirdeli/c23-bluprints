const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var b1,b2,b3
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
     g1=new GROUND(200,380,400,20)
     b1=new BOX(200,310,20,20)
     b2=new BOX(100,310,30,30)
b3=new BOX(150,360,10,10)
    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(150,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    g1.display()
    b1.display()
    b2.display()
b3.display()
}