(()=>{"use strict";new Promise((function(e){var n=new Image;n.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",n.onload=n.onerror=function(){e(2===n.height)}})).then((function(e){var n=e?"webp":"no-webp";document.body.classList.add(n)}));var e=document.querySelector(".navigation"),n=document.querySelector(".page_header__menu"),t=document.querySelector(".navigation__closeIcon"),i=document.querySelectorAll('[data-submenu="1"]'),a=document.querySelectorAll('[data-submenu="2"]');n&&n.addEventListener("click",(function(){e&&e.classList.add("navigation--active")})),t&&t.addEventListener("click",(function(){e&&e.classList.remove("navigation--active")})),i.length>0&&i[0].addEventListener("click",(function(){i[1].classList.toggle("navigation__submenu--active")})),a.length>0&&a[0].addEventListener("click",(function(){a[1].classList.toggle("navigation__submenu--active")}))})();