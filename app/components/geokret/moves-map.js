import Component from '@ember/component';
import {computed} from '@ember/object';
import { sort } from '@ember/object/computed'
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

  movesSortingDesc: Object.freeze(['createdOnDateTime:desc']),
  sortedMovesDesc: sort('moves', 'movesSortingDesc'),

  locations: computed('moves.[]', function() {
    let moves = this.get('sortedMovesDesc');
    if (moves && moves.length > 0) {
      return moves.map(r => ({lat: r.latitude, lng: r.longitude}));
    }
    return [];
  }),

  isNotMobile: computed(function() {
    return !this.get('isMobile.any');
  }),

  length: computed('moves.[]', function() {
    let moves = this.get('moves');
    return moves.length-1;
  }),

  firstMoveMarkerIcon: computed(function() {
    return new L.Icon.Default({
      iconUrl: 'marker-icon-red.png',
      iconRetinaUrl: 'marker-icon-red-2x.png',
      iconSize:    [25, 41],
      iconAnchor:  [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
  }),

  intermediateMoveMarkerIcon: computed(function() {
    return new L.Icon.Default({
      iconUrl: 'marker-icon-yellow.png',
      iconRetinaUrl: 'marker-icon-yellow-2x.png',
      iconSize:    [25, 41],
      iconAnchor:  [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
  }),

  lastMoveMarkerIcon: computed(function() {
    return new L.Icon.Default({
      iconUrl: 'marker-icon-green.png',
      iconRetinaUrl: 'marker-icon-green-2x.png',
      iconSize:    [25, 41],
      iconAnchor:  [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
  })

}).reopenClass({
  positionalParams: ['moves']
});
