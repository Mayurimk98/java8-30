
//1. push()==> add ele at last ==> new length
//2. unshift() => add ele at first ==> new length
//3. shift() ==> remove ele from first => removed ele
//4. pop()=> removed last ele ==> removed ele
//5. map() => perform operation with ele of array==> array
//6. reverse()==> reverse array ==> new array
//7. filter() => filterout ele=> new array
//8. reduced() => single ele==> ele
//9. find() => return ele where first time condition get match ==> element
//10. findIndex()=> return index of ele where frst time condition get match ==> number
//11. indexOf() ==> return index of given ele ==> number
//12. includes()==> check whether ele present in array or not==> boolean
//13. some() => if given condition get match with any ele then return true else false ==> boolean
//14. every() =>if given condition get match with all ele then return true else false ==> boolean
//15. slice() => cut the array==> new array
//16. splice() => remove inbetween ele of array==> array of removed ele
//17. flat() => conver two dimentional array into single ==> array
//18. forEach() => perform operation with each ele ==> nothing
//19. join() => join array ele with given para ==> string


//20. fill()
//1000

//           -7   -6  -5  -4  -3   -2   -1
// let marks = [23, 647, 90, 56, 200, 300, 430]
// //            0    1   2   3    4   5    6         

//[1000,1000,1000,1000, 200, 300, 430]

//arrayName.fill(default value, startpostion, endposition)

//positive and negetive
//startpostion and endpostion are optional
//endposition less than 1

// let y1=marks.fill("ganesh")
// console.log(y1)

// let y2=marks.fill(10000,4)
// console.log(y2) //[23,647,90,56,10000,10000,10000]

// let y3 = marks.fill('mayuri',-3,0)
// console.log(y3)// as it is array 


// console.log(marks.fill('minskole',-6,-2))

//21. at()

// let marks = [23, 647, 90, 56, 200, 300, 430]
// //            0    1   2   3    4   5    6 
// console.log(marks.at(5))//300

// console.log(marks[5])//300

// console.log(marks.at(10))


//22. concat()
let a=[10,20,30]
let b=[200,300,400]
let c=[88,99,55,33]

//[10,20,30,200,300,400]

console.log(a.concat(b).concat(c))


