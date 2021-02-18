let text = "Привет Васян";
console.log(text);

// https://imask.js.org/
// Маска для телефона
document.querySelectorAll("input[type='tel']").forEach((item) => {
	let telMask = IMask(item, {
		mask: "+{7} 000 000 00 00",
	});
	/*Добавление и удаление класса при снятии фокуса с data-type="tel"*/
	telMask.on("accept", function () {
		item.setCustomValidity("Укажите полностью номер телефона.");
        item.classList.remove('success');
	});
	telMask.on("complete", function () {
		item.classList.add('success');
	});
});

//tabs
if (document.querySelector('.tabs__wrap')) {
    for (const tabs of document.querySelectorAll("[data-tab]")) {
        const buttons = tabs.querySelectorAll("[data-nav-tab]");
        const items = tabs.querySelectorAll("[data-item-tab]");
      
        for (const button of buttons) {
          button.addEventListener("click", (event) => {
            for (const item of items) {
                item.classList.remove('active');
            }
                tabs.querySelector(`[data-item-tab='${event.target.dataset.navTab}']`).classList.add('active');
            });
        }
    }
}

//partners slider
if(document.querySelector('.partners__slider')) {
    const swiper = new Swiper('.partners__slider .swiper-container', {
        // Optional parameters
        loop: true,
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            280: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            // when window width is >= 640px
            1024: {
                slidesPerView: 5,
                spaceBetween: 100,
            },
        },
    });
}

//service-slider
if(document.querySelector('.service-slider__container')) {
    const swiper = new Swiper('.service-slider__container .swiper-container', {
        // Optional parameters
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
}

//case item slider
if(document.querySelector('.case-item__slider')) {
    const swiper = new Swiper('.case-item__slider .swiper-container', {
        // Optional parameters
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
}

//caseitem right slider
if (document.querySelector('.case-item__slider-rigth')) {
    let styleProjects;
    let sliderOn = false;
  
    function initSlider() {
      if (document.body.clientWidth >= 1200 && sliderOn) {
        styleProjects.destroy();
        sliderOn = false;
      }
      if (document.body.clientWidth < 1200 && !sliderOn) {
        styleProjects = new Swiper(".case-item__slider-rigth", {
            breakpoints: {
                280: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                450: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
        sliderOn = true;
      }
    }
  
    window.onresize = function () {
      initSlider();
    };
  
    initSlider();
}

//news item slider right
if (document.querySelector('.news-item__slider-right')) {
    let styleProjects;
    let sliderOn = false;
  
    function initSlider() {
      if (document.body.clientWidth >= 1200 && sliderOn) {
        styleProjects.destroy();
        sliderOn = false;
      }
      if (document.body.clientWidth < 1200 && !sliderOn) {
        styleProjects = new Swiper(".news-item__slider-right", {
            breakpoints: {
                280: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                450: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
        sliderOn = true;
      }
    }
  
    window.onresize = function () {
      initSlider();
    };
  
    initSlider();
}

//popup noty
// let btns = document.querySelectorAll('button[type="submit"]');
// if(btns) {
//     let noti = document.querySelector('.popup-noty');
//     let popupClose = document.querySelector('.popup-success__btn');
//     for(let btn of btns) {
//         btn.addEventListener('click', function(){
//             noti.classList.add('active');
//         });
//     }
//     popupClose.addEventListener('click', function(){
//         noti.classList.remove('active');
//     });
// }

//popup form
let links = document.querySelectorAll('.js-form');
if(links) {
    let form = document.querySelector('.popup-blank');
    let popupClose = document.querySelector('.popup-form__btn');
    // let page = document.documentElement;

    for(let link of links) {
        link.addEventListener('click', function(event){
            event.preventDefault();
            form.classList.add('active');
        });
    }
    popupClose.addEventListener('click', function(){
        form.classList.remove('active');
    });

    // if(form.classList.contains('active')) {
    //   page.classList.add('scroll-hidden');
    // } else {
    //   page.classList.remove('scroll-hidden');
    // }
}

//anchor
let anchor = document.querySelector('.main-page__scroll-btn');

if(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        let blockID = anchor.getAttribute('href').substr(1),
          offset = document.getElementById(blockID).getBoundingClientRect().top;
        window.scrollBy({
          behavior: 'smooth',
          top: offset - 108,
        })
    })
}

//header toggle
if(document.querySelector('.header__toggle')) {
    let toggleBtn = document.querySelector('.header__toggle');
    let nav = document.querySelector('.header__nav');
    page = document.documentElement;

    toggleBtn.addEventListener('click', function() {
        toggleBtn.classList.toggle('active');
        nav.classList.toggle('active');
        page.classList.toggle('scroll-hidden');
    });
}

//input
if(document.querySelectorAll('.form__input')) {
    let formItems = document.querySelectorAll('.form__item');

    for (let formItem of formItems) {
        let input = formItem.querySelector('.form__input');
        let label = formItem.querySelector('.form__label');

        input.onfocus = function(){
            formItem.classList.add('active');
        };

        input.onblur = function(){
            if(input.value !== '') {
                formItem.classList.add('active');
            } else {
                formItem.classList.remove('active');
            }
        };
    }
}

//validation form

let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

/*Добавление класса при снятии фокуса с текстовых инпутов*/
let noTelAndEmailInput = document.querySelectorAll('input:not([data-type="tel"]):not([data-type="email"]), textarea');
noTelAndEmailInput.forEach(item => {
  item.addEventListener('blur', function () {
    if (item.value != '') {
      item.classList.add('success');
    } else {
      item.classList.remove('success');
    }
  });
});


/*Добавление класса при снятии фокуса с data-type="email"*/
let emailInput = document.querySelectorAll('input[data-type="email"]');
emailInput.forEach(item => {
  item.addEventListener('blur', function () {
    if (item.value != '') {
      if (item.value.search(pattern) == 0) {
        item.classList.remove('error');
        item.classList.add('success');
      } else {
        item.classList.add('error');
        item.classList.remove('success');
      }
    } else {
      item.classList.remove('input-err');
      item.classList.remove('input-border');
    }
  });
});


/*Функция валидации*/
function raValidation(form) {
  let inputs = form.querySelectorAll('[data-required]'),
    temp = true;
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].classList.contains('success')) {
      inputs[i].classList.add('error');
      temp = false;
    } else {
      inputs[i].classList.remove('error');
    }
  }
  if (temp == false) {
    console.warn('Форма заполнена некорректно')
    return false;
  } else {
    console.log('Форма отправлена')
    return true;
  }
}


/*Обработка клика по кнопке отправки формы*/
let submitButton = document.querySelectorAll('button[type="submit"]');
submitButton.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    let form = this.closest('form');
    if (raValidation(form)) {
      //form.submit();
      ifSuccess(form);
    }
  });
});


/*Функция для sucsess*/
function ifSuccess(form) {
  let inputsAndButton = form.querySelectorAll('input, textarea, button'),
    contentButton = form.querySelector('button').textContent;
  form.querySelector('button').textContent = 'Отправлено';
  inputsAndButton.forEach(item => {
    item.classList.remove('error');
    item.classList.remove('success');
    item.setAttribute('disabled', 'disabled');

    function selfClose() {
        document.querySelector('.popup-blank').classList.remove('show');
      }

    setTimeout(selfClose, 1800);
    document.querySelector('.popup-noty').classList.remove('active');
    document.querySelector('.popup-blank').classList.add('active');
    
  })
  setTimeout(() => {
    form.querySelector('button').textContent = contentButton;
    inputsAndButton.forEach(item => {
      item.value = '';
      item.removeAttribute('disabled');
    });
  }, 2000);
}