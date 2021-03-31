class ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.0,
          

      }
      this.body=Matter.Bodies.circle(x,y,radius,options)
      this.image=loadImage("paper.png");
      this.width = width;
      this.height = height;
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image,0, 0, this.radius);
      pop();
    }
  };