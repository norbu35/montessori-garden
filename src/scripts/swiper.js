import { register } from "swiper/element/bundle";

register();

const swiperEl = document.querySelector("swiper-container");

const swiperParams = {
  createElements: true,
  effect: "cards",
  rewind: true,
};

Object.assign(swiperEl, swiperParams);
swiperEl.initialize();
