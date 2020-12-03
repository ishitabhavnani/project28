class Ball {

    constructor(x, y, r){
        var paper_options={
            isStatic: false,
           restitution: 0,
           friction:1,
           density:1.2
        }
        //define all the Box properties here
        this.x=x
        this.y=y
        this.r=r
        this.body = Bodies.circle (this.x,this.y,this.r/2,paper_options);
        this.img=loadImage("sprites/stone.png");
        World.add(myWorld, this.body);
    }

    //define all the Box functions here
    display () {
        image(this.img , 15,500,70,70 )
    }
}