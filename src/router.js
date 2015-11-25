import ItemModel from './models/item';
import ItemCollection from './collections/items';
import ItemForm from './views/item-form';
import ItemList from './views/item-list';

var Router = Backbone.Router.extend({
  // Plan out routes
  routes: {
    '': 'allList',
    new: 'newItemForm',
    ':id': 'details',
    ':id/edit': 'edit',
  },

  allList() {
    // Grab all items from the server
    var allItems = new ItemCollection();
    allItems.fetch();

    // Show list to user
    var list = new ItemList({collection: allItems});

    $('#outlet').html(list.el);
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
