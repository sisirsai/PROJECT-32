class BLOCK {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,40,50,options);
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(color){
      if(this.body.speed<3){
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        fill(color);
        rect(0 , 0, 40, 50)
        pop();
      }else{
      World.remove(world,this.body);
      push();
      this.Visiblity -= 10;
      pop();
      }
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1000){
        score++;
      }
    }
    
  };
