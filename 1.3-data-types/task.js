'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent) == true || percent == 0) {
        return (`Параметр процент содержит неправильное значение ${window.percent.value}`);
    }else if (isNaN(contribution)) {
        return (`Параметр первоначальный взнос содержит неправильное значение ${window.contribution.value}`);
    } else if (isNaN(amount)) {
        return(`Параметр сумма кредита содержит неправильное значение ${window.amount.value}`);
    } else {
        let creditAmount = amount - contribution;
        let creditTime = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
        let percentMonthly = (percent / 100) / 12;
        let payment = creditAmount * (percentMonthly + (percentMonthly / (((1 + percentMonthly) ** creditTime) - 1)));
        let totalAmount = (payment * creditTime).toFixed(2);
        console.log(totalAmount);
        return Number(totalAmount);
    }
}

function getGreeting(name) {
    let greeting = `Привет, мир! Меня зовут ${name}`;

    if (name == ' ' || name === null || name === undefined || name.length == 0) {
        greeting = `Привет, мир! Меня зовут Аноним`;
    }
    return greeting;


}