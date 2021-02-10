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
        spaceBetween: 100,
        slidesPerView: 5,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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