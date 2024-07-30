import { convertDegreesToRadian } from "./utils/converter.js"

export class Triangle{
    constructor(base, height){
        this.base = base
        this.height = height
    }
}

export class TriangleBaseHeight extends Triangle{
    constructor(base, height){
        super(base, height)
    }

    calculateArea(){
        return (this.base * this.height)/2
    }
}

export class TriangleSideAngle extends Triangle{
    constructor(sideA, sideB, angle){
        super(0, 0)
        this.sideA = sideA
        this.sideB = sideB
        this.angle = angle
    }

    calculateArea(){
        let radianAngle = convertDegreesToRadian(this.angle)
        return (this.sideA * this.sideB * Math.sin(radianAngle))/2
    }
}