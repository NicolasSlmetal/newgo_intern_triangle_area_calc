import { convertDegreesToRadian } from "./utils/converter.js"

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
        super(0, 0)
        this.sideA = sideA
        this.sideB = sideB
        this.angle = angle
    }
}