 class clock {
     constructor(cx, cy) {
         this.angle = 0.0;
         this.offsetW = windowWidth / 2;
         this.offsetH = windowHeight / 2;
         this.scalar = windowHeight;
         this.speed = 0.005;
         this.x = cx;
         this.y = cy;


     }


     display() {
         this.x = this.offsetW + cos(this.angle) * this.scalar;
         this.y = this.offsetH + sin(this.angle) * this.scalar;
         this.gradient = atan2(windowHeight / 2 - this.y, windowWidth - this.x);
        //  print(this.gradient);
        // (0, 1) = 1.57
        // (1, 0) = 0
        // (0, -1) = -1.57
        // (-1, -0) = -3.14
        // (-1, 0) = 3.14

         stroke(255);
         strokeWeight(5)
         this.timeline = line(width / 2, height / 2, this.x, this.y);
         this.angle += this.speed;
     }


 }