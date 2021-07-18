class Dustbin {
  constructor(x, y) {
    var options = {
       isStatic:true
    }
    this.image=loadImage("dustbin.png");
    //this.body = Bodies.rectangle(x, y, width, height, options);
    this.dustbinWidth = 200;
    this.x=x; this.y=y;
    this.dustbinHeight = 213;
    this.wallThickness = 20;
    this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
     this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
      this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
    World.add(world, this.bottomBody);
    World.add(world, this.leftWallBody);
    World.add(world, this.rightWallBody);
  }
  display(){
    var posbottom =this.bottomBody.position;
    var posLeft =this.leftWallBody.position;
    var posRight =this.rightWallBody.position;
    //var angle = this.body.angle;
    push();
    translate(posbottom.x, posbottom.y);
    angleMode(RADIANS);
    imageMode(CENTER);
    fill(255);
    image(this.image,0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
    pop();

    push()
     translate(posLeft.x, posLeft.y);
      rectMode(CENTER) 
      //strokeWeight(4);
       angleMode(RADIANS)
       fill(255)
        rotate(this.angle)
         //rect(0,0,this.wallThickness, this.dustbinHeight);
          pop()
           push()
            translate(posRight.x, posRight.y);
             rectMode(CENTER)
              //strokeWeight(4);
               angleMode(RADIANS)
                fill(255) 
                rotate(-1*this.angle)
                 //rect(0,0,this.wallThickness, this.dustbinHeight); 
                 pop()
  }
};