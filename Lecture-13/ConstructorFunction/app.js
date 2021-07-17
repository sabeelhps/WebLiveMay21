

// function fun(){
//     console.log(this);
//     this.name="Vivek";
// }

// fun();




// Constructor Function
function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.sayHello=function(){
    console.log(`Hello from ${this.name}`);
}



let p1 = new Person("Kartik",25);
let p2 = new Person("Tushar",22);



// This Keyword and its Binding

// Implicit Binding

const obj={
    k:10,
    l:true,
    m:"Kartik",
    say:function(){
        console.log(this);
    }
}


// Explicit Binding

function fun(name,age){
    console.log(this);
    console.log(name);
    console.log(age)
}

const a={
    l:10,
    m:true,
    n:'Gargi'
}


// fun.call(a,"Kartik",25);

const f=fun.bind(a);
f("Nimish",22);












