import Ember from 'ember';

export default Ember.Service.extend({
  meetups: [],

  add(meetup) {
    this.get('meetups').pushObject(meetup);
  }
});
