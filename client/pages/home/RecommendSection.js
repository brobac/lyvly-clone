import { createElement } from "@utils/domUtils";
import "@styles/RecommendSection.scss";

export const RecommendSection = () => {
  const section = createElement("section", "recommend-section");
  section.innerHTML = `
  <div class="recommend-header">
    <h2 class="recommend-header__title">이 상품 어때요?</h2>
    <span class="recommend-header__sub-title">엄선해서 추천하는 상품!</span>
  </div>
  `;
  const container = createElement("div", "recommend-item-container");
  productInfo.forEach((product) => container.appendChild(Product(product)));
  section.appendChild(container);
  return section;
};

const Product = ({ img, brand, name, tagPrice, discountPrice }) => {
  const product = createElement("div", "product");
  product.innerHTML = `
  <div class="product__img-wrapper">
    <img src=${img} alt="" class="product__img"/>
  </div>
  <span class="product__brand">
    ${brand}
  </span>
  <span class="product__name">${name}</span>
  <div class="product__price-wrapper">
    <span class="product__sale-price"></span>
  </div>
  `;

  const salePrice = product.querySelector(".product__sale-price");
  if (discountPrice) {
    const saleTag = createElement("div", "product__sale-tag");
    const tagPriceEl = createElement("span", "product__tag-price");
    tagPriceEl.innerText = tagPrice + "원";
    saleTag.innerText = `${Math.round(
      ((tagPrice - discountPrice) / tagPrice) * 100
    )}%`;
    product.querySelector(".product__img-wrapper").appendChild(saleTag);
    salePrice.innerText = discountPrice + "원";
    const priceWrapper = product.querySelector(".product__price-wrapper");
    priceWrapper.appendChild(tagPriceEl);
  } else {
    salePrice.innerText = tagPrice + "원";
  }

  return product;
};

const productInfo = [
  {
    img: "assets/img/product/0a67c42d276fc5baee49b6e34a49a5a2.jpg",
    brand: "LYVLY",
    name: "(~5/27 할인)[LYVLY] 한우 등심 1등급 구이용 200g",
    tagPrice: 23900,
    discountPrice: 18500,
  },
  {
    img: "assets/img/product/0f74be7fc8872ef7da630a4c542312ca.jpg",
    brand: "LYVLY",
    name: "(~5/27 할인)[LYVLY] 한우 등심 1등급 구이용 200g",
    tagPrice: 23900,
    discountPrice: 18500,
  },
  {
    img: "assets/img/product/479096f2f31368a42fe9c6d45884e4b7.jpg",
    brand: "LYVLY",
    name: "(~5/27 할인)[LYVLY] 한우 등심 1등급 구이용 200g",
    tagPrice: 23900,
    discountPrice: 18500,
  },
  {
    img: "assets/img/product/4e7e814b2b0739d69426048e34974707.jpg",
    brand: "LYVLY",
    name: "(~5/27 할인)[LYVLY] 한우 등심 1등급 구이용 200g",
    tagPrice: 23900,
    discountPrice: 18500,
  },
  {
    img: "assets/img/product/6df1fd9636c725fa334b3defeaab1956.jpg",
    brand: "LYVLY",
    name: "(~5/27 할인)[LYVLY] 한우 등심 1등급 구이용 200g",
    tagPrice: 23900,
    discountPrice: 18500,
  },
  {
    img: "assets/img/product/7581bf6cc71e25a7356a054d095647da.jpg",
    brand: "LYVLY",
    name: "(~5/27 할인)[LYVLY] 한우 등심 1등급 구이용 200g",
    tagPrice: 23900,
    discountPrice: 18500,
  },
  {
    img: "assets/img/product/8e5f73cbb1d0086d0fa5c1f4f73f0070.jpg",
    brand: "LYVLY",
    name: "(~5/27 할인)[LYVLY] 한우 등심 1등급 구이용 200g",
    tagPrice: 23900,
    discountPrice: 18500,
  },
  {
    img: "assets/img/product/b10376de237b4ec85aa1c78f0915c307.jpg",
    brand: "LYVLY",
    name: "(~5/27 할인)[LYVLY] 한우 등심 1등급 구이용 200g",
    tagPrice: 23900,
    discountPrice: 18500,
  },
];
