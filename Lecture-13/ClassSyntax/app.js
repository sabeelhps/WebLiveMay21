class Car{

    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    getPrice(){
        return this.price;
    }

    // Getters - called as properties
    get getName(){
        return this.name;
    }

    // Setters - called as properties not as function
    set setPrice(newPrice){
        this.price=newPrice;
    }

}

class RacingCar extends Car{

    constructor(name,price,maxSpeed,color){
        super(name,price); //it calls the parent class constructor
        this.maxSpeed=maxSpeed;
        this.color=color;
    }

    get getSpeed(){
        return this.maxSpeed;
    }
}



// let c1 = new Car("BMW",200000);
// let c2 = new Car("Audi",5000000);

let r1 = new RacingCar("BMW",20000,400,"Black");