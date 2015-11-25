export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/rt-people',

  defaults: {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
  },
});
