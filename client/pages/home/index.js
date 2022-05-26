import { createElement } from "../../utils/domUtils";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { TopBanner } from "./TopBanner";
import { imgInfo, TopCarousel } from "./TopCarousel";

export const HomePage = () => {
  const app = document.querySelector("#app");
  app.appendChild(TopBanner());
  app.appendChild(Header());
  app.appendChild(TopCarousel(imgInfo));
  app.appendChild(Menu());
};
