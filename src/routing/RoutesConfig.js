//urls
import {
  getHomePageUrl,
  getLoginPageUrl,
  getNewsPageUrl,
  getMediaPageUrl,
} from "../constants/AppUrls";

//pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NewsPage from "../pages/NewsPage";

export const registerationRoutes = [
  { path: getLoginPageUrl(), component: LoginPage },
];

export const privateRoutes = [
  { path: getHomePageUrl(), component: HomePage },
  { path: getNewsPageUrl(), component: NewsPage },
];
