class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        
        this.ballbody = Constraint.create(options);
        World.add(world, this.ballbody);
    }

    fly(){
        this.ballbody.bodyA = null;
    }

    display(){
        
        if(this.ballbody.bodyA){
            var pointA = this.ballbody.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<235)
            {

            strokeWeight(8);
            stroke(48,22,8);
            
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            
            }
            else {
                strokeWeight(4);
                stroke(48,22,8);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            
            }
        }
        
        
    }
    
}