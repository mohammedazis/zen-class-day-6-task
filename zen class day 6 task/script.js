//---------------------------------first task--------------------------------------------------
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
  }
}
class Movie {
  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}
class Movie {
  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}
//----------------------------------task 2-----------------------------------------------------
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return 2 * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

//-------------------------------task-3--------------------------------------------------------------
class Person {
  constructor(name, age, gender, address) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }
}
//-----------------------------------task-4--------------------------------------
class UberPriceCalculator {
  constructor(distance, duration) {
    this.distance = distance;
    this.duration = duration;
  }

  calculatePrice() {
    const pricePerKm = 0.5;
    const pricePerMinute = 0.1;

    const distancePrice = this.distance * pricePerKm;
    const durationPrice = this.duration * pricePerMinute;

    const totalPrice = distancePrice + durationPrice;

    return totalPrice;
  }
}
