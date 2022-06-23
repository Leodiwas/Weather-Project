import { state } from "../model.js";

export default class AppView {
  _parent = document.querySelector(".grid");
  _overlayEl = document.querySelector(".overlay");

  constructor() {
    this._toggleOverlay();
    this._toggleSearchInput();
  }

  _clear() {
    state.daily.icon = [];
    state.daily.main = [];
    this._parent.innerHTML = "";
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
