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
  this.get('/pictures', function() {
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

  this.get('/news', function() {
    return {
      "links": {
        "self": "http://192.168.125.64//news?limit=3&order=-date&page=1",
        "prev": "http://192.168.125.64//news?limit=3&order=-date&page=1",
        "next": "http://192.168.125.64//news?limit=3&order=-date&page=2",
        "first": "http://192.168.125.64//news?limit=3&order=-date&page=1",
        "last": "http://192.168.125.64//news?limit=3&order=-date&page=58",
        "meta": {
          "total-pages": 58,
          "total-items": 173
        }
      },
      "data": [{
          "type": "news",
          "id": "177",
          "attributes": {
            "date": "2016-12-24 14:48:38",
            "czas-postu": "0000-00-00 00:00:00",
            "title": "Merry Christmas from the GK team!",
            "user-id": 0,
            "username": "GK Team",
            "content": "<img style=\"float:left;margin-right:7px;\" src=\"/img/logo/kret-swieta.png\" alt=\"news image\" /><div>Merry Christmas from the GK team! * Wesołych Świąt od zespołu GK! * Frohe Weihnachten aus dem GK-Team! * يد ميلاد سعيد منالمنتخب حارس مرمى! * З Калядамі Хрыстовым ад каманды ГК! * Veselé Vánoce z týmu GK! * Veselé Vianoce z tímu GK! * Häid jõule alates GK meeskond! * Joyeux Noël de l'équipe de GK! * Hyvää joulua GK joukkue! * Καλά Χριστούγεννα από την ομάδα GK! * Boldog karácsonyt a GK csapat! * Buon Natale dal team di GK! * С Рождеством Христовым от команды ГК! * God Jul från GK-teamet! * Feliz Navidad desde el equipo de GK!</div><div style=\"clear:both;\"></div>",
            "comments-count": 1,
            "last-comment": "2016-12-26 12:00:08"
          },
          "links": {
            "self": "http://192.168.125.64//news/177"
          }
        },
        {
          "type": "news",
          "id": "176",
          "attributes": {
            "date": "2016-10-26 19:26:09",
            "czas-postu": "0000-00-00 00:00:00",
            "title": "Today: 9th birthday and 1000000 logs!",
            "user-id": 0,
            "username": "GK Team",
            "content": "<img style=\"float:left;margin-right:7px;\" src=\"http://geokrety.org/templates/gk-9urodziny.png\" alt=\"news image\" /><div><img src=\"https://geokrety.org/templates/country_codes/gb.png\" alt=\"en\"/> Nine years ago, at 21:36, we launched a small site for registering traveling items. And today we passed the level of 1000000 logs in our databse! We have 60232 registered GeoKrets and 35327 users. All geokrets done about 0.57982 x the distance from the Earth to the Sun. Statistically, new geokret is registered every 1.3 hour, while new log entry is entered every 4.7 min. Happy bithday and thank you, the users, for keeping geokrety moving! :)<br />\r\n<img src=\"https://geokrety.org/templates/country_codes/pl.png\" alt=\"pl\"/> Dziewięć lat temu uruchomiliśmy niewielką stronkę służącą rejestracji przedmiotów podróżnych. Dziś strona nieco się rozrosła, mamy 60232 zarejestrowanych GeoKretów i 35327 użytkowników, a wszystkie geokrety przebyły łącznie odległość równą 0,57982 odległości z Ziemi na Słońca. Dodatkowo, dziś przekroczyliśmy granicę 1000000 logów w naszej bazie danych. Statystycznie nowy kret rejestrowany jest co 1,3 godziny a nowy wpis do logu następuje co 4,7 minuty. Wszystkiego dobrego z okazji urodzin! Dziękujemy też naszym użytownikom za wprawianie kretów w ruch. Tak trzymać! :)</div><div style=\"clear:both;\"></div>",
            "comments-count": 1,
            "last-comment": "2016-11-01 20:09:36"
          },
          "links": {
            "self": "http://192.168.125.64//news/176"
          }
        },
        {
          "type": "news",
          "id": "175",
          "attributes": {
            "date": "2016-05-23 19:50:57",
            "czas-postu": "0000-00-00 00:00:00",
            "title": "10th birthday of opencaching.pl",
            "user-id": 0,
            "username": "GK Team",
            "content": "<img style=\"float:left;margin-right:7px;\" src=\"https://geokrety.org/templates/10_lat_oc.png\" alt=\"news image\" /><div><img src=\"https://geokrety.org/templates/country_codes/gb.png\" alt=\"en\"/> Best wishes for our friends from <a href=\"http://opencaching.pl/\">opencaching.pl</a> on the 10th Birthday of the service!<br />\r\n<img src=\"https://geokrety.org/templates/country_codes/pl.png\" alt=\"pl\"/> Najlepsze życzenia dla koleżanek i kolegów z <a href=\"http://opencaching.pl/\">opencaching.pl</a> z okazji dziesiątych urodzin serwisu!</div><div style=\"clear:both;\"></div>",
            "comments-count": 1,
            "last-comment": "2016-08-03 21:31:52"
          },
          "links": {
            "self": "http://192.168.125.64//news/175"
          }
        }
      ]
    }
  });
}
