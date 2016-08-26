import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  specialty: DS.attr(),
  categories: DS.attr(),
  url: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
