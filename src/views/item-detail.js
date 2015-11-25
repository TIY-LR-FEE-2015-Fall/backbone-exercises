export default Backbone.View.extend({
  model: null,

  attributes: {
    class: 'item-detail',
  },

  initialize() {
    this.render();

    this.listenTo(this.model, 'change', this.render);
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
      <h2 class="item-detail__header">
        ${model.get('name')}
        <span class="item-detail__price">${model.get('price')}</span>
        <span class="item-detail__inventory">${model.get('inventory')}</span>
      </h2>

      <p>${model.get('description')}</p>
    `;
  },
});
