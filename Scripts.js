// Stany suplementów i opcji
var Supplement_state = [false, false, false]; // A, B, C
var Option_state = [false, false, false]; // A, B, C
var color_selected = "#07ad15", color_base = "#5207ad";

// Ceny i dodatkowe opcje
var Option_prices = [300, 400, 450]; // zestawy podstawowy, rozszerzony, pełny
var Supplement_prices = [20, 50, 30]; // mikrofon przewodowy, bezprzewodowy, spódnica
var Option_free_km = [10, 15, 20]; 

var FreeKM = 0, price_sum = 0, Option_price_buffor = 0;

// Funkcje wyboru suplementów
function ToggleSupplement(index, id) {
    Supplement_state[index] = !Supplement_state[index]; // Zmieniamy stan
    var priceChange = Supplement_state[index] ? Supplement_prices[index] : -Supplement_prices[index];
    UpdatePrice(priceChange); // Dodanie/odjęcie ceny
    UpdateBorderColor(id, Supplement_state[index]); // Zmiana koloru obramowania
}

function Supplement_A() { ToggleSupplement(0, "Accessories"); }
function Supplement_B() { ToggleSupplement(1, "Accessories2"); }
function Supplement_C() { ToggleSupplement(2, "Accessories3"); }

// Funkcja deselekcji wszystkich opcji
function DeselectAll() {
    ["Deposit_1", "Deposit_2", "Deposit_3"].forEach(id => document.getElementById(id).style.borderColor = color_base);
    Option_state.fill(false);
    UpdatePrice(-Option_price_buffor); // Odjęcie ceny poprzedniej opcji
}

// Funkcja wyboru opcji
function SelectOption(index, id) {
    if (Option_state[index]) return; // Jeśli już jest wybrana, nie rób nic

    DeselectAll(); // Odznacz wszystkie inne opcje
    Option_state[index] = true; // Zaznacz aktualnie wybraną
    Option_price_buffor = Option_prices[index]; // Zapisujemy aktualną cenę do buffora
    FreeKM = Option_free_km[index]; // Zaktualizuj darmowe kilometry
    UpdatePrice(Option_price_buffor); // Dodajemy cenę opcji
    UpdateBorderColor(id, true); // Zmiana koloru obramowania opcji
}

// Funkcje dla opcji
function Option_A() { SelectOption(0, "Deposit_1"); }
function Option_B() { SelectOption(1, "Deposit_2"); }
function Option_C() { SelectOption(2, "Deposit_3"); }

// Aktualizacja ceny
function UpdatePrice(amount) {
    price_sum += amount; // Aktualizacja sumy ceny
    document.getElementById("price").innerHTML = price_sum + "zł"; // Aktualizacja wyświetlanej ceny
}

// Aktualizacja koloru obramowania
function UpdateBorderColor(elementId, isSelected) {
    var element = document.getElementById(elementId);
    element.style.outlineColor = isSelected ? color_selected : color_base; // Zmiana koloru granicy
}

// Funkcje przycisków wyboru
function UnchooseAll() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById("choose_button" + i).style = "background-color: #000; outline-color: #750BD2";
        document.getElementById("choose_button" + i).innerText = "Wybierz";
    }
}

function Choose(buttonIndex) {
    UnchooseAll(); // Odznacz wszystkie przyciski
    let button = document.getElementById("choose_button" + buttonIndex);
    button.style.outlineColor = color_selected;
    button.innerHTML = '<i class="fa-solid fa-check"></i>'; // Zaznacz wybrany przycisk
}
