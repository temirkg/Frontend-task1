
let class_name = document.getElementsByClassName("add_cart");
    console.log(class_name);


let myFunction = function(evt) {
    evt.preventDefault();
    let title = this.parentNode.parentNode.parentNode.querySelectorAll('.ttl');
    let price = this.parentNode.parentNode.parentNode.querySelectorAll('.price');
    let image = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.img img');
    let creat_li = document.createElement('li');
    creat_li.classList.add("bag_item");

    
    creat_li.innerHTML ='<div class="bag_img">\
                            <a href="#">\
                                <img src="'+image[0].src+'" alt="">\
                            </a>\
                        </div>\
                        <div class="bag_info">\
                            <p class="info_title"><a href="#">'+title[0].innerText+'</a></p>\
                            <div class="info_price">\
                                <span>'+price[0].innerText+'</span>\
                            </div>\
                            <div class="trash">\
                                <a href="#"><i class="far fa-trash-alt"></i></a>\
                            </div>\
                        </div>';                     
    let block_cart = document.querySelector('.dropdown_menu2 ul');
    block_cart.appendChild(creat_li);
    alert("Товар успешно добавлен в корзину");

    // удаление товара

    let click_trash = document.querySelectorAll(".trash");

    for (var i = 0; i < click_trash.length; i++) {
        click_trash[i].addEventListener('click', del_func, false);
        
    }
    function del_func(evt){
        evt.preventDefault();
        this.parentNode.parentNode.remove();
    }


    
};

for (var i = 0; i < class_name.length; i++) {
    class_name[i].addEventListener('click', myFunction, false);
};

    