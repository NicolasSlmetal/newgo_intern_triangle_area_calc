import { Triangle, TriangleBaseHeight, TriangleSideAngle } from "./triangle.js";
import readline from 'readline'

var base = 0
var height = 0

var reader = readline.createInterface(process.stdin, process.stdout)



function askBase(){
    reader.question("Digite o valor da base do triângulo: ", function(answer){
        base = Number.parseFloat(answer)
        askHeight()
    })
}

function askHeight(){
    reader.question("Digite o valor da altura do triângulo: ", function(answer){
        height = Number.parseFloat(answer)
        var triangleBaseHeight = new TriangleBaseHeight(base, height)
        console.log("A área do triângulo é:", triangleBaseHeight.calculateArea())
        reader.close()
    })
}

console.log("CÁLCULO DA ÁREA DO TRIÂNGULO COM (B * H)/2")
askBase()