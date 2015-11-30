var ItemView = Marionette.ItemView.extend({
  tagName: 'li',

  attributes: {
    class: 'tag',
  },

  template(model) {
    return `<a href="#${model.tag}">${model.tag}</a>`;
  },
});

export default Marionette.CollectionView.extend({
  childView: ItemView,

  tagName: 'ul',

  attributes: {
    class: 'tag-list',
  },
});
