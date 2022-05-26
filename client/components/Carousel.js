export class Carousel {
  carousel = createElement("div", "carousel");
  container = createElement("div", "carousel-item-container");
  prevBtn = createElement("div", "carousel__prev-btn");
  nextBtn = createElement("div", "carousel__next-btn");
  selected = 0;

  constructor(elements) {
    this.addItems(elements);
    this.cloneItem();
    this.init();
  }

  get carousel() {
    return this.carousel;
  }

  init() {
    this.carousel.appendChild(this.container);
    this.prevBtn.addEventListener("click", this.handlePrev);
    this.nextBtn.addEventListener("click", this.handleNext);
    this.carousel.appendChild(this.prevBtn);
    this.carousel.appendChild(this.nextBtn);
  }

  addItems(elements) {
    elements.forEach((element) => this.addItem(element));
    this.carousel.appendChild(this.container);
    this.items = this.container.querySelectorAll(".carousel-item");
  }

  addItem(element) {
    const item = createElement("div", "carousel-item");
    item.appendChild(element);
    this.container.appendChild(item);
    this.items = this.container.querySelectorAll(".carousel-item");
  }

  cloneItem() {
    this.items = this.container.querySelectorAll(".carousel-item");
    if (this.items.length > 1) {
      this.container.prepend(this.items[this.items.length - 1].cloneNode(true));
      this.container.append(this.items[0].cloneNode(true));
    }
  }

  setTranslate({ index, reset }) {
    if (reset)
      this.container.style.transform = `translateX(-${this.container.clientWidth}px)`;
    else
      this.container.style.transform = `translateX(-${
        (index + 1) * this.container.clientWidth
      }px)`;
  }

  handlePrev() {
    this.selected -= 1;
    this.setTranslate({ index: this.selected });
    if (this.selected < 0) {
      this.selected = this.items.length - 1;
      setTimeout(() => {
        this.setTranslate({ index: this.selected });
      }, 300);
    }
  }

  handleNext() {
    this.selected += 1;
    this.setTranslate({ index: this.selected });
    if (this.selected > this.items.length - 1) {
      this.selected = 0;
      setTimeout(() => {
        this.setTranslate({ index: this.selected });
      }, 200);
    }
  }
}
