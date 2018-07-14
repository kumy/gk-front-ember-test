import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  preventVote: computed(function() {
    let geokret = this.get('geokret');
    if (geokret.trackingCode) {
      return false;
    }
    return true;
  })
});
