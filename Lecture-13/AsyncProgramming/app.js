
// function delay(n){

//     for(let i=1;i<=n;i++){
//         let x=new Date().getTime();
//         while(new Date().getTime()<1000+x){}
//     }
//     fun();
// }


// function fun(){
//     console.log("Inside Fun");
// }

console.log("START");

setTimeout(function cb(){
    console.log("INSIDE cb")
},5000);


const id=setInterval(function(){
    console.log("Hello");
},2000);

setTimeout(function(){
    clearInterval(id);
},6000);


console.log("END");