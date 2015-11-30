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

  foundTags: {},

  tagName: 'ul',

  attributes: {
    class: 'tag-list',
  },

  // Only show views with even values
  filter: function(child) {
    // If this is the first time we see a tag show it
    if (!this.foundTags[child.get('tag')] || this.foundTags[child.get('tag')] === child) {
      this.foundTags[child.get('tag')] = child;

      return true;
    }

    return false;
  },
});
