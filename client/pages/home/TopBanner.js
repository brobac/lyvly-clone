import { createElement } from "@utils/domUtils";
import "@styles/TopBanner.scss";

export const TopBanner = () => {
  const div = createElement("div");
  div.classList.add("top-banner");
  div.innerHTML = `
  <a href="#">
    <img src="assets/img/top_banner.jpg" class="top-banner__img"/>
  </a>
  `;
  return div;
};
