

class Paper 
 
{
    constructor(x,y,radius)
    {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.body = Matter.Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        this.x2 = x;
        this.y2 = y;
        //this.image = loadImage("Crumpled Paper Image.png");
        this.image2 = loadImage("paperImage.png");
        World.add(world, this.body);
    }

    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y,this.angle);
        //circle(0,0,this.radius);
        image(this.image2,this.x2,this.y2,50,50);
        pop();
    }

}