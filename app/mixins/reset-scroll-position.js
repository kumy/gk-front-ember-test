import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  fastboot: service(),
  activate() {
    this._super(...arguments);
    if (!this.get('fastboot.isFastBoot')) {
      window.scrollTo(0, 0);
    }
  }
});
