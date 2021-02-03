class Block{
    constructor(x,y,width,height){
var options={
isStatic:true
}
this.body=Body.rectangle(x,y,width,height);
this.width=width;
this.height=height;
World.add(world,this,body);
}

display(color){
var pos=this.body.position;
rectMode(CENTER);
fill(color);
rect(pos.x,pos.y,thiis.width,this.height);
}
}