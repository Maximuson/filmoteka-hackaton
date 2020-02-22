const initWatched = () => {
  document.querySelector(".js-main > .container").innerHTML = `
    <ul class="movies-list" id="movies-list"></ul>
    <button class="scrollTopButton"></button>
    `;
};

export default initWatched;
