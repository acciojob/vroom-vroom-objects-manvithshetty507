// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;

    this.getMakeModel = () => {
        return this.make + this.model;
    };
}

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model);  // Correct way to call the parent constructor
    this.topSpeed = topSpeed;

    this.getTopSpeed = () => {
        return this.topSpeed;
    };
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
