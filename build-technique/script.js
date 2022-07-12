'use strict';

let points = document.querySelectorAll('.points-item');

let firstitem = document.querySelector('.firstitem');
let seconditem = document.querySelector('.seconditem');
let thirditem = document.querySelector('.thirditem');

let pointFirst = document.querySelector('.points-item__first');
let pointSecond = document.querySelector('.points-item__second');
let pointThird = document.querySelector('.points-item__third');

let accordionItem = document.querySelectorAll('.accordion-header-item');
let accordionBody = document.querySelectorAll('.accordion-body-item');
let arrowItem = document.querySelectorAll('.arrow-item');

let newCastomInputBoxClone = document.querySelector('.editor-form-input-item').cloneNode(true);

let spritesClose = document.querySelectorAll('.sprite-close');
let spritesCloseFirst;
let spritesCloseSecond;

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.querySelectorAll(".gallery-item");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";    
    
    /*Ниже мой код, выше моего кода нет*/
    
    if (slides[slideIndex - 1].classList.contains('firstitem')) {
        pointFirst.classList.add('active');
        pointSecond.classList.remove('active');
        pointThird.classList.remove('active');
    } else if (slides[slideIndex - 1].classList.contains('seconditem')) {
        pointFirst.classList.remove('active');
        pointSecond.classList.add('active');
        pointThird.classList.remove('active');          
    } else if (slides[slideIndex - 1].classList.contains('thirditem')) {
        pointFirst.classList.remove('active');
        pointSecond.classList.remove('active');
        pointThird.classList.add('active');          
    }
}



for (let i = 0; i < points.length; i++) {
  points[i].addEventListener("click", function() {

    for (let r = 0; r < points.length; r++) {
      points[r].classList.remove("active");
    }

    points[i].classList.add("active");
      
    if (points[i].classList.contains('points-item__first')) {
        firstitem.style.display = 'block';
        seconditem.style.display = 'none';
        thirditem.style.display = 'none';
    } else if (points[i].classList.contains('points-item__second')) {
        firstitem.style.display = 'none';
        seconditem.style.display = 'block';
        thirditem.style.display = 'none';
    } else if (points[i].classList.contains('points-item__third')) {
        firstitem.style.display = 'none';
        seconditem.style.display = 'none';
        thirditem.style.display = 'block';
    } 
      
  })
}



accordionItem.forEach(div =>{
    div.addEventListener('click', function(e) {
    
    if (div.classList.contains('active')) {
        div.classList.remove('active');
        div.lastElementChild.classList.remove('sprite-arrow_up');
        div.lastElementChild.classList.add('sprite-arrow_down');
        
    } else {
        div.classList.add('active');
        div.lastElementChild.classList.add('sprite-arrow_up');
        div.lastElementChild.classList.remove('sprite-arrow_down');
    }
        
    });
    
});


document.querySelector('.sprite-edit').addEventListener('click', function(e) {
    if (!document.querySelector('.castom-input-item-box')) {
        
        e.target.parentElement.parentElement.after(newCastomInputBoxClone);
        
    } else {
        e.target.parentElement.parentElement.parentElement.querySelector('.castom-input-item').select();
    }
    
});


    for (let i = 0; i < spritesClose.length; i++) {
        spritesCloseFirst = spritesClose[0];
        spritesCloseSecond = spritesClose[spritesClose.length-1];
        spritesCloseFirst.addEventListener('click', closeWithFirstClose);
        spritesCloseSecond.addEventListener('click', closeWithSecondClose);
    }


function closeWithFirstClose(e) {
    e.target.parentElement.parentElement.parentElement.removeChild(document.querySelector('.editor-form-input-item'));
}

function closeWithSecondClose(e) {
    e.target.parentElement.parentElement.parentElement.removeChild(document.querySelector('.editor-form-input-item'));
}



function createNewItem() {
    let newTask = document.createElement('div');
    newTask.style.display = 'block';
    newTask.style.margin = '20px 0 0 15px';
    newTask.style.width = '527px';
    newTask.innerText = document.querySelector('.castom-input-item').value;
    document.querySelector('.editor-form-box-item').append(newTask);
    document.querySelector('.castom-input-item').value = '';
}

document.querySelector('.sprite-check').addEventListener('click', createNewItem);

document.querySelector('.castom-input-item').addEventListener('keydown', (e) => {
    if (!e.target.value) return;
    if(e.keyCode === 13) {
        e.preventDefault();
        createNewItem();
    }
});


