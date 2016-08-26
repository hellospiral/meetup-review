import Ember from 'ember';

export default Ember.Route.extend({
  myMeetups: Ember.inject.service(),

  model(params) {
    return Ember.RSVP.hash({
      meetup: this.store.findRecord('meetup', params.meetup_id),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    addToMyMeetups(item) {
      this.get('myMeetups').add(item);
      this.transitionTo('my-meetups');
    },

    save3(params) {
      var newReview = this.store.createRecord('review', params);
      var meetup = params.meetup;
      meetup.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return meetup.save();
      });
    }
  }
});
