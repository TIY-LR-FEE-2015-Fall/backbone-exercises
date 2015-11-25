import ItemModel from './models/item';
import ItemCollection from './collections/items';
import ItemForm from './views/item-form';
import ItemList from './views/item-list';
import ItemDetail from './views/item-detail';

var Router = Backbone.Router.extend({
  collection: null,

  // Plan out routes
  routes: {
    '': 'allList',
    new: 'newItemForm',
    ':id': 'details',
    ':id/edit': 'edit',
  },

  initialize() {
    // Grab all items from the server
    this.collection = new ItemCollection();
    this.collection.fetch();
  },

  allList() {
    // Show list to user
    var list = new ItemList({collection: this.collection});

    $('#outlet').html(list.el);
  },

  newItemForm() {
    // Create an empty item model
    var item = new ItemModel();

    // Show form to user
    var form = new ItemForm({model: item});

    $('#outlet').html(form.el);
  },

  details(id) {
    // Look up the item with the id
    this.collection.on('sync', () => {
      var model = this.collection.get(id);

      // Show the detail view for the current model
      var detail = new ItemDetail({model});
      $('#outlet').html(detail.el);
    });
  },
});

export default Router;
