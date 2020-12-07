class Dustbin{
        constructor(x,y,width,height){
            
            this.dustbin = createSprite(x,y,width,height);
            this.width = width;
            this.height = height;
            this.image = loadImage("sprites/Dustbin.png");
            World.add(world,this.dustbin);
        }
        display(){
        var angle = this.dustbin.angle;

        push();
        imageMode(CENTER);
        rotate(angle);
        image(this.image,this.dustbin.position.x,this.dustbin.position.y,this.width,this.height);
        pop();
        }
    }
