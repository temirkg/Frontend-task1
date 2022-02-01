
function greeting(result) {
    alert('Hello ' + result);
}
  
function processUserInput(callback) {
    var Login = prompt('Пожалуйста, введите логин:');
    var Parol = prompt('Пожалуйста, введите пароль:');
    var result = Login + Parol;

    if (result == 'urmat12345') {
        callback(result);
    }
    else if(Login != 'urmat') {
        alert('неправильно ввел логин');
    }
    else if(Parol != '12345') {
        alert('неправильно ввел пароль');
    }

  }
  
processUserInput(greeting);

function greeting2(result2) {
    alert('Добро пожаловать' + result2);
}
  
function processUserInput2(callback) {
    var Login = prompt('Пожалуйста, введите самый большой тег в HTML:');
    var Parol = prompt('Пожалуйста, введите перевод слово dog на кириллице:');
    var Paroll = prompt('Пожалуйста, введите цвет red на кириллице:');
    var result2 = Login + Parol + Paroll;

    if (result2 == 'h1собакакрасный') {
        callback(result2);
    }
    else if (Login != 'h1') {
        alert('неправильно ввел тег');
    }
    else if (Parol != 'собака') {
        alert('неправильно ввел перевод слово dog');

    }
    else if (Paroll != 'красный') {
        alert('неправильно ввел цвет red на кириллице');
    }

}
  
processUserInput2(greeting2);