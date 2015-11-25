export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/rt-bookmarks',
  idAttribute: '_id',

  defaults: {
    url: '',
    tag: '',
    title: '',
  },
});
