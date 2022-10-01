import isWebp from "./modules/js/webp.js"
import burgerFunc from './modules/js/burger.js'
import dropdown from './modules/js/dropdown.js'
import Accordion from './modules/js/accordion.js'

import noUiSlider from 'nouislider';
import Swiper from "swiper"

const swiper = new Swiper('.included__slider', {
  slideClass: 'included__slide',
  wrapperClass: 'included__wrapper',
  slidesPerView: 3.5,
  spaceBetween: 47,
  initialSlide: 1,

  navigation: {
    nextEl: '.included__button--next',
    prevEl: '.included__button--prev',
  },

  scrollbar: {
    el: '.included__scrollbar',
  },
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

// Range slides

const rangeCountUsers = document.getElementById("range-countUsers")
const rangeCountServers = document.getElementById("range-countServers")
const rangeCpu = document.getElementById("range-cpu")
const rangeRam = document.getElementById("range-ram")
const rangeSSD = document.getElementById("range-ssd")
const rangeReserve = document.getElementById("range-reserve")

noUiSlider.create(rangeCountUsers, {
  start: [1, 10],
  connect: true,

  range: {
    'min': 1,
    "max": 10
  }
})
noUiSlider.create(rangeCountServers, {
  start: [1, 10],
  connect: true,

  range: {
    'min': 1,
    "max": 10
  }
})
noUiSlider.create(rangeCpu, {
  start: [1, 50],
  connect: true,

  range: {
    'min': 1,
    "max": 50
  }
})
noUiSlider.create(rangeSSD, {
  start: [8, 128],
  connect: true,

  range: {
    'min': 8,
    "max": 128
  }
})
noUiSlider.create(rangeRam, {
  start: [8, 128],
  connect: true,

  range: {
    'min': 8,
    "max": 128
  }
})
noUiSlider.create(rangeReserve, {
  start: [120, 1000],
  connect: true,

  range: {
    'min': 120,
    "max": 1000
  }
})