import ItemModel from './models/item';
import ItemForm from './views/item-form';

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
    var item = new ItemModel();

    // Show form to user
    var form = new ItemForm({model: item});

    $('#outlet').html(form.el);
  },
});

export default Router;
