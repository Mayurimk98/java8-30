
// let fruit = ["apple", "banana", "orange", "grapes", "cherry"]
//              1         2         3         4        5
//             0          1         2         3        4

// console.log(fruit[0])

// console.log(fruit[4])

// //10  => 9

// //200 => 199

// fruit.length-1  //last index

// console.log(fruit[fruit.length-1])//

//positive 
//negetive

// //              -5       -4        -3        -2          -1
// let fruit = ["apple", "banana", "orange", "grapes", "cherry"]
// //             0          1        2          3         4


//slice()
//arrayName.slice(startposition,endpostion)

//endposition optional
//endposition less than one( 5==> 5-1 =>4)
//left to right
//right to left ==> []

//array

// console.log(fruit.slice(-3)) //["orange","grapes","cherry"]

// console.log(fruit.slice(1,2))//["banana"]

// //              -5       -4        -3        -2          -1
// let fruit = ["apple", "banana", "orange", "grapes", "cherry"]
// //             0          1        2          3         4

// console.log(fruit.slice(-1,0)) //[]

// console.log(fruit.slice(-5,3))

// console.log(fruit.slice(1))

// console.log(fruit.slice(3,-2))//[]


//======================================================================

//              -5       -4        -3        -2          -1
let fruit = ["apple", "banana", "orange", "grapes", "cherry"]
//             0          1        2          3         4


//splice()

// console.log(fruit.shift())//apple
// console.log(fruit.pop())//cherry

//arrayName.splice(startposotion, how many element remove,replce1,replace2)
// return ==> remove element array

// console.log(fruit.splice(2,1)) //[orange]

console.log(fruit.splice(2,1,"mango")) 

console.log(fruit)

console.log(fruit.splice(-4,3))





