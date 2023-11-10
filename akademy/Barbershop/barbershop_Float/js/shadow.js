
var button = document.querySelectorAll ('.price-btn .btn');
var block = document.querySelectorAll(".product");


// button.forEach((button) => {
//     button.addEventListener("mouseover", () => {
//       block.forEach((block) => {
//         block.classList.add("product-shadow");
//       });
//     });
//   });



button.forEach((button, index) => {
    button.addEventListener('mouseover', () => block[index].classList.add('product-shadow'));
});

button.forEach((button, index) => {
    button.addEventListener('mouseleave', () => block[index].classList.remove('product-shadow'));
});

// button[0].addEventListener("mouseenter", function() {
//   block[0].classList.add("shadow");
// });



