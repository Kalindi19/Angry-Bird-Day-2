class Log extends Baseclass{
    constructor(x,y,height,angle){
       super(x,y,20,height,angle);
        Matter.Body.setAngle(this.body,angle);
        
        this.Image=loadImage("Images/wood2.png")
    }
}