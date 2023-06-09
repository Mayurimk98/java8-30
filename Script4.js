

let arr = [12, 34, 56]
//+5

// let plus5=[]
// for(let i=0;i<arr.length;i++){
//     plus5.push(arr[i]+5)
// }

// console.log(plus5)


//map()
//action => to perform operation with each element of array
//return => new array

// let plusfive = arr.map(function (element, index, array) {
//     return element + 5
// })

// console.log(plusfive)

// let plusfive = arr.map((element, index, array)=>element + 5)
// console.log(plusfive)


let arr2 = [12, 10, 30, 24, 22, 78, 56]

//>25
//[30, 78,56]

// let greater25=[]
// for(let i=0;i<arr2.length;i++){
//     if(arr2[i]>25){
//         greater25.push(arr2[i])
//     }
// }
// console.log(greater25)

//filter()
//action => filter out the array element based on condition
//return => return new array

// let greate25 = arr2.filter(function (el, index, arr) {
//     return el > 25
// })
// console.log(greate25)

let arr3 = [10, 20, 30]
//60

// let sum = 0
// for (let i = 0; i < arr3.length; i++) {
//     sum = sum + arr3[i]
// }
// console.log(sum)

//reduce()

let sum = arr3.reduce(function (accumulator, element, index, array) {
    return accumulator + element
},0)
console.log(sum)













// function add(){
//     console.log(10+10)
// }
// add()