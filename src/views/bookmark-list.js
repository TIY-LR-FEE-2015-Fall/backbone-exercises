var ItemView = Marionette.ItemView.extend({
  tagName: 'li',

  attributes: {
    class: 'bookmark',
  },

  template(model) {
    return `<a target="_blank" href="${model.url}">${model.title} - ${model.tag}</a>`;
  },
});

export default Marionette.CollectionView.extend({
  childView: ItemView,

  tagName: 'ul',

  attributes: {
    class: 'bookmark-list',
  },
});
