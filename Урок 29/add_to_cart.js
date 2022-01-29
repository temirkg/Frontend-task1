// let ttl = document.getElementsByClassName("ttl"); 
// console.log(ttl[1].innerText);

// let price = document.getElementsByClassName('price');
// console.log(price[0].innerText);
// let images1 = document.getElementsByClassName('images1');
// console.log(images1[0]);


// let ttl = document.querySelectorAll('.body_product > .ttl');

// for (let text of ttl) {
//     console.log(text.innerText)
// };
    var elements = document.getElementsByClassName('add_cart');

    var myFunction = function() {
        var attribute = this.parentNode.parentNode.parentNode.querySelectorAll('.ttl');
        alert(attribute[0].innerText);
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }

    var elements = document.getElementsByClassName('add_cart');

    var myFunction = function() {
        var attribute = this.parentNode.parentNode.parentNode.querySelectorAll('.price');
        alert(attribute[0].innerText);
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }

    var elements = document.getElementsByClassName('add_cart');

    var myFunction = function() {
        var attribute = this.parentNode.parentNode.parentNode.querySelectorAll('.images1');
        alert(attribute[0]);
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }

