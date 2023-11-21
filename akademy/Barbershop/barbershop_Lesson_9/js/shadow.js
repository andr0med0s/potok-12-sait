
var button = document.querySelectorAll ('.price-btn .btn');
var block = document.querySelectorAll(".product");

//----------ПЕРВОЕ---------------
//применить свойство к нулевому индексу свойство
// button[0].addEventListener("mouseenter", function() {
//   block[0].classList.add("shadow");
// });

//----------ВТОРОЕ---------------
//применить для каждого элемента с текущим индексом
// button.forEach((button, index) => {
//     button.addEventListener('mouseover', () => block[index].classList.add('product-shadow'));
// });

// button.forEach((button, index) => {
//     button.addEventListener('mouseleave', () => block[index].classList.remove('product-shadow'));
// });

//----------ТРЕТЬЕ---------------
//применить для каждого элемента свойство
// button.forEach((button) => {
//     button.addEventListener("mouseover", () => {
//       block.forEach((block) => {
//         block.classList.add("product-shadow");
//       });
//     });
//   });

//----------ЧЕТВЕРТОЕ---------------
//применить перебирая массив к конкретному индексу свойство
// for (let i = 0; i < block.length; i++) {
//     button[i].addEventListener('mouseover', () => {
//     block[i].classList.add('product-shadow');
//     });
//     }


//----------ПЯТОЕ---------------
//без использования стрелочной функции
for (let i = 0; i < block.length; i++) {
    button[i].addEventListener('mouseover', function() {
    block[i].classList.add('product-shadow');
    });
    }

for (let j = 0; j < block.length; j++) {
    button[j].addEventListener('mouseleave', function() {
    block[j].classList.remove('product-shadow');
    });
    }
















