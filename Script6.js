//slice()
//action => cut the array in sequence
//return array

//           -7  -6  -5  -4  -3  -2   -1
// let marks = [20, 30, 40, 50, 60, 100, 99]
// //            0   1   2   3   4   5   6 

//arrayName.slice(startposition,endposition)
//endposition optional
//endposition less than one
// left to right

//right to left => [] => blank array

// console.log(marks.slice(2))//[40,50,60,100,99]

// let y1=marks.slice(1,4)
// console.log(y1)
// console.log(marks.slice(5,0))
// console.log(marks.slice(-2,3))//[]
// console.log(marks.slice(-6,4))
// console.log(marks.slice(-5,2))//[]

// console.log(marks.slice(2))

// console.log(marks.slice(-7,5))


let marks = [20, 30, 40, 50, 60, 100, 99]
//            0   1   2   3   4   5   6 

// console.log(marks.shift())
// console.log(marks)

// console.log(marks.pop())
// console.log(marks)


//splice() //[]
//arrayName.splice(startPosition, how many element to be removed, replace element1 , replece element 2)

// let s1=marks.splice(2,2)
// console.log(s1)

// console.log(marks)

console.log(marks.splice(3,4,100,200,300,400))
console.log(marks)



