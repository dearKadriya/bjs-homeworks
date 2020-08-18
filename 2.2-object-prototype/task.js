String.prototype.isPalindrome = function() {
        let string1 = this.split(' ').join('').split('').reverse().join('');
        if (string1.toLowerCase() === this.split(' ').join('').toLowerCase()) {
            return true;
        } else return false;
    }

//String.prototype.isPalindrome - для задачи №1

function getAverageMark(marks) {
    if (marks.length == 0) {
        return 0;
    } else {
        let sumMarks = 0;
        for (let mark in marks) {
            sumMarks += marks[mark];
        }
        let averageMark = sumMarks / marks.length;
        let roundedAverage = Math.round(averageMark);
        return roundedAverage;

    }
}

function checkBirthday(birthday) {
//     Решение исходя из условия
//     let nowDate = Number(new Date());
//     let userDate = Number(new Date(birthday));
//     let diff = nowDate - userDate;
//     let age = Math.round(diff/31622400000);
//     if (age >= 18) {
//         return true;
//    } else return false;

// Решение возвращающее более точное значение
    let todayDate = new Date();
    let controlDate = Number(todayDate.setFullYear(todayDate.getFullYear() - 18));
    let userBirthday = Number(new Date(birthday));
    if (controlDate >= userBirthday) {
        return true;
    } else return false;

}