class Triangle{
    constructor(base, height){
        this.base = base
        this.height = height
    }
}

class TriangleBaseHeight extends Triangle{
    constructor(base, height){
        super(base, height)
    }

    calculateArea(){
        return (base * height)/2
    }
}

class TriangleSideAngle extends Triangle{
    constructor(sideA, sideB, angle){
        this.sideA = sideA
        this.sideB = sideB
        this.angle = angle
    }
}