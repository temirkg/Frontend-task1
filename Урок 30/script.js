


function krug() {
    let radius = Number(prompt('Введите радиус круга'));
    let P = 3.14;
    let result = 2 * P * radius;

    if(result != 0) {
        console.log(result)
    }
}
 
krug()

function comparison() {
    let a = Number(prompt('Введите число a'));
    let b = Number(prompt('Введите число b'));

    if (a > b) {
        console.log(a);
    }
    if (b > a) {
        console.log(b);
    }

    else if (b==a) {
        console.log("a и b равны");
    }

}
comparison()