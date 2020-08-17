'use strict';
function getSolutions(a, b, c) {
    let d = b**2 - 4 * a * c;
    if (d < 0){
        return { D: d, roots: [] };
    } else if (d == 0) {
        let x1 = - b / (2 * a);
        return { D: d, roots: [ x1 ] };
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return { D: d, roots: [ x1, x2 ] };
    }
}
function showSolutionsMessage(a, b, c) {
    let result = getSolutions( a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0){
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
}

function  getAverageScore(data) {
    let averageScore = {};
    let totalAverage = []
     for(let subject in data) {
         let averageInSubject = getAverageMark(data[subject])
         averageScore[subject] = averageInSubject;
         totalAverage.push(averageInSubject);
     }
     averageScore.average = getAverageMark(totalAverage);
     return averageScore;

}
function getAverageMark(marks) {
    if (marks.length === 0){
        return 0;
    } else {
        let averageMark = 0
        for(let i = 0; i < marks.length; i++) {
            averageMark += marks[i]
        }
        return averageMark/marks.length;
    }

}

function getPersonData(secretData) {
let personData = {};
    for(let person in secretData) {
        if (person === 'aaa') {
            personData.firstName = getDecodedValue(secretData[person]);
        } else {
            personData.lastName = getDecodedValue(secretData[person]);
        }
}
    return personData;
}
function getDecodedValue(secret) {
    if(secret === 0) {
        return "Родриго";
    } else {
        return "Эмильо";
    }

}