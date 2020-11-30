class ground_maker
{
  constructor(x, y, w, h)
  {
    var doomguy ={isStatic : true}
    this.bodies_2 = bodies.rectangle(x, y, w, h, doomguy)
    this.w = w
    this.h = h
    world.add(world_2, this.bodies_2)
  } 
display()
{
    var pos = this.bodies_2.position;
    rect(pos.x, pos.y, this.w, this.h);
}
}
