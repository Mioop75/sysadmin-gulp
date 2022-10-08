import isWebp from "./modules/js/webp.js"
import burgerFunc from './modules/js/burger.js'
import dropdown from './modules/js/dropdown.js'
import Accordion from './modules/js/accordion.js'
import fixedMenuFunc from "./modules/js/fixedMenu.js"

fixedMenuFunc()

import noUiSlider from 'nouislider';
import Swiper, { Navigation, Scrollbar } from "swiper"

const swiper = new Swiper('.included__slider', {
	slideClass: 'included__slide',
	wrapperClass: 'included__wrapper',
	slidesPerView: 1,
	spaceBetween: 15,
	loop: true,
	centeredSlides: true,
	modules: [Navigation, Scrollbar],

	navigation: {
		nextEl: '.included__button--next',
		prevEl: '.included__button--prev',
	},

	scrollbar: {
		el: '.included__scrollbar',
		draggable: true,
	},

	breakpoints: {
		577: {
			slidesPerView: 2.2,
			slidesPerGroup: 2,
			initialSlide: 2,
		},


		993: {
			slidesPerView: 3.5,
			spaceBetween: 47,
			initialSlide: 2,
		}
	}
});

isWebp()

burgerFunc()

dropdown()

const accordion = new Accordion("accordion", {})
const accordion1 = new Accordion("accordion1", {})
const accordion2 = new Accordion("accordion2", {})
const accordion3 = new Accordion("accordion3", {})
const accordion4 = new Accordion("accordion4", {})
const accordion5 = new Accordion("accordion5", {})
const accordion6 = new Accordion("accordion6", {})
const accordion7 = new Accordion("accordion7", {})
const accordion8 = new Accordion("accordion8", {})

// Range slides

const rangeCountUsers = document.getElementById("range-countUsers")
const rangeCountServers = document.getElementById("range-countServers")
const rangeCpu = document.getElementById("range-cpu")
const rangeRam = document.getElementById("range-ram")
const rangeSSD = document.getElementById("range-ssd")
const rangeReserve = document.getElementById("range-reserve")

if (rangeCountUsers) {
	noUiSlider.create(rangeCountUsers, {
		start: [2],
		connect: [true, false],

		range: {
			'min': 1,
			"max": 10
		}
	})
}

if (rangeCountServers) {
	noUiSlider.create(rangeCountServers, {
		start: [2],
		connect: [true, false],

		range: {
			'min': 1,
			"max": 10
		}
	})
}
if (rangeCpu) {
	noUiSlider.create(rangeCpu, {
		start: [10],
		connect: [true, false],

		range: {
			'min': 1,
			"max": 50
		}
	})
}
if (rangeRam) {
	noUiSlider.create(rangeRam, {
		start: [15],
		connect: [true, false],

		range: {
			'min': 8,
			"max": 128
		}
	})
}
if (rangeSSD) {
	noUiSlider.create(rangeSSD, {
		start: [50],
		connect: [true, false],

		range: {
			'min': 8,
			"max": 128
		}
	})
}
if (rangeReserve) {
	noUiSlider.create(rangeReserve, {
		start: [200],
		connect: [true, false],

		range: {
			'min': 120,
			"max": 1000
		}
	})
}