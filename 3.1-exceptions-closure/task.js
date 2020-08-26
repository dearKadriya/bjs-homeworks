'use strict';
function parseCount(value) {
    const tmp = Number.parseInt(value, 10);
    if (Number.isNaN(tmp)) {
        throw new Error("Невалидное значение");
    }
    return tmp;
}
function validateCount(value) {
    try {
        return parseCount(value);
    } catch (e) {
        return new Error("Невалидное значение");
    }
}
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
}
    getPerimeter() {
        return (this.a + this.b + this.c);

    }
    getArea() {
        let p = this.getPerimeter()/2
        let area = ((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)))).toFixed(3);
        return Number(area);
    }

}
function getTriangle(a, b, c) {
    try {
        let bb = new Triangle(a, b, c);
        return bb ;
    } catch (e) {
        let triangle = {
            getPerimeter() {
                return ('Ошибка! Треугольник не существует');
            },
            getArea() {
                return ('Ошибка! Треугольник не существует');
            }

        }
        return triangle;
}}
