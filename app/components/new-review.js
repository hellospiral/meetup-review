import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

  ratingProperty: "",

  displayRatingProperty: Ember.computed('ratingProperty', function() {
    return this.get('ratingProperty.rating');
  }),

  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    updateRating(rating) {
      this.set('ratingProperty', rating);
    },

    save1() {
      var params = {
        username: this.get('username'),
        comment: this.get('comment'),
        rating: this.get('ratingProperty.rating'),
        meetup: this.get('meetup'),
        timestamp: Date.now()
      };
      this.set('addNewReview', false);
      this.sendAction('save2', params);
      this.set('username', "");
      this.set('comment', "");
      this.set('ratingProperty', "");
    }
  }
});
