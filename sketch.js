const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var tanker;
var angle = 0
var canonBall;
var shot;
var ground;
var ball_1, ball_2, ball_3
var launcherX, launcherY;
var flag = "start"

function setup() {
    var canvas = createCanvas(800, 500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height - 10, width, 30);
    tanker = new Tanker(75, height - 110, 60, 30);

    ball_1 = new Ball(400, 100, 40)
    ball_2 = new Ball(500, 80, 40)
    ball_3 = new Ball(600, 180, 40)

    canonBall = new CanonBall(100, 100);


    shot = new ShootBall(canonBall.body, { x: 100, y: height - 280 });
}

function draw() {
    background(155)
    Matter.Engine.update(engine);
    ground.display()
    ball_2.display()
    ball_1.display()
    ball_3.display();
    canonBall.display();
    tanker.display();
    shot.display();
    if (keyIsDown(DOWN_ARROW)) {
        shot.attach(canonBall.body)
    }
}


function keyReleased() {
    if (keyCode === UP_ARROW) {
        flag = "launch"

        shot.shoot()
    }
}