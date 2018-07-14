import Component from '@ember/component';
import {computed} from '@ember/object';
/* global L */

export default Component.extend({
  bounds: computed('moves.[]', function() {
    let moves = this.get('moves');
    if (moves && moves.length > 0) {
      return L.latLngBounds(moves.map(function(move) {
        return move.get('location');
      }));
    }

    var corner1 = L.latLng(58.40, 65.5);
    var corner2 = L.latLng(34.8, -31.9);
    return L.latLngBounds(corner1, corner2);
  }),

  locations: computed('moves.[]', function() {
    let moves = this.get('moves');
    if (moves && moves.length > 0) {
      return this.get('moves').map(r => ({lat: r.latitude, lng: r.longitude}));
    }
    return [];
  }),

  isNotMobile: computed(function() {
    return !this.get('isMobile.any');
  }),

}).reopenClass({positionalParams: 'moves'});
