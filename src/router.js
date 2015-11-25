import BookmarkModel from './models/bookmark';

var Router = Backbone.Router.extend({
  routes: {
    new: 'newBookmark',
    '': 'index',
    ':term': 'search',
  },

  newBookmark() {
    // Create a new bookmark instance
    var bookmark = new BookmarkModel();

    // Display bookmark form to user
    debugger;
  },
});

export default Router;
