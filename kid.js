class Kid{
    constructor(x,y,width,height){
       var options = {
           isStatic:true
       }
       this.image = loadImage("boy.png")
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.x=x;
       this.y=y
       this.width = width;
       this.height = height;
       World.add(world,this.body)

    }

    display(){
     var kidpos = this.body.position ;
     push();
     translate(kidpos.x,kidpos.y);
     imageMode(CENTER)
     //rectMode(CENTER);
     //fill(226,232,987);
     //rect(0,0,this.width,this.height)
     image(this.image,0,0,this.width,this.height)
     pop();

    }
}