class Garbage
{
   
   constructor() 
   {
      var options =
      {
         isStatic:true
      }
       this.body = Bodies.rectangle(730,525,150,10,options);
       this.body2 = Bodies.rectangle(890,600,10,300,options);
       this.body3 = Bodies.rectangle(1050,525,150,10,options);
       //this.width = width;
       //this.height = height;
       this.image = loadImage("garbageCan.png"); 
       World.add(world,this.body);
       World.add(world,this.body2);
       World.add(world,this.body3);
    }
       display()
       {
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rect(480,525,150,10);
        imageMode(CENTER);
        image(this.image, 0, 0, 150, 150);
        pop();

        push();
        translate(this.body2.position.x, this.body2.position.y);
        rect(640,600,10,300);
        pop();

        push();
        translate(this.body3.position.x, this.body3.position.y);
        rect(800,525,150,10);
        pop();
       }
       
   
}

