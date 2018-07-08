import Route from '@ember/routing/route';

import ResetScrollPositionMixin from '../mixins/reset-scroll-position';

export function initialize(/* application */) {
  Route.reopen(ResetScrollPositionMixin);
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'reset-scroll-position',
  initialize
};
