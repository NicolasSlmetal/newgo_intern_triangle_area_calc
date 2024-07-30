Problem Situation: Calculating the Area of a Triangle

Context

You have been hired to develop a Node.js application that calculates the area of triangles using two different methods. To do this, you need to implement a system based on object orientation.

Requirements

Class creation:

Create a base class Triangle which contains the properties common to all triangles: base and height.
Create two subclasses, TriangleBaseHeight and TriangleSidesAngle, which inherit from the Triangle class.

Base and Height Calculation Method:

The TriangleBaseHeight class should have a calculateArea method that calculates the area of the triangle using the formula: 

Area = (base × height) / 2 

Side and Angle Calculation Method:

The TriangleSideAngle class should contain additional properties sideA, sideB and angle (in degrees).
Implement the calculateArea method for this class using the formula for sides and angle:

Area = ½ x sideA x sideB x sin(angle)
Use JavaScript's Math.sin function, which works with angles in radians, to calculate the sine of the angle. You will therefore need to convert the angle from degrees to radians before calculating it.

Implementation and Execution:

Create a Node.js script that instantiates TriangleBaseHeight and TriangleSidesAngle objects and calculates their areas, displaying the results on the console.
The script should receive the inputs (base, height, sides and angle values) interactively or via command line arguments.

Example of use

// Instantiating a triangle with base and height
const triangleBaseHeight = new TriangleBaseHeight(10, 5);
console.log(`Calculated area (Base and Height): ${triangleBaseHeight.calculateArea()}`);

// Instantiating a triangle with sides and angle
const triangleSideAngle = new TriangleSideAngle(7, 8, 30);
console.log(`Calculated area (Sides and Angle): ${triangleSidesAngle.calculateArea()}`)

