import { createElement } from "@utils/domUtils";
import "@styles/TopBanner.scss";

export const TopBanner = () => {
  const div = createElement("div");
  div.classList.add("top-banner");
  div.innerHTML = `
  <a href="#">
    <img src="https://nhlyvly.com/web/upload/NNEditor/20220502/1f88edf96015dff4e4fbe36ade1bcbcd.jpg" class="top-banner__img"/>
  </a>
  `;
  return div;
};
