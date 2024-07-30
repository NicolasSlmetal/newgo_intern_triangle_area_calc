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