export default class AppView {
  _parent = document.querySelector(".grid");
  _gridUp = document.querySelector(".grid__up");
  _cards = document.querySelector(".Weather-Cards");
  _overlayEl = document.querySelector(".overlay");

  constructor() {
    this._toggleOverlay();
    this._toggleSearchInput();
  }

  _clear() {
    this._cards.innerHTML = "";
    this._gridUp.innerHTML = "";
  }

  _overlay() {
    return document.querySelector(".overlay").classList.toggle("hidden");
  }

  _toggleOverlay() {
    this._overlayEl.addEventListener("click", (e) => {
      const btnClose = e.target.closest(".overlay__close");
      if (!btnClose) return;
      return this._overlay();
    });
  }

  _toggleSearchInput() {
    this._parent.addEventListener("click", (e) => {
      const btn = e.target.closest(".location__btn");
      if (!btn) return;
      return document.querySelector(".search__Box").classList.toggle("active");
    });
  }

  _searchInput(handler) {
    this._parent.addEventListener("keyup", (e) => {
      const btnInput = e.target.closest(".search__input");
      if (!btnInput) return;
      if (e.key === "Enter") {
        handler(btnInput.value);
        return (btnInput.value = "");
      }
    });
  }
}
