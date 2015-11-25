export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/shop-rt',
  idAttribute: '_id',

  defaults: {
    name: '',
    price: 0,
    inventory: 1,
    description: '',
  },
});
