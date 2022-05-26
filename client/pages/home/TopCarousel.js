import { createElement } from "@utils/domUtils";
import "@styles/TopCarousel.scss";
import { setInterval } from "core-js";
/**
 *
 * @param {{src:string,alt:string}[]} imgInfo
 */
export const TopCarousel = (imgInfo) => {
  const carousel = createElement("div", "top-carousel");
  const container = createElement("div", "top-carousel-container");
  const prevBtn = createElement("div", "top-carousel__prev-btn");
  const nextBtn = createElement("div", "top-carousel__next-btn");
  let selected = 0;
  prevBtn.addEventListener("click", handlePrev);
  nextBtn.addEventListener("click", handleNext);
  carousel.appendChild(container);
  carousel.appendChild(prevBtn);
  carousel.appendChild(nextBtn);
  imgInfo.forEach((info) =>
    container.appendChild(TopCarouselItem(info.src, info.alt))
  );
  const items = container.querySelectorAll(".top-carousel-item");
  cloneItem();
  autoPlay(5000);

  function TopCarouselItem(src, alt = "") {
    const item = createElement("div", "top-carousel-item");
    item.innerHTML = `
    <img src=${src} alt=${alt} class="top-carousel-item__img"/>
    `;
    return item;
  }

  function cloneItem() {
    if (items.length > 1) {
      container.prepend(items[items.length - 1].cloneNode(true));
      container.append(items[0].cloneNode(true));
    }
    setTranslate({ reset: true });
    items[selected].classList.add("top-carousel-item--focused");
  }

  function setTransition(value) {
    container.style.transition = value;
  }

  function setTranslate({ index, reset }) {
    if (reset) {
      // container.style.transform = `translateX(-${container.clientWidth}px)`;
      container.style.transform = `translateX(-1280px)`;
    } else {
      container.style.transform = `translateX(-${
        (index + 1) * container.clientWidth
      }px)`;
    }
  }

  function handlePrev() {
    items[selected].classList.remove("top-carousel-item--focused");
    selected -= 1;

    setTransition("transform 0.4s ease");
    setTranslate({ index: selected });
    if (selected < 0) {
      selected = items.length - 1;
      setTimeout(() => {
        setTransition("");
        setTranslate({ index: selected });
      }, 400);
    }
    items[selected].classList.add("top-carousel-item--focused");
  }

  function handleNext() {
    items[selected].classList.remove("top-carousel-item--focused");
    selected += 1;
    setTransition("transform 0.4s ease");
    setTranslate({ index: selected });
    if (selected > items.length - 1) {
      selected = 0;
      setTimeout(() => {
        setTransition("");
        setTranslate({ index: selected });
      }, 400);
    }
    items[selected].classList.add("top-carousel-item--focused");
  }

  function autoPlay(duration) {
    setInterval(handleNext, duration);
  }

  return carousel;
};

// 스토어로 빼야되나?
export const imgInfo = [
  {
    src: "assets/img/top_carousel/66b0faf1fa44913fc10534192e5c9350.jpg",
    alt: "carousel1",
  },
  {
    src: "assets/img/top_carousel/6cb69f972a61f3906f011765d0269ed5.jpg",
    alt: "carousel2",
  },
  {
    src: "assets/img/top_carousel/7d9feaa41352d55f91d2a0ca359d857e.jpg",
    alt: "carousel3",
  },
  {
    src: "assets/img/top_carousel/94cf38e22ebfd7e1e6666ede56c0ca8e.jpg",
    alt: "carousel4",
  },
  {
    src: "assets/img/top_carousel/99d90e9f4c91501ea2d40213717b8311.jpg",
    alt: "carousel5",
  },
  {
    src: "assets/img/top_carousel/ac3fa0456e00d32c5a2c7dc11d8fbd30.jpg",
    alt: "carousel6",
  },
  {
    src: "assets/img/top_carousel/e2ad7e8904a84afda7256fe254da0bf2.jpg",
    alt: "carousel7",
  },
  {
    src: "assets/img/top_carousel/f780e28d90992feeec07508934074ee0.jpg",
    alt: "carousel8",
  },
  {
    src: "assets/img/top_carousel/fdc77d59b2e625c36f6c89157086e1f8.jpg",
    alt: "carousel9",
  },
];
