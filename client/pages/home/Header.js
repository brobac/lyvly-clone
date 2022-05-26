import { createElement } from "../../utils/domUtils";
import "@styles/Header.scss";

export const Header = () => {
  const header = createElement("header");
  header.innerHTML = `
    <div class="header-container">
      <div class="header-top-contents">
        <div class="header__guide-btn">
          <a href="#">
            <img src="https://nhlyvly.com/web/upload/NNEditor/20210622/1c0607a36e55f9557f4f7ffce993ff41.png" alt="" />
          </a>
        </div>
        <div class="header__logo-wrapper">
          <h1>
            <a href="#">
              <img src="https://nhlyvly.com/web/img/pc/header_logo.png" alt="라이블리 로고" class="logo" />
            </a>
          </h1>
        </div>
        <ul class="member-menu">
          <li class="member-menu__item">
            <a href="#">로그인</a>
          </li>
          <li class="member-menu__item">
            <a href="#">회원가입</a>
          </li>
          <li class="member-menu__item">
            <a href="#">고객센터</a>
          </li>
        </ul>
      </div>
    </div>`;

  const container = header.firstElementChild;
  container.appendChild(HeaderNav());
  return header;
};

const HeaderNav = () => {
  const nav = createElement("nav", "header-nav");
  nav.innerHTML = `
    <div class="header-nav__all-category-container"></div>
    <div class="all-category-open-btn"></div>

    <ul class="header-nav__category-list">
      <li class="header-nav__category-item category-item--selected">
        <a href="#">LYVLY</a>
      </li>
      <li class="header-nav__category-item">
        <a href="#">지역명품</a>
      </li>
      <li class="header-nav__category-item">
        <a href="#">라이브</a>
      </li>
      <li class="header-nav__category-item">
        <a href="#">알뜰쇼핑</a>
      </li>
      <li class="header-nav__category-item category-item--biz">
        <a href="#">사업자몰</a>
      </li>
    </ul>`;

  return nav;
};
