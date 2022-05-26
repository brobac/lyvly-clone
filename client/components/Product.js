export class Product {
  state;
  constructor($target) {
    this.setup();
    this.render();
  }
  setup() {}
  template() {
    return "";
  }
  render() {
    this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
