function getResult(a,b,c){
    "use strict";
    let x = [];
    let discriminant = b ** 2 - 4 * a * c;
    console.log(discriminant);
    if (discriminant > 0) {
    	x.push((-b + Math.sqrt(discriminant))/(2*a));
    	x.push((-b - Math.sqrt(discriminant))/(2*a));
    } else if (discriminant == 0) {
    	x.push(-b/(2*a));
    } else x = [];
    return x;
}

function getAverageMark(marks){
    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("Оценок больше пяти, средний результат будет показан только для первых пяти");
        let firstFives = marks.slice(0, 5)
        return calculateAverage(firstFives);
    } else if (marks.length <= 5) {
        return calculateAverage(marks);
    }
function calculateAverage(marks) {
        let sumMarks = marks.reduce(function(sum, current) {
        return sum + current}, 0);
        let average = sumMarks/marks.length;
        return average;
}
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result;
    if (age >= 18) {
        result = 'Не желаете ли олд-фэшн, ' + name + '?';
    } else result = 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';

    return result;
}