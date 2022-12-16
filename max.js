var m1=10
let m2=30
const m3=40
if(m1<m2 && m1<m3){
    if(m2<m3){
        console.log("m2 is max") 
    }
    else{
        console.log("m3 is max")
    }
}
else if(m2<m3 && m2<m1){
    if(m3<m1){
        console.log("m2")
    }
    else{
        console.log("m3")
    }
}
else if(m3<m2 && m3<m1){
    if(m2<m3){
        console.log("m2")
    }
    else{
        console.log("m3")
    }
}
else{
    console.log("choose correct")
}
