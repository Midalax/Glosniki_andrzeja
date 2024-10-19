var map;
var directionsRenderer;
var directionsService;
var destinationLocation = null; // Publiczna zmienna do przechowywania danych docelowej lokalizacji
var originLocation = { lat: 50.09737246885462, lng: 20.070681341066955 }; // Stała wartość punktu początkowego

// Funkcja inicjująca mapę
function initMap() {
var styledMapType = new google.maps.StyledMapType(
  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#9d38f5"
        },
        {
          "weight": 0.5
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#750bd2"
        },
        {
          "weight": 1
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#750bd2"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#5a2c81"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ],
  {name: 'Styled Map'});

map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: originLocation,
  mapTypeControlOptions: {
    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
  }
});

directionsService = new google.maps.DirectionsService();

directionsRenderer = new google.maps.DirectionsRenderer({
  map: map,
  markerOptions: {
    icon: {
      url: 'images/Korpand_logo_map_point.svg', // Zamień na URL do Twojego obrazka
      scaledSize: new google.maps.Size(50, 50) // Dopasuj rozmiar do swoich potrzeb
    }
  }
});

map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');
}

// Funkcja resetująca mapę
function resetMap() {
  directionsRenderer.setMap(null);
  document.getElementById('distance').innerText = "";
  document.getElementById('Dist_price').innerText = "";
  document.getElementById('destination').value = "";
  initMap();
}

// Funkcja znajdująca trasę do wprowadzonego adresu
function findRoute() {
  var geocoder = new google.maps.Geocoder();
  var destination = document.getElementById('destination').value;
  geocoder.geocode({ 'address': destination }, function (results, status) {
    if (status === 'OK') {
      destinationLocation = results[0].geometry.location; // Zapisanie lokalizacji docelowej w publicznej zmiennej
      var request = {
        origin: originLocation, // Użyj stałej wartości jako punktu początkowego
        destination: destinationLocation,
        travelMode: 'DRIVING'
      };

      directionsService.route(request, function (result, status) {
        if (status == 'OK') {
          directionsRenderer.setDirections(result);
          var route = result.routes[0];
          var distance = 0;
          for (var i = 0; i < route.legs.length; i++) {
            distance += route.legs[i].distance.value;
          }
          var distanceInKm = distance / 1000;
          document.getElementById('distance').innerText = "Długość trasy: " + (distanceInKm.toFixed(2)) + " km";

          if (((distanceInKm - FreeKM) * 3) <= 0) {
            document.getElementById('Dist_price').innerText = "Transport darmowy!";
          } else {
            document.getElementById('Dist_price').innerText = "Cena za transport: " + (((distanceInKm - FreeKM) * 3).toFixed(2) + price_sum) + " zł";
          }
        } else {
          window.alert('Nie można znaleźć trasy: ' + status);
        }
      });
    } else {
      window.alert('Nie można znaleźć adresu: ' + status);
    }
  });
}

// Funkcja wyświetlająca sugestie adresów podczas wprowadzania tekstu
function autocompleteAddress() {
  var input = document.getElementById('destination');
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', function () {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Nie można znaleźć tego miejsca.");
      return;
    }
    destinationLocation = place.geometry.location; // Zapisanie lokalizacji docelowej w publicznej zmiennej
    console.log("Wybrane miejsce:", place);
  });
}

// Inicjowanie funkcji autouzupełniania przy załadowaniu strony
window.onload = function () {
  initMap();
  autocompleteAddress();
};
