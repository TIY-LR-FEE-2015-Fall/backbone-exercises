var Router = Backbone.Router.extend({
  // Plan out routes
  routes: {
    '': 'allList',
    new: 'newItemForm',
    ':id': 'details',
    ':id/edit': 'edit',
  },

  newItemForm() {
    // Create an empty item model
    // Show form to user
  },
});

export default Router;
