import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('meetup');
  },

  actions: {
    add(params) {
      var newMeetup = this.store.createRecord('meetup', params);
      newMeetup.save();
    }
  }
});
