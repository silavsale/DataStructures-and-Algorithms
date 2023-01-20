const car1 = {
  brand: "Porshe",
  getCarDescription: function (cost, year, color) {
    console.log(
      `This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.`
    );
  },
};

const car2 = {
  brand: "Audi",
};

const car3 = {
  brand: "Ford",
};

car1.getCarDescription(74000, 2024, "blue");

car1.getCarDescription.call(car2, 100000, 2024, "yellow");

car1.getCarDescription.apply(car3, [70000, 2024, "black"]);

