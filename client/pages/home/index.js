import { Header } from "./Header";
import { Menu } from "./Menu";
import { RecommendSection } from "./RecommendSection";
import { TopBanner } from "./TopBanner";
import { imgInfo, TopCarousel } from "./TopCarousel";

export const HomePage = () => {
  const app = document.querySelector("#app");
  app.appendChild(TopBanner());
  app.appendChild(Header());
  app.appendChild(TopCarousel(imgInfo));
  app.appendChild(Menu());
  app.appendChild(RecommendSection());
};
