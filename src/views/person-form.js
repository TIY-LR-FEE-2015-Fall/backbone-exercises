// Grab the PersonModel
import PersonModel from '../models/person';

export default Backbone.View.extend({
  firstNameInput: null,
  lastNameInput: null,
  addressInput: null,
  phoneInput: null,

  initialize() {
    this.firstNameInput = this.$el.find('#person-form__first-name');
    this.lastNameInput = this.$el.find('#person-form__last-name');
    this.addressInput = this.$el.find('#person-form__address');
    this.phoneInput = this.$el.find('#person-form__phone');
  },

  clearForm() {
    this.firstNameInput.val('');
    this.lastNameInput.val('');
    this.addressInput.val('');
    this.phoneInput.val('');
  },

  // Listen for events
  events: {
    // Form to Submit
    submit() {
      // Get User Input
      var firstName = this.firstNameInput.val();
      var lastName = this.lastNameInput.val();
      var address = this.addressInput.val();
      var phone = this.phoneInput.val();

      // Create a new Person instance
      var person = new PersonModel({firstName, lastName, address, phone});

      // Save it to the server
      person.save().then(() => {
        alert('Contact has been saved');

        this.clearForm();
      });
    },
  },
});
