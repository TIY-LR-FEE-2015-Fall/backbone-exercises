var ItemView = Backbone.View.extend({
  model: null,

  tagName: 'li',

  attributes: {
    class: 'shop-item',
  },

  initialize() {
    this.render();

    this.listenTo(this.model, 'change', this.render);
  },

  render() {
    this.$el.html(`
      <a href="#${this.model.id}">
        <span class="shop-item__price">${this.model.get('price')}</span>
        <span class="shop-item__name">${this.model.get('name')}</span>
        <span class="shop-item__inventory">${this.model.get('inventory')}</span>
      </a>
      `);
  },
});

export default Backbone.View.extend({
  collection: null,

  tagName: 'ul',

  attributes: {
    class: 'items-list',
  },

  initialize() {
    this.render();

    this.listenTo(this.collection, 'add', this.render);
  },

  render() {
    this.$el.empty();

    this.collection.forEach((item) => {
      var v = new ItemView({model: item});

      this.$el.append(v.el);
    });
  },
});
