class Paper{
    constructor(x ,y ,radius ){

    
    var options = {
        restitustion:0.3,
        density:1.2,
        friction:0.5
    }
    this.paper = Bodies.circle(x,y,radius,options)
    World.add(world,this.paper)
    this.r = radius
}
    greenbin(){
        ellipseMode(CENTER)
 ellipse(this.paper.position.x,this.paper.position.y,this.r,this.r) 


}
}