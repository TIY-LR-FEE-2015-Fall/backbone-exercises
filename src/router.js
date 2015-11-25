import BookmarkModel from './models/bookmark';
import BookmarkForm from './views/bookmark-form';

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
    var form = new BookmarkForm({model: bookmark});

    $('#outlet').html(form.el);
  },
});

export default Router;
