class Layout {
  static render(layoutHbs, selector, data) {
    const markup = layoutHbs(data);
    console.log("====================================");
    console.log(document.querySelector(selector));
    console.log("====================================");
    document.querySelector(selector).insertAdjacentHTML("beforeend", markup);
  }
}
export default Layout;
