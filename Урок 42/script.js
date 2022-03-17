
// сверстайте меню которая состоит из 5 менюшек 
// получите все кнопки из меню
// при нажатие на меню, удалите именно тот элемент на которой нажали 
let click = document.getElementById("d");
let click2 = document.getElementById("d2");
let click3 = document.getElementById("d3");
let click4 = document.getElementById("d4");
let click5 = document.getElementById("d5");

let delet_elem = (e) => {
    e.target.remove();
};

click.addEventListener('click', delet_elem);

click2.addEventListener('click', delet_elem);
click3.addEventListener('click', delet_elem);
click4.addEventListener('click', delet_elem);
click5.addEventListener('click', delet_elem);