class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //  this.image= loadImage("block.png")
        World.add(world, this.body);
      }

      display(){

        var pos= this.body.position;
        var angle=this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          strokeWeight(4);
          rect(0, 0, this.width, this.height);

          this.Visiableity=this.Visiableity-5
          tint(255,this.Visiableity)
      
      

          pop();
        }
}