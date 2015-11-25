export default Backbone.View.extend({
  tagName: 'form',

  attributes: {
    class: 'bookmark-form',
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
  },

  render() {
    this.$el.html(this.template());
  },
});
