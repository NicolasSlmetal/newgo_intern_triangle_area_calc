import { Triangle, TriangleBaseHeight, TriangleSideAngle } from "./triangle.js";
import readline from 'readline'

var base = 0
var height = 0

var sideA = 0
var sideB = 0
var angle = 0

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
        console.log("CÁLCULO DA ÁREA DO TRIÂNGULO COM (a * b * sen(O))/2")
        askSideA()
    })
}

function askSideA(){
    reader.question("Digite o comprimento do primeiro lado: ", function(answer){
        sideA = Number.parseFloat(answer)
        askSideB()
    })
}

function askSideB(){
    reader.question("Digite o comprimento do segundo lado: ", function(answer){
        sideB = Number.parseFloat(answer)
        askAngle()
    })
}

function askAngle(){
    reader.question("Digite o ângulo entre os lados em graus:", function(answer){
        angle = Number.parseFloat(answer)
        var triangleSideAngle = new TriangleSideAngle(sideA, sideB, angle)
        console.log("A área do triângulo é: ", triangleSideAngle.calculateArea())
        reader.close()
    })
}

console.log("CÁLCULO DA ÁREA DO TRIÂNGULO COM (B * H)/2")
askBase()



