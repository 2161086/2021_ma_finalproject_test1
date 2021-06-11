let myBall = [];
let timeBar;
let n = 10;
let cx, cy;
// var balls, timesBar;

function setup() {
    createCanvas(800, 800);
    background(0);
    balls = Ball;
    for (let i = 0; i < n; i++) {
        myBall[i] = new Ball(random(200, 255), random(width), random(height), random(1, 3));
        // balls.bounce(times);
    }
    // balls.add(myBall);
    // times.add(clock)

    timeBar = new clock(cx, cy);
    // balls.collide(timeBar);
}

function draw() {
    background(0);
    for (let i = 0; i < n; i++) {
        myBall[i].move();
        myBall[i].display();
        myBall[i].gravity();
    }

    timeBar.display();

    
}