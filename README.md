Semana 2 | Item 3

Aplicar conhecimento do curso de Git em um projeto teste simples: uma solução orientada a objetos para calcular a área de triângulos de diferentes formas.

Situação Problema: Cálculo de Área de Triângulo

Contexto

Você foi contratado para desenvolver uma aplicação em Node.js que calcula a área de triângulos utilizando dois métodos diferentes. Para isso, é necessário implementar um sistema baseado em orientação a objetos.

Requisitos

Criação de Classes:

Crie uma classe base Triangulo que contém as propriedades comuns a todos os triângulos: base e altura.
Crie duas subclasses, TrianguloBaseAltura e TrianguloLadosAngulo, que herdam da classe Triangulo.

Método de Cálculo por Base e Altura:

A classe TrianguloBaseAltura deve ter um método calcularArea que calcula a área do triângulo utilizando a fórmula: 

Área = (base × altura) / 2 

Método de Cálculo por Lados e Ângulo:

A classe TrianguloLadosAngulo deve conter propriedades adicionais ladoA, ladoB e angulo (em graus).
Implemente o método calcularArea para esta classe utilizando a fórmula dos lados e ângulo:

Área = ½  x ladoA x ladoB x sin(ângulo)
Utilize a função Math.sin do JavaScript, que trabalha com ângulos em radianos, para calcular o seno do ângulo. Portanto, será necessário converter o ângulo de graus para radianos antes do cálculo.

Implementação e Execução:

Crie um script Node.js que instancia objetos de TrianguloBaseAltura e TrianguloLadosAngulo e calcula suas áreas, exibindo os resultados no console.
O script deve receber as entradas (valores de base, altura, lados e ângulo) de maneira interativa ou através de argumentos na linha de comando.

Exemplo de Uso

// Instanciando um triângulo com base e altura
const trianguloBaseAltura = new TrianguloBaseAltura(10, 5);
console.log(`Área calculada (Base e Altura): ${trianguloBaseAltura.calcularArea()}`);

// Instanciando um triângulo com lados e ângulo
const trianguloLadosAngulo = new TrianguloLadosAngulo(7, 8, 30);
console.log(`Área calculada (Lados e Ângulo): ${trianguloLadosAngulo.calcularArea()}`)