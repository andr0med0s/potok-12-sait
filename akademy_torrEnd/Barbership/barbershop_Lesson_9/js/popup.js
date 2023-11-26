// --------------

// var link = document.querySelector(".login");
// link.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("Клик по ссылке");
// });

// --------------

// var popup = document.querySelector(".modal-content");
// popup.classList.add("modal-content-show");

// --------------

var link = document.querySelector ('.login');
var popup = document.querySelector ('.modal-content');
var close = document.querySelector ('.modal-content-close');

var login = popup.querySelector ('[name=login]');
var password = popup.querySelector ('[name=password]');
var form = popup.querySelector ('form');
var storage = localStorage.getItem ('login');

var overlay = document.querySelector(".modal-overlay");

link.addEventListener ('click', function (event) {
  event.preventDefault ();
  popup.classList.add ('modal-content-show');
//   login.focus ();
  if (storage) {
    login.value = storage;
  } else {
    login.focus ();
  }
  overlay.classList.add("modal-overlay-show");
});

close.addEventListener ('click', function (event) {
  event.preventDefault ();
  popup.classList.remove ('modal-content-show');
  popup.classList.remove ('modal-error');
  overlay.classList.remove("modal-overlay-show");
});

form.addEventListener ('submit', function (event) {
  if (!login.value || !password.value) {
    event.preventDefault ();
    // console.log("Нужно ввести логин и пароль");
    popup.classList.add ('modal-error');
    alert("Вы забыли внести данные");
  } else {
    localStorage.setItem ('login', login.value);
  }
});

window.addEventListener ('keydown', function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains ('modal-content-show')) {
      popup.classList.remove ('modal-content-show');
      popup.classList.remove ('modal-error');
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

