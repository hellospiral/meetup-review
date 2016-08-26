import Ember from 'ember';

export default Ember.Component.extend({
  addMeetup: false,
  actions: {
    addMeetupShow() {
      this.set('addMeetup', true);
    },

    add() {
      var categoriesArray = this.get('categories').split(',');

      var params = {
        name: this.get('name'),
        image: this.get('image'),
        description: this.get('description'),
        specialty: this.get('specialty'),
        url: this.get('url'),
        categories: categoriesArray
      };
      this.set('addMeetup', false);
      this.sendAction('add', params);
      this.set('name', "");
      this.set('image', "");
      this.set('description', "");
      this.set('specialty', "");
      this.set('categories', "");
      this.set('url', "");
    }
  }

});
