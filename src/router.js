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
    var form = new ItemForm({model: item, collection: this.collection});

    $('#outlet').html(form.el);
  },

  /**
   * Looks up the model and runs on sync
   * @param  {Function} cb Callback to run if model is found
   * @return
   */
  lookupModel(id, cb) {
    // Look up the item with the id
    this.collection.on('sync', () => {
      var model = this.collection.get(id);

      if (model) {
        cb(model);
      }
    });

    var model = this.collection.get(id);

    if (model) {
      cb(model);
    }
  },

  details(id) {
    this.lookupModel(id, (model) => {
      // Show the detail view for the current model
      var detail = new ItemDetail({model});
      $('#outlet').html(detail.el);
    });
  },

  edit(id) {
    this.lookupModel(id, (model) => {
      // Show the detail view for the current model
      var form = new ItemForm({model, collection: this.collection});
      $('#outlet').html(form.el);
    });
  },
});

export default Router;
