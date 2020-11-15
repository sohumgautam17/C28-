class Ground{
    constructor(x, y, width, height){
    var options = {
    "isStatic" : false
        }
        this.x = x
        this.x = x
        this.width=width;
		this.height=height;
        this.body = Bodies.rectangle(x,y, this.width, this.height, options);
        World.add(world, this.body)
    }
    display()
    
    {
    fill("black")
   push(); 
   rect(this.x, this.y, this.width, this.height);
   pop();
    
    }
}

        
		
    
    