class Mango {

    constructor(x, y, r){
        var paper_options={
            isStatic: true,
           restitution: 0,
           friction:1
        }
        
        this.x=x
        this.y=y
        this.r=r
        this.body = Bodies.circle (this.x,this.y,this.r/2,paper_options);
        this.img=loadImage("sprites/mango.png");
        World.add(myWorld, this.body);
    }

    
    display () {
        image(this.img , this.x,this.y, 60,60); 
    }
}