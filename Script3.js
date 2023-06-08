//Array

//1. push()
//2. unshift()
//3. pop()
//4. shift()
//5. indexOf()
//6. includes()
//7. join()
//8. reverse()

// //1-5
// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }


// let arr = [12, 24, 36, 48, 60, 72]
// //         0    1   2   3   4   5

//start position => 0
//end position => arr.length-1//last index

// arr[1] => value

// for (let i = 0; i <= 5; i++) {
//     //console.log(i) //index
//     console.log(arr[i])//array element
// }


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


let arr1 = [10, 20, 30, 40, 50, 60, 70]
//problem 1
//+5
//[15,25,35,45,65,75]

// let plus5 = []
// for (let i = 0; i < arr1.length; i++) {
//     let a1 = arr1[i] + 5
//     plus5.push(a1)
// }
// console.log(plus5)


let birthYear = [2001, 1995, 1998, 1973, 2021]

//current year-birthyear==> age
// age ==> [22, 27, 26, 50, 2]


// let currentAge = []
// for (let i = 0; i < birthYear.length; i++) {
//     let age = 2023 - birthYear[i]
//     currentAge.push(age)

// }
// console.log(currentAge)


//problem 2

// let arr2 = [23, 56, 78, 12, 34, 21, 15, 45, 22]

// //filter ==> >25 
// //[56,78,34,45]

// let greater25 = []
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > 25) {
//         // console.log(arr2[i])
//         greater25.push(arr2[i])
//     }
// }

// console.log(greater25)


//problem 3

let arr3 = [2, 10, 12, 50, 30]
//104


for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i])
}













