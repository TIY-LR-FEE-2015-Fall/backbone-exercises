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

export default Marionette.CollectionView.extend({
  childView: ItemView,

  tagName: 'ul',

  attributes: {
    class: 'bookmark-list',
  },
});
