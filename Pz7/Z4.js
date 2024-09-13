const car = {
    
    model: 718,
    mileage: 30000,
    brand: 'Porche',
    equipment: ['conditioner', 'ESP', 'multiwheel'],
    spoiler: true,

    addMileage(newMileage)
    {
        this.mileage += newMileage;
    },

    showCar()
    {
        console.log("Машина", this.brand, this.model, " с доп. комплектацией: ", String(this.equipment), (this.spoiler==true)?" со спойлером":" без спойлера", " с пробегом ", this.mileage, " км.");
    },

    Set(model)
    {
        this.model = model;
    }

}

car.addMileage(10000);
car.Set(911);
car.showCar();
