class Iron{
    constructor(x,y){
        var options={
           restitution:0.8,
           friction:3,
           density:30

        }
        
        this.bodies=Bodies.rectangle(x,y,50,50,options);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        var ironpos=this.body.position;
        push();
        translate(ironpos.x,ironpos.y);
        strokeWeight(3);
        stroke('white')
        fill('orange')
        rectMode(CENTER)
        rect(this.x,this.y,0,0);
        pop();

    }

}