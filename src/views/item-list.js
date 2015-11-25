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
      this.$el.append(`<li class="shop-item">
        <a href="#${item.id}">
          <span class="shop-item__price">${item.get('price')}</span>
          <span class="shop-item__name">${item.get('name')}</span>
          <span class="shop-item__inventory">${item.get('inventory')}</span>
        </a>
      </li>`);
    });
  },
});
