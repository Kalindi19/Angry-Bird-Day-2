class Ground{
    constructor(x,y,width,height){
        var option={isStatic:true}
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.Image=loadImage("Images/base.png");
    }
    display(){
        var pos=this.body.position;
        image(this.Image,0,pos.y,this.width);
    }
}