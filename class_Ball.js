class Ball {
    constructor(tempC, tempXpos, tempYpos, tempSpeed) {
        this.c = tempC;
        this.xpos = tempXpos;
        this.ypos = tempYpos;
        this.yspeed = tempSpeed;
        this.s = 20;
        // fill(random(255),random(255),random(255));
    }

    display() {
        noStroke();
        ellipse(this.xpos, this.ypos, this.s);

    }

    move() {
        this.ypos = this.ypos + this.yspeed;

        if (this.ypos > width) {
            this.ypos = 0;
            this.xpos = random(width);
        }
        if (this.ypos < 0) {
            this.ypos = width;
        }
    }

    gravity() {
        if (this.xpos == cx && this.ypos == cy) {
            this.xpos = 0;
            this.ypos = 0;
        }
    }
}