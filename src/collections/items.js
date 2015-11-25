import ItemModel from '../models/item';

export default Backbone.Collection.extend({
  url: 'http://tiny-lr.herokuapp.com/collections/shop-rt',

  model: ItemModel,
});
