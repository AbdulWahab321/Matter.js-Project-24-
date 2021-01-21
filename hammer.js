class Hammer {
    constructor(x, y,width,height,angle) {
      var options = {
          'restitution':0.5,
          'friction':2.0,
          'density':2
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = 100;
      this.height = 20;
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);   
      rectMode(CENTER);
      strokeWeight(4)
      stroke("orange")
      fill("orange");
      rect(0,0, this.width, this.height);
      
      pop();
    }
  };