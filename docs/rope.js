class rope{
    constructor(body1,body2,offsetX,offsetY)
    {
       this.offsetX=offsetX
       this.offsetY=this.offsetY

       var options={
           bodyA:body1,
           bodyB:body2,
           pointB:{x:this.offsetX,y:this.offsetY}
       }
        //console.log(options);
       this.rope=Constraint.create(options)
       World.add(World,this.rope)
    }
    fly()
    { 
        this.sling.bodyA = null;
     }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    rope1=new rope(bobObject1.body,roofObject.body,bobDiameter*2,0)
    
}