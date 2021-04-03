class Ball {
    constructor(x,y,width,height){
      var options={
       
          'density':1+3,
          'frictionAir':0.005
        
      }

      this.body=Bodies.rectangle(x,y,width,height)
      this.width=width
      this.height=height

     World.add(world,this.body)
}

display(){

    push()
  var pos=this.body.position

  fill("red")
  ellipseMode(CENTER)
  ellipse(pos.x,pos.y,this.width,this.height)

  pop()
}
}