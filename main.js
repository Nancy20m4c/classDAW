class Point {
    constructor(x, y) {
        this.x = typeof x === 'number' ? x : 0;
        this.y = typeof y === 'number' ? y : 0;
    }
    update(newX, newY) {
        if (typeof newX === 'number') this.x = newX;
        if (typeof newY === 'number') this.y = newY;
    }
    copy() {
        return new Point(this.x, this.y);
    }

    add(otherPoint) {
        if (otherPoint instanceof Point) {
            return new Point(this.x + otherPoint.x, this.y + otherPoint.y);
        } else {
            return null;
        }
    }
}

// test points
const point1 = new Point(5, 7);
console.log("Initial Point 1:", point1);

const point2 = new Point(3, 4);
console.log("Initial Point 2:", point2);

point1.update(10, 12);
console.log("Point 1 after updating coordinates:", point1);

const copyOfPoint1 = point1.copy();
console.log("Copy of Point 1:", copyOfPoint1);

const sumPoint = point1.add(point2);
console.log("Result of adding Point 1 and Point 2:", sumPoint);

point1.add({ x: 2, y: 3 });

// Array prototype

Array.prototype.average = function () {
    if (this.length === 0) {
        return null;  
    }

    const allNumbers = this.every(item => typeof item === 'number');
    if (!allNumbers) {
        return null;
    }

    const sum = this.reduce((acc, current) => acc + current, 0);
    return sum / this.length;
};

// Test array

const numbers = [10, 20, 30, 40, 50];
console.log("Average of numbers:", numbers.average());

const emptyArray = [];
console.log("Average of empty array:", emptyArray.average());

const mixedArray = [10, "20", 30, null];
console.log("Average of mixed array:", mixedArray.average());

const moreNumbers = [5, 15, 25, 35];
console.log("Average of more numbers:", moreNumbers.average());

// Simular ordenador
class Computer {
    constructor(brand, model, ram = 4, disk = 512, screenSize = 17) {
        if (!brand || !model) {
            throw new Error("Brand and model are required.");
        }
        this.brand = brand;
        this.model = model;
        this.ram = ram;
        this.disk = disk;
        this.screenSize = screenSize;
    }

    toString() {
        return `Computer Details: 
Brand: ${this.brand}
Model: ${this.model}
RAM: ${this.ram} GB
Disk: ${this.disk} GB
Screen Size: ${this.screenSize} inches`;
    }
}

class Laptop extends Computer {
    constructor(brand, model, ram = 4, disk = 256, screenSize = 12, batteryLife = 4) {
        super(brand, model, ram, disk, screenSize);
        this.batteryLife = batteryLife; 
    }

    toString() {
        return `${super.toString()}
Battery Life: ${this.batteryLife} hours`;
    }
}

// Test

const desktop = new Computer("Dell", "Inspiron");
console.log(desktop.toString());

const customLaptop = new Laptop("Apple", "MacBook Pro", 16, 512, 13, 10);
console.log(customLaptop.toString());

const defaultLaptop = new Laptop("HP", "Pavilion");
console.log(defaultLaptop.toString());


