// var map;
// var directionsRenderer;
// var destinationLocation = null; // Publiczna zmienna do przechowywania danych docelowej lokalizacji

// // Funkcja inicjująca mapę
// function initMap() {
//   var center = { lat: 50.09737246885462, lng: 20.070681341066955 };
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: center
//   });
//   directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
// }

// // Funkcja resetująca mapę
// function resetMap() {
//   directionsRenderer.setMap(null);
//   document.getElementById('distance').innerText = "";
//   document.getElementById('Dist_price').innerText = "";
//   document.getElementById('destination').value = "";
//   initMap();
// }

// // Funkcja znajdująca trasę do wprowadzonego adresu
// function findRoute() {
//   var geocoder = new google.maps.Geocoder();
//   var destination = document.getElementById('destination').value;
//   geocoder.geocode({ 'address': destination }, function (results, status) {
//     if (status === 'OK') {
//       destinationLocation = results[0].geometry.location; // Zapisanie lokalizacji docelowej w publicznej zmiennej
//       var request = {
//         origin: map.getCenter(),
//         destination: destinationLocation,
//         travelMode: 'DRIVING'
//       };
//       var directionsService = new google.maps.DirectionsService();
//       directionsService.route(request, function (result, status) {
//         if (status == 'OK') {
//           directionsRenderer.setDirections(result);
//           var route = result.routes[0];
//           var distance = 0;
//           for (var i = 0; i < route.legs.length; i++) {
//             distance += route.legs[i].distance.value;
//           }
//           var distanceInKm = distance / 1000;
//           document.getElementById('distance').innerText = "Długość trasy: " + (distanceInKm.toFixed(2)) + " km";

//           if (((distanceInKm - FreeKM) * 3) <= 0) {
//             document.getElementById('Dist_price').innerText = "Transport darmowy!";
//           } else {
//             document.getElementById('Dist_price').innerText = "Cena za transport: " + (((distanceInKm - FreeKM) * 3).toFixed(2) + price_sum) + " zł";
//           }
//         } else {
//           window.alert('Nie można znaleźć trasy: ' + status);
//         }
//       });
//     } else {
//       window.alert('Nie można znaleźć adresu: ' + status);
//     }
//   });
// }

// // Funkcja wyświetlająca sugestie adresów podczas wprowadzania tekstu
// function autocompleteAddress() {
//   var input = document.getElementById('destination');
//   var autocomplete = new google.maps.places.Autocomplete(input);
//   autocomplete.addListener('place_changed', function () {
//     var place = autocomplete.getPlace();
//     if (!place.geometry) {
//       window.alert("Nie można znaleźć tego miejsca.");
//       return;
//     }
//     destinationLocation = place.geometry.location; // Zapisanie lokalizacji docelowej w publicznej zmiennej
//     console.log("Wybrane miejsce:", place);
//   });
// }

// // Inicjowanie funkcji autouzupełniania przy załadowaniu strony
// window.onload = function () {
//   initMap();
//   autocompleteAddress();
// };