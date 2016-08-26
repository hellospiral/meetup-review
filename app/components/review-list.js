import Ember from 'ember';

export default Ember.Component.extend({
  averageRating: Ember.computed('meetup.reviews', function() {
    var reviews = this.get('meetup.reviews');
    var ratingsArray = reviews.getEach('rating');
    var total = 0;
    for (var i = 0; i < ratingsArray.length; i++) {
      total += ratingsArray[i];
    }
    return (total / ratingsArray.length).toFixed([1]);
  })
});
