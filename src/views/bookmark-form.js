export default Backbone.View.extend({
  model: null,
  titleInput: null,
  tagInput: null,
  urlInput: null,

  tagName: 'form',

  attributes: {
    class: 'bookmark-form',
  },

  events: {
    submit(ev) {
      ev.preventDefault();

      // Get user input
      var title = this.titleInput.val();
      var tag = this.tagInput.val();
      var url = this.urlInput.val();

      // Set properties on our current model
      // Save the model
      this.model.save({title, tag, url}).then(() => {
        alert('A new bookmark was saved');

        // Redirect to the home page
        Backbone.history.navigate('', {trigger: true});
      });
    },
  },

  template() {
    return `
      <h2 class="bookmark-form__heading">New Bookmark</h2>

      <div class="input-field">
        <label for="bookmark-title" class="bookmark-form__label">Title</label>
        <input type="text" class="bookmark-form__input" id="bookmark-title" placeholder="Title">
      </div>

      <div class="input-field">
        <label for="bookmark-url" class="bookmark-form__label">Url</label>
        <input type="text" class="bookmark-form__input" id="bookmark-url" placeholder="Url">
      </div>

      <div class="input-field">
        <label for="bookmark-tag" class="bookmark-form__label">Tag</label>
        <input type="text" class="bookmark-form__input" id="bookmark-tag" placeholder="Tag">
      </div>

      <button class="bookmark-form__submit">Submit</button>
    `;
  },

  initialize() {
    this.render();

    this.titleInput = this.$el.find('#bookmark-title');
    this.tagInput = this.$el.find('#bookmark-tag');
    this.urlInput = this.$el.find('#bookmark-url');
  },

  render() {
    this.$el.html(this.template());
  },
});
