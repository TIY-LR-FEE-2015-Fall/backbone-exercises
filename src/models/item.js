export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/shop-rt',
  idAttribute: '_id',

  defaults: {
    name: '',
    price: 0,
    inventory: 1,
    description: '',
    listDate: '',
  },

  initialize() {
    var listDate = this.get('listDate');

    if (listDate === '') {
      this.set('listDate', new Date());
    }
  },
});
