export default function() {

	this.urlPrefix = 'http://192.168.125.64';
	this.namespace = '/oauth2';

	this.post('/access_token', function() {
		return {
			"token_type": "Bearer",
			"expires_in": 86400,
			"access_token": "fake",
			"refresh_token": "fake"
		};
	});

	this.namespace = '/';
	this.post('/pictures', function() {
		return {
			"links": {
				"self": "http://192.168.125.64//pictures?page=1",
				"prev": "http://192.168.125.64//pictures?page=1",
				"next": "http://192.168.125.64//pictures?page=2",
				"first": "http://192.168.125.64//pictures?page=1",
				"last": "http://192.168.125.64//pictures?page=3771",
				"meta": {
					"total-pages": 3771,
					"total-items": 45250
				}
			},
			"data": [{
					"type": "pictures",
					"id": "4",
					"attributes": {
						"type": "0",
						"item-id": "12",
						"geokret-id": 0,
						"owner-id": "1",
						"filename": "1196418426b7cyc.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196418426b7cyc.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196418426b7cyc.jpg",
						"description": "An example",
						"timestamp": "2007-11-30 10:27:07"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/4"
					}
				},
				{
					"type": "pictures",
					"id": "5",
					"attributes": {
						"type": "0",
						"item-id": "12",
						"geokret-id": 0,
						"owner-id": "1",
						"filename": "1196418439oauzr.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196418439oauzr.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196418439oauzr.jpg",
						"description": "Yet another example",
						"timestamp": "2007-11-30 10:27:20"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/5"
					}
				},
				{
					"type": "pictures",
					"id": "6",
					"attributes": {
						"type": "1",
						"item-id": "7",
						"geokret-id": 0,
						"owner-id": "1",
						"filename": "1196418476cl1ho.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196418476cl1ho.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196418476cl1ho.jpg",
						"description": "We were there",
						"timestamp": "2007-11-30 10:27:57"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/6"
					}
				},
				{
					"type": "pictures",
					"id": "7",
					"attributes": {
						"type": "0",
						"item-id": "35",
						"geokret-id": 0,
						"owner-id": "39",
						"filename": "1196528334xdc3w.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196528334xdc3w.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196528334xdc3w.jpg",
						"description": "The beginning",
						"timestamp": "2007-12-01 16:58:55"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/7"
					}
				},
				{
					"type": "pictures",
					"id": "8",
					"attributes": {
						"type": "1",
						"item-id": "296",
						"geokret-id": 138,
						"owner-id": "1",
						"filename": "1196543200qr6rk.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196543200qr6rk.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196543200qr6rk.jpg",
						"description": "Cała rodzina",
						"timestamp": "2007-12-03 07:45:18"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/8"
					}
				},
				{
					"type": "pictures",
					"id": "9",
					"attributes": {
						"type": "0",
						"item-id": "136",
						"geokret-id": 136,
						"owner-id": "30",
						"filename": "1196641230ra607.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196641230ra607.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196641230ra607.jpg",
						"description": "Jest na prawdę heavy !  :D",
						"timestamp": "2009-11-20 20:16:24"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/9"
					}
				},
				{
					"type": "pictures",
					"id": "10",
					"attributes": {
						"type": "1",
						"item-id": "325",
						"geokret-id": 136,
						"owner-id": "30",
						"filename": "1196642433ntjta.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196642433ntjta.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196642433ntjta.jpg",
						"description": "*********",
						"timestamp": "2007-12-03 07:42:39"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/10"
					}
				},
				{
					"type": "pictures",
					"id": "11",
					"attributes": {
						"type": "0",
						"item-id": "139",
						"geokret-id": 139,
						"owner-id": "1",
						"filename": "1196667657en6sy.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196667657en6sy.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196667657en6sy.jpg",
						"description": "The trip of Mr&oacute;wkojad",
						"timestamp": "2009-11-20 20:16:24"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/11"
					}
				},
				{
					"type": "pictures",
					"id": "12",
					"attributes": {
						"type": "0",
						"item-id": "49",
						"geokret-id": 49,
						"owner-id": "2",
						"filename": "1196670257j0vqz.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196670257j0vqz.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196670257j0vqz.jpg",
						"description": "GeoKret",
						"timestamp": "2009-11-20 20:16:24"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/12"
					}
				},
				{
					"type": "pictures",
					"id": "13",
					"attributes": {
						"type": "0",
						"item-id": "48",
						"geokret-id": 48,
						"owner-id": "2",
						"filename": "119667034391goi.jpg",
						"picture-url": "https://geokrety.org/obrazki/119667034391goi.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/119667034391goi.jpg",
						"description": "GeoKret",
						"timestamp": "2009-11-20 20:16:24"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/13"
					}
				},
				{
					"type": "pictures",
					"id": "14",
					"attributes": {
						"type": "0",
						"item-id": "47",
						"geokret-id": 47,
						"owner-id": "2",
						"filename": "1196670375zfni6.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196670375zfni6.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196670375zfni6.jpg",
						"description": "GeoKret",
						"timestamp": "2009-11-20 20:16:24"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/14"
					}
				},
				{
					"type": "pictures",
					"id": "15",
					"attributes": {
						"type": "0",
						"item-id": "129",
						"geokret-id": 129,
						"owner-id": "122",
						"filename": "1196706951fts38.jpg",
						"picture-url": "https://geokrety.org/obrazki/1196706951fts38.jpg",
						"thumbnail-url": "https://geokrety.org/obrazki-male/1196706951fts38.jpg",
						"description": "Der GeoKret und sein Geburtscache",
						"timestamp": "2009-11-20 20:16:24"
					},
					"links": {
						"self": "http://192.168.125.64//pictures/15"
					}
				}
			]
		};
	});
}
