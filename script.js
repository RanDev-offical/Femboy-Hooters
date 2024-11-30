let btn = document.querySelector(".btn")
btn.addEventListener("click", function(){
    alert("Спасибо за ваш отзыв!")
})

let burger=document.querySelector('.burger_menu')
let nav=document.querySelector('.main_nav')
burger.addEventListener('click', function(){
     burger.classList.toggle("active")
     nav.classList.toggle("active")
})