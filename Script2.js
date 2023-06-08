
let s1=[]

//1. push()
let y1=s1.push(200)
console.log(y1)//1
console.log(s1)

s1.push(900)
console.log(s1)

let y2=s1.unshift(2)
console.log(y2)
console.log(s1)

let y3=s1.pop()
console.log(y3)//900
console.log(s1)

console.log(s1.shift())//2
console.log(s1)

let city=["nashik","pune","vardha","nagpur","dhule","nashik","vardha"]
//          0         1      2        3        4       5
console.log(city.length)

//5. indexOf()
//action =>  return the index of given elemnt if found and if not found then return -1
//return => number 

// let p1=city.indexOf(`sangmner`)
// console.log(p1)//-1

// let p2=city.indexOf('Vardha')
// console.log(p2)//-1

// console.log(city.indexOf("nashik"))//0

// console.log(city.unshift('jalgoan'))//6
// console.log(city.indexOf("vardha"))




//5. includes()

// let scores=[34,67,89,22,33,56,89]
// //action => check whether given ele present in array or not if present return true else false
// //return =>boolean

// let u1=scores.includes(100)
// console.log(u1)

// let u2=scores.includes(33)
// console.log(u2)

//6. join()
// let scores=[34,67,89,22,33,56,89]
// //action join the lement of array with given parameter
// //return //string

// let q1=scores.join('@')
// console.log(q1)
// console.log(typeof q1)

///join => array => string
//split==> string => array

//7. reverse()

let scores=[34,67,89,22,33,56,89]

//action  => revrese the given array
//return => new array

let q2=scores.reverse()
console.log(q2)

//join(), reverse(), indexof(), includes()








