import { Header } from "./Header";
import { TopBanner } from "./TopBanner";

export const HomePage = () => {
  const app = document.querySelector("#app");
  app.appendChild(TopBanner());
  app.appendChild(Header());
};
