// list1=["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// a=[]
// for(var i of list1){
//    if(!a.includes(i)){
//        a.push(i)
//    }
// }
// console.log(a);
 
// for(var j of a){
//    count=0
//    for(var k of list1){
//        if (j === k){
//            count+=1
//        }
//    }
//    console.log(j,count," times");
// }

list=["p","a","v","a","n","i","p","r","a"]
a=[]
for (let i of list){
    if(!a.includes(i)){
        a.push(i)
    }
}
console.log(a);



// let a=['red', 'white', 'a', 'b', 'black', 'f']
// let i=0
// let String= ""
// let b=[]
// while (i<a.length){
//     String=String+(a[i])
//     String.split(a[[i]])
//     b.push(String)
//     i++
// }
// console.log(b)
