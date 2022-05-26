import { createElement } from "@utils/domUtils";
import "@styles/Menu.scss";
export const Menu = () => {
  const menu = createElement("div", "menu");
  const container = createElement("div", "menu-container");
  itemInfo.forEach((item) =>
    container.appendChild(MenuItem(item.src, item.title))
  );
  menu.appendChild(container);
  return menu;
};

const MenuItem = (img, title) => {
  const item = createElement("div", "menu-item");
  item.innerHTML = `
  <div class="menu-item__img-wrapper">
    <img src=${img} alt="" class="menu-item__img"/>
  </div>
  <span class="menu-item__title">${title}</span>
  `;
  return item;
};

const itemInfo = [
  {
    src: "assets/img/menu/bulk.jpg",
    title: "대용량상품",
  },
  {
    src: "assets/img/menu/camping.jpg",
    title: "캠핑상품",
  },
  {
    src: "assets/img/menu/delivery.jpg",
    title: "정기배송",
  },
  {
    src: "assets/img/menu/gift.jpg",
    title: "선물하기",
  },
  {
    src: "assets/img/menu/invite.jpg",
    title: "친구초대",
  },
];
