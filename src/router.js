import BookmarkModel from './models/bookmark';
import BookmarkCollection from './collections/bookmarks';
import BookmarkForm from './views/bookmark-form';
import BookmarkList from './views/bookmark-list';
import TagList from './views/tag-list';

var Router = Backbone.Router.extend({
  collection: null,

  routes: {
    new: 'newBookmark',
    '': 'index',
    ':term': 'search',
  },

  initialize() {
    this.collection = new BookmarkCollection();

    // Grab all bookmarks from server
    this.collection.fetch();

    // Display sidebar
    var list = new TagList({collection: this.collection});

    $('.sidebar').html(list.el);
  },

  newBookmark() {
    // Create a new bookmark instance
    var bookmark = new BookmarkModel();

    // Display bookmark form to user
    var form = new BookmarkForm({model: bookmark});

    $('#outlet').html(form.el);
  },

  index() {
    // Display list of all bookmarks
    var list = new BookmarkList({collection: this.collection});

    $('#outlet').html(list.el);
  },
});

export default Router;
