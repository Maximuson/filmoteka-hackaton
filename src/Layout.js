class Layout {
  static render(layoutHbs, selector, data) {
    const markup = layoutHbs(data);
    document.querySelector(selector).innerHTML = markup;
  }
}
export default Layout;
