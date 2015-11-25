var ItemView = Backbone.View.extend({
  tagName: 'li',

  attributes: {
    class: 'tag',
  },

  template() {
    return `<a href="#${this.model}">${this.model}</a>`;
  },

  render() {
    this.$el.html(this.template());

    return this.el;
  },
});

export default Backbone.View.extend({
  collection: null,

  tagName: 'ul',

  attributes: {
    class: 'tag-list',
  },

  initialize() {
    this.render();

    this.listenTo(this.collection, 'sync', this.render);
  },

  render() {
    this.$el.empty();

    this.collection.map((bookmark) => {
      return bookmark.attributes.tag;
    }).forEach((model) => {
      var itemView = new ItemView({model});

      this.$el.append(itemView.render());
    });
  },
});
