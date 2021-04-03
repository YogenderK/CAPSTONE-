class Box {
    constructor(x,y,width,height){
      var options={
          resitution:0.3,
          density:0.01,
          friction:1
      }

      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height

      World.add(world,this.body)
}

display(){

    var pos=this.body.position

  push()

  translate(pos.x,pos.y)
  fill("red")
  rectMode(CENTER)
  rect(0,0,this.width,this.height)
  pop()
}
}