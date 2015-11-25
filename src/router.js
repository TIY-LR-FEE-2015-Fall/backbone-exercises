var Router = Backbone.Router.extend({
  routes: {
    new: 'newBookmark',
    '': 'index',
    ':term': 'search',
  },

  newBookmark() {
    debugger;
  },
});

export default Router;
