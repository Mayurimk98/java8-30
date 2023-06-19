//String  => Object

//Javascript ==> object => property and methods

// let a="mayuri"
// let b='mayuri'
// let c=`mayuri`

// let firstName="Mayuri Katwe"

// //M  a   y   u   r   i      K   a   t   w   e
// //0  1   2   3    4   5  6  7   8   9  10   11
// //1  2   3   4    5   6  7  8   9   10  11  12

// console.log(firstName[3])//u

// console.log(firstName[0]) //M

// //Length ==> property

// console.log(firstName.length)//12

//Methods

//1. toUpperCase()

//action => to convert all char o string into capital case
//return => new string

// let fruit="banana"
// let y1=fruit.toUpperCase()
// console.log(y1)//BANANA

// //2. toLowerCase()
// //action => to convert all char o string into small case
// //return => new string

// let city="PuNe"
// let y2=city.toLowerCase()
// console.log(y2)

// //3. includes()
// let firstName="Mayuri Katwe"

// //M  a   y   u   r   i      K   a   t   w   e
// //0  1   2   3    4   5  6  7   8   9  10   11
// //1  2   3   4    5   6  7  8   9   10  11  12

// let y3=firstName.includes("m")
// console.log(y3)

// console.log(firstName.includes(" "))

// //4. indexOf()

// console.log(firstName.indexOf("u")) //3

// console.log(firstName.indexOf("Y")) //-1


//5. trim()
//action => remove spaces from start and end
//return => new string

// let flower=" Jasmin "
// console.log(flower.length)
// let p1=flower.trim()
// console.log(p1)
// console.log(p1.length)//6

//6. trimStart()
//action => remove spaces from start
//return => new string

// let flower=" Jasmin "
// console.log(flower.length)//8
// let u1=flower.trimStart()//Jasmin_
// console.log(u1)
// console.log(u1.length) //7

//7. trimEnd()
//action => remove spaces from end
//return => new string

// let flower=" Jasmin "
// console.log(flower.length)//8
// let u2=flower.trimEnd()
// console.log(u2)//_Jasmin
// console.log(u2.length)//7

//8. startsWith()
//action => check whether string startsWith given char or substring
//return => boolean


// let str="Shree Ganesh"

//subString ==> Shr,Shree, Ganesh
// let r1=str.startsWith("S")
// console.log(r1)

// let r2=str.startsWith('shr')
// console.log(r2)

// console.log(str.startsWith('eee Gane'))

//9. endsWith()
//action => check whether string endsWith given char or substring
//return => boolean
let str="Shree Ganesh"

console.log(str.endsWith(" Ganesh"))//true

console.log(str.endsWith("sh"))//true

console.log(str.endsWith('H'))






