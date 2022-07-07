export default class Section {
  constructor ({renderer}, containerSelector) {
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
    this._renderer = renderer;
  }

  addItem (element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }
}
