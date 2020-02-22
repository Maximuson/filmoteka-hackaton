import initMainPage from "./mainPage";
const initHeader = () => {
  document.querySelector(".js-home").addEventListener("click", initMainPage);
};

export default initHeader;
