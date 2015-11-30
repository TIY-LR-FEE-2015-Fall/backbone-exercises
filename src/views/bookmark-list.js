var ItemView = Backbone.View.extend({
  model: null,

  tagName: 'li',

  attributes: {
    class: 'bookmark',
  },

  initialize() {
    this.render();
  },

  template(model) {
    return `<a target="_blank" href="${model.get('url')}">${model.get('title')} - ${model.get('tag')}</a>`;
  },

  render() {
    this.$el.html(this.template(this.model));
  },
});

export default Backbone.View.extend({
  currentItemViews: [],
  collection: null,

  tagName: 'ul',

  attributes: {
    class: 'bookmark-list',
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

    this.collection.forEach((model) => {
      var itemView = new ItemView({model});

      this.currentItemViews.push(itemView);

      this.$el.append(itemView.el);
    });
  },
});
