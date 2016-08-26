import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  rating: DS.attr(),
  comment: DS.attr(),
  timestamp: DS.attr(),
  meetup: DS.belongsTo('meetup', {async: true})
});
