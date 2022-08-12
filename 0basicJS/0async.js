let a = 20;
let b = 0;

setTimeout(()=>{
    b = 30;
},6000)

console.log(a+b);      //-------------> 20 (this will not wait for any second to proceed to this )

setTimeout(()=>{
    console.log(b);      
},10000)               // after 10 seconnds this will print 30
