//1. push()
//2. unshift()
//3. pop()
//4. shift()
//5. includes()
//6. indexOF()
//7. reverse()
//8. join()
//9. map()
//10. filter()
//11. reduce()


// let student = ["mayuri", "vaibhav", "sathish"]

// // Welcome mayuri !!
// // Welcome vaibhav!!
// // Welcome sathish !!

// // for (let i = 0; i < student.length; i++) {
// //     console.log("Welcome " + student[i] + " !!")
// // }

// //12.forEach()
// //action perform action with each array element
// //return => nothing
// student.forEach(function(el,index,arr){
//     console.log("Welcome "+el +" !!")
// })


// let number1 = [12, 34, 67, 89, 12, 56, 90]
// //              0   1  2  3  4  5  6
// //13. find()
// //action return the array element where first time condition gets match
// //return ==> array element

// // let y1 = number1.find(function (el, index, array) {
// //     return el > 25
// // })
// // console.log(y1)

// //14. findIndex()
// //action return the index of array element where first time condition gets match
// //return ==> number

// let y2=number1.findIndex(function(el,indx,arr){
//     return el>25
// })
// console.log(y2)


// let score = [110, 75, 22, 33, 44, 55, 99, 67, 25]

// //15.some()
// // let y3 = score.some(function (el, index, arr) {
// //     return el < 10
// // })

// // console.log(y3)


// //16. every()
// let y4 = score.every(function (el, index, array) {
//     return el > 20
// })
// console.log(y4)

//            0  1   2      0   1   2    3    0    1
let num1 = [[22, 67, 99], [44, 78, 90, 110], [55, 89]]
//               0              1                2

// console.log(num1[1])
// console.log(num1[1][2])

// console.log(num1[2][1])

// console.log(num1[0][0])

// console.log(num1[1][3])

//[22,67,99,44,78,90,110,55,89]

//17. flat()
//action => convert two dimentional array into single dimenton array
//return => new array
let d1=num1.flat()
console.log(d1)

//forEach(), find(), findIndex(), some(), every(), flat()

