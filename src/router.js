import BookmarkModel from './models/bookmark';
import BookmarkCollection from './collections/bookmarks';
import BookmarkForm from './views/bookmark-form';
import BookmarkList from './views/bookmark-list';
import TagList from './views/tag-list';

var Router = Backbone.Router.extend({
  collection: null,
  regions: null,

  routes: {
    new: 'newBookmark',
    '': 'index',
    ':term': 'search',
  },

  initialize() {
    this.regions = new Marionette.RegionManager({
      regions: {
        main: '#outlet',
        sidebar: '.sidebar',
      },
    });

    this.collection = new BookmarkCollection();

    // Grab all bookmarks from server
    this.collection.fetch();

    // Display sidebar
    var sidebarView = new TagList({collection: this.collection});
    this.regions.get('sidebar').show(sidebarView);
  },

  newBookmark() {
    // Create a new bookmark instance
    var bookmark = new BookmarkModel();

    // Display bookmark form to user
    var formView = new BookmarkForm({model: bookmark, collection: this.collection});

    this.regions.get('main').show(formView);
  },

  index() {
    // Display list of all bookmarks
    var listView = new BookmarkList({collection: this.collection});

    this.regions.get('main').show(listView);
  },
});

export default Router;
