class Sand {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y,60,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);   
      ellipseMode(CENTER);
      strokeWeight(4)
      stroke("brown")
      fill("brown");
      ellipse(56,46,10,10,85);
      
      pop();
    }
  };