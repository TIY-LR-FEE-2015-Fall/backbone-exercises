export default Backbone.View.extend({
  tagName: 'form',

  attributes: {
    class: 'item-form',
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template());
  },

  template(model) {
    return `
      <h2 class="item-form__header">New Item</h2>

      <div class="input-field">
        <label for="item-name" class="item-form__label">Name:</label>
        <input type="text" id="item-name" class="item-form__input">
      </div>

      <div class="input-field">
        <label for="item-price" class="item-form__label">Price:</label>
        <input type="number" id="item-price" class="item-form__input">
      </div>

      <div class="input-field">
        <label for="item-inventory" class="item-form__label">Inventory:</label>
        <input type="number" id="item-inventory" class="item-form__input">
      </div>

      <div class="input-field">
        <label for="item-description" class="item-form__label">Description:</label>
        <textarea type="number" id="item-description" class="item-form__input"></textarea>
      </div>

      <button class="item-form__submit">Submit</button>
    `;
  },
});
