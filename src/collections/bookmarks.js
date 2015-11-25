import BookmarkModel from '../models/bookmark';

export default Backbone.Collection.extend({
  url: 'http://tiny-lr.herokuapp.com/collections/rt-bookmarks',

  model: BookmarkModel,
});
