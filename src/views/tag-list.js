var ItemView = Backbone.View.extend({
  tagName: 'li',

  /**
   * Current Tag Name
   * @type {String}
   */
  model: null,

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

  currentItemViews: [],

  tagName: 'ul',

  attributes: {
    class: 'tag-list',
  },

  initialize() {
    this.render();

    this.listenTo(this.collection, 'add', this.render);
  },

  render() {
    this.currentItemViews.forEach(function(itemView) {
      itemView.remove();
    });

    this.currentItemViews = [];

    this.$el.empty();

    this.collection.map((bookmark) => {
      return bookmark.attributes.tag;
    }).forEach((tagName) => {
      var itemView = new ItemView({model: tagName});
      this.currentItemViews.push(itemView);

      this.$el.append(itemView.render());
    });
  },
});
