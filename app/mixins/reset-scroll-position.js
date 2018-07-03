import Mixin from '@ember/object/mixin';

export default Mixin.create({
  activate: function() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});
