export default class Section {
  constructor ({renderer}, containerInsert) {
    this._container = containerInsert;
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
