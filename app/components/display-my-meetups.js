import Ember from 'ember';

export default Ember.Component.extend({
  myMeetups: Ember.inject.service(),

  actions: {
    removeMeetup(meetup) {
       this.get('myMeetups').remove(meetup);
    }
  }
});
