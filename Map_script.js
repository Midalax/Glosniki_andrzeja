// var map;

//         // Funkcja inicjująca mapę
//         function initMap() {
//             // Współrzędne dla centrum mapy (np. Warszawa)
//             var center = { lat: 50.09737246885462, lng: 20.070681341066955 };

//             // Tworzenie obiektu mapy
//             map = new google.maps.Map(document.getElementById('map'), {
//                 zoom: 10, // Poziom przybliżenia
//                 center: center // Ustawienie centrum mapy
//             });

//             // Dodawanie znacznika na mapie (początkowego)
//             var marker = new google.maps.Marker({
//                 position: center, // Ustawienie pozycji znacznika na centrum mapy
//                 map: map // Określenie, na której mapie ma być umieszczony znacznik
//             });
//         }

//         // Funkcja znajdująca trasę do wprowadzonego adresu
//         function findRoute() {
//             var geocoder = new google.maps.Geocoder();
//             var destination = document.getElementById('destination').value;

//             geocoder.geocode({ 'address': destination }, function (results, status) {
//                 if (status === 'OK') {
//                     var destinationLocation = results[0].geometry.location;

//                     // Utworzenie obiektu trasy
//                     var directionsService = new google.maps.DirectionsService();
//                     var directionsRenderer = new google.maps.DirectionsRenderer({
//                         map: map
//                     });

//                     // Ustalenie parametrów trasy
//                     var request = {
//                         origin: map.getCenter(), // Punkt początkowy - centrum mapy
//                         destination: destinationLocation,
//                         travelMode: 'DRIVING' // Tryb podróży - jazda samochodem
//                     };

//                     // Wyświetlenie trasy na mapie
//                     directionsService.route(request, function (result, status) {
//                         if (status == 'OK') {
//                             directionsRenderer.setDirections(result);

//                             // Obliczanie długości trasy
//                             var route = result.routes[0];
//                             var distance = 0;
//                             for (var i = 0; i < route.legs.length; i++) {
//                                 distance += route.legs[i].distance.value;
//                             }
//                             var distanceInKm = distance / 1000;
//                             document.getElementById('distance').innerText = "Długość trasy: " + distanceInKm.toFixed(2) + " km" +distanceInKm.toFixed(2)*3+" - szacowany koszt dostawy";
//                         } else {
//                             window.alert('Nie można znaleźć trasy: ' + status);
//                         }
//                     });
//                 } else {
//                     window.alert('Nie można znaleźć adresu: ' + status);
//                 }
//             });
//         }

//         // Funkcja wyświetlająca sugestie adresów podczas wprowadzania tekstu
//         function autocompleteAddress() {
//             var input = document.getElementById('destination');
//             var autocomplete = new google.maps.places.Autocomplete(input);

//             autocomplete.addListener('place_changed', function() {
//                 var place = autocomplete.getPlace();
//                 if (!place.geometry) {
//                     window.alert("Nie można znaleźć tego miejsca.");
//                     return;
//                 }
//             });
//         }

//         // Inicjowanie funkcji autouzupełniania przy załadowaniu strony
//         window.onload = autocompleteAddress;
