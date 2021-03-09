class Baseclass{
    constructor(x,y,width,height,angle){
        var option={
            restitution : 0.8,
            friction : 1.5,
            density : 1.5,
        };
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.Image=loadImage("Images/base.png");
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.Image,0,0,this.width,this.height);
        pop();
    }
}