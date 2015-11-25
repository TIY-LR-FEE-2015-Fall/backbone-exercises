export default Backbone.View.extend({
  model: null,
  collection: null,

  tagName: 'form',

  attributes: {
    class: 'item-form',
  },

  events: {
    submit(ev) {
      ev.preventDefault();

      // Grab user input
      var name = this.$el.find('#item-name').val();
      var inventory = this.$el.find('#item-inventory').val();
      var price = this.$el.find('#item-price').val();
      var description = this.$el.find('#item-description').val();

      // Save the model
      this.model.save({name, inventory, price, description}).then(() => {
        // Redirect somewhere
        this.collection.add(this.model);

        Backbone.history.navigate('', {trigger: true});
      });
    },
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  getHeading(model) {
    if (model.id) {
      return `Editing ${model.get('name')}`;
    }

    return `New Item`;
  },

  template(model) {
    return `
      <h2 class="item-form__header">${this.getHeading(model)}</h2>

      <div class="input-field">
        <label for="item-name" class="item-form__label">Name:</label>
        <input type="text" id="item-name" class="item-form__input" value="${model.get('name')}">
      </div>

      <div class="input-field">
        <label for="item-price"class="item-form__label">Price:</label>
        <input type="number" step="0.05" id="item-price" class="item-form__input" value="${model.get('price')}">
      </div>

      <div class="input-field">
        <label for="item-inventory" class="item-form__label">Inventory:</label>
        <input type="number" id="item-inventory" class="item-form__input" value="${model.get('inventory')}">
      </div>

      <div class="input-field">
        <label for="item-description" class="item-form__label">Description:</label>
        <textarea type="number" id="item-description" class="item-form__input">${model.get('description')}</textarea>
      </div>

      <button class="item-form__submit">Submit</button>
    `;
  },
});
