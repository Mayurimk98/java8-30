

let a1 = 100
console.log(typeof a1) //number

let a2 = "200"
console.log(typeof a2)//string

let a3 = "true"
console.log(typeof a3)//string

let a4 = false
console.log(typeof a4) //boolean

//Array => datatype

//collection of multiple data

// let b=[] //array
// let x1 = [20, 30, 40, 60, "mayur", true]
// console.log(typeof x1)//object


let marks = [30, 44, 78, 90, 100, 54]
//  index     0   1   2   3   4    5
//length      1   2   3   4   5    6



console.log(marks[4])//100

console.log(marks[3])//90

//javascript ==> object
//object => property and methods

//Array ==> object => property and methods

//property => length => number

console.log(marks.length)//6

console.log(marks[5])//54

console.log(marks.length - 1)//5

console.log(marks[marks.length - 1])// 54  last index element 

//methods()  => array

//action 
//return 

//1.push()
//action => add the element last
//return  => new length

// let city = ["nashik", "pune", "jalgoan", 'dhule']
// //            0          1        2           3
// let y1=city.push("sangamner")
// console.log(y1)//5
// console.log(city)

//2. unshift()
//action => aff the element at first
//return new lenegth

// let city = ["nashik", "pune", "jalgoan", 'dhule']
// let y2=city.unshift('malegoan')
// console.log(y2)
// console.log(city)

//3. pop()
//action => remove the last element
//return => removed element

// let city = ["nashik", "pune", "jalgoan", 'dhule']
// let y3 = city.pop()
// console.log(y3)//dhule
// console.log(city)

//4. shift()
//action => remove the first element
//return => removed element

let score = [233, 67, 90, 87, 65, 44]
let y5 = score.shift()
console.log(y5)//233
console.log(score)
