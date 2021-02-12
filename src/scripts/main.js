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
	});
	telMask.on("complete", function () {
		item.setCustomValidity("");
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
      if (document.body.clientWidth >= 1023 && sliderOn) {
        styleProjects.destroy();
        sliderOn = false;
      }
      if (document.body.clientWidth < 1023 && !sliderOn) {
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
      if (document.body.clientWidth >= 1023 && sliderOn) {
        styleProjects.destroy();
        sliderOn = false;
      }
      if (document.body.clientWidth < 1023 && !sliderOn) {
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
let btns = document.querySelectorAll('button[type="submit"]');
if(btns) {
    let noti = document.querySelector('.popup-noty');
    let popupClose = document.querySelector('.popup-success__btn');
    for(let btn of btns) {
        btn.addEventListener('click', function(){
            noti.classList.add('active');
        });
    }
    popupClose.addEventListener('click', function(){
        noti.classList.remove('active');
    });
}

//popup form
let links = document.querySelectorAll('.js-form');
if(links) {
    let form = document.querySelector('.popup-blank');
    let popupClose = document.querySelector('.popup-form__btn');
    for(let link of links) {
        link.addEventListener('click', function(event){
            event.preventDefault();
            form.classList.add('active');
        });
    }
    popupClose.addEventListener('click', function(){
        form.classList.remove('active');
    });
}

//anchor
let anchor = document.querySelector('.main-page__scroll-btn');

if(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        let blockID = anchor.getAttribute('href').substr(1),
          offset = document.getElementById(blockID).getBoundingClientRect().top;
        window.scrollTo({
          behavior: 'smooth',
          top: offset - 0
        })
    })
}

//header toggle
if(document.querySelector('.header__toggle')) {
    let toggleBtn = document.querySelector('.header__toggle');
    let nav = document.querySelector('.header__nav');

    toggleBtn.addEventListener('click', function() {
        toggleBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

//input
if(document.querySelectorAll('.form__input')) {
    let inputs = document.querySelectorAll('.form__input');
    let labels = document.querySelectorAll('.form__label');

    for(let input of inputs) {
        if(input.value)
    }
}