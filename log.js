class log_class
{
    constructor(x, y, h, angle)
    {
        var options = {restitution: 0.8,
        friction:0.3, density:1}
        this.bodies_2 = bodies.rectangle(x, y, 20, h, options)
        this.width = h;
        this.height = 20;
        Matter.Body.setAngle (this.bodies_2, angle)
        world.add(world_2, this.bodies_2)
    }
    display()
    {
        var pos_2 = this.bodies_2.position;
        var angle = this.bodies_2.angle ;
        push();
        rotate(angle)
        rectMode(CENTER)
        translate(pos_2.x, pos_2.y)
        rect(0, 0, this.width, this.height) 
        pop();
    }
}