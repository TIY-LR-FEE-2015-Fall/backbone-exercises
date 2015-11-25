export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/shop-rt',

  defaults: {
    name: '',
    price: 0,
    inventory: 1,
    description: '',
  },
});
