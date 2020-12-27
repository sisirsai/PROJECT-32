
class POLYGON{
    constructor(x, y, r) {
        var options = {
            'friction':1.0,
           //'density':0.5,
            isStatic: false
        }
       
        this.r = r;
        this.x = x;
        this.y = y;
        this.image = loadImage("polygon.png");
       this.body = Bodies.circle(this.x, this.y,this.r, options);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
  
        //ellipseMode(RADIUS);
        imageMode(CENTER);
        ellipseMode(CENTER);
  
        image(this.image, 0, 0,this.r,this.r);
        pop();
      }
  }