// var map;
// var directionsRenderer; // Definicja zmiennej globalnej

// // Funkcja inicjująca mapę
// function initMap() {
//     // Współrzędne dla centrum mapy (np. Warszawa)
//     var center = { lat: 50.09737246885462, lng: 20.070681341066955 };

//     // Tworzenie obiektu mapy
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 10, // Poziom przybliżenia
//         center: center // Ustawienie centrum mapy
//     });

//     // Tworzenie obiektu do wyświetlania trasy
//     directionsRenderer = new google.maps.DirectionsRenderer({
//         map: map
//     });
// }

// // Funkcja resetująca mapę
// function resetMap() {
//     // Usunięcie znacznika trasy
//     directionsRenderer.setMap(null);

//     // Czyszczenie wyników trasy
//     document.getElementById('distance').innerText = "";
//     document.getElementById('Dist_price').innerText = "";

//     // Usunięcie wartości z pola wprowadzania adresu docelowego
//     document.getElementById('destination').value = "";
//     initMap();
// }

// // Funkcja znajdująca trasę do wprowadzonego adresu
// function findRoute() {
//     var geocoder = new google.maps.Geocoder();
//     var destination = document.getElementById('destination').value;

//     geocoder.geocode({ 'address': destination }, function (results, status) {
//         if (status === 'OK') {
//             var destinationLocation = results[0].geometry.location;

//             // Ustalenie parametrów trasy
//             var request = {
//                 origin: map.getCenter(), // Punkt początkowy - centrum mapy
//                 destination: destinationLocation,
//                 travelMode: 'DRIVING' // Tryb podróży - jazda samochodem
//             };

//             // Wyświetlenie trasy na mapie
//             var directionsService = new google.maps.DirectionsService();
//             directionsService.route(request, function (result, status) {
//                 if (status == 'OK') {
//                     directionsRenderer.setDirections(result);

//                     // Obliczanie długości trasy
//                     var route = result.routes[0];
//                     var distance = 0;
//                     for (var i = 0; i < route.legs.length; i++) {
//                         distance += route.legs[i].distance.value;
//                     }
//                     var distanceInKm = distance / 1000;
//                     document.getElementById('distance').innerText = "Długość trasy: " + (distanceInKm.toFixed(2)) + " km";
//                     document.getElementById('Dist_price').innerText = "Cena: " +((distanceInKm.toFixed(2)-FreeKM)*3).toFixed(2) + " zł";

//                 } else {
//                     window.alert('Nie można znaleźć trasy: ' + status);
//                 }
//             });
//         } else {
//             window.alert('Nie można znaleźć adresu: ' + status);
//         }
//     });
// }

// // Funkcja wyświetlająca sugestie adresów podczas wprowadzania tekstu
// function autocompleteAddress() {
//     var input = document.getElementById('destination');
//     var autocomplete = new google.maps.places.Autocomplete(input);

//     autocomplete.addListener('place_changed', function () {
//         var place = autocomplete.getPlace();
//         if (!place.geometry) {
//             window.alert("Nie można znaleźć tego miejsca.");
//             return;
//         }
//     });
// }




// // Inicjowanie funkcji autouzupełniania przy załadowaniu strony
// window.onload = autocompleteAddress;
