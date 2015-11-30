import BookmarkModel from './models/bookmark';
import BookmarkCollection from './collections/bookmarks';
import BookmarkForm from './views/bookmark-form';
import BookmarkList from './views/bookmark-list';
import TagList from './views/tag-list';

var Router = Backbone.Router.extend({
  collection: null,

  sidebarView: null,
  outletView: null,

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
    this.sidebarView = new TagList({collection: this.collection});

    $('.sidebar').html(this.sidebarView.el);
  },

  cleanupViews() {
    if (this.outletView) {
      this.outletView.remove();
    }
  },

  newBookmark() {
    this.cleanupViews();

    // Create a new bookmark instance
    var bookmark = new BookmarkModel();

    // Display bookmark form to user
    this.outletView = new BookmarkForm({model: bookmark, collection: this.collection});

    $('#outlet').html(this.outletView.el);
  },

  index() {
    this.cleanupViews();

    // Display list of all bookmarks
    this.outletView = new BookmarkList({collection: this.collection});

    $('#outlet').html(this.outletView.el);
  },
});

export default Router;
