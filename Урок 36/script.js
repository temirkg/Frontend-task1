

let salary = {
    almaz: 1200,
    adilet: 1300,
    nursultan: 3000,
};
let bonus = {
    almaz: 400,
    adilet: 300,
    nursultan: 200,
    __proto__: salary,
    sum() {
        console.log(this.almaz + salary.almaz);
        console.log(this.adilet + salary.adilet);
        console.log(this.nursultan + salary.nursultan);
        let resultBonus = Object.values(bonus);
        let resultSalary = Object.values(salary);
        console.log(resultSalary, resultBonus);
        resultBonus = resultBonus.slice(0, 3);
        console.log(resultBonus);
        resultBonus = resultBonus.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);
        console.log(resultBonus);
        resultSalary = resultSalary.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);
        console.log(resultSalary);
        console.log(resultSalary + resultBonus);
    
    }
};

