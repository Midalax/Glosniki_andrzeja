var Supplement_A_state = false,
    Supplement_B_state = false,
    Supplement_C_state = false;


var Option_state = [false, false, false, false];

var color_selected = "#07ad15";

var color_base = "#5207ad";

var Option_A_price = 300, //zestaw podstawowy
    Option_B_price = 400, //zestaw rozrzeszony
    Option_C_price = 450; //zestaw pełny

var Option_A_free = 10, //zestaw podstawowy
    Option_B_free = 15, //zestaw rozrzeszony
    Option_C_free = 20; //zestaw pełny

var Option_A_km = 10, //zestaw podstawowy
    Option_B_km = 15, //zestaw rozrzeszony
    Option_C_km = 20; //zestaw pełny

var Supplement_A_price = 20, //mikrofon przewodowy
    Supplement_B_price = 50, //mikrofon bezprzewodowy
    Supplement_C_price = 10; //płyn do dymiarki

 var FreeKM=0;

var price_sum = 0;
var price_now = 0;
var Option_price_buffor = 0;

function Supplement_A() {
    var Opt_a = document.getElementById("Accessories");
    Supplement_A_state = !Supplement_A_state;
    console.log(Supplement_A_state);
    TrunONOFF(Supplement_A_state, Opt_a, Supplement_A_price);
}


function Supplement_B() {
    var Opt_b = document.getElementById("Accessories2");
    Supplement_B_state = !Supplement_B_state;
    console.log(Supplement_B_state);
    TrunONOFF(Supplement_B_state, Opt_b, Supplement_B_price);
}

function Supplement_C() {
    var Opt_C = document.getElementById("Accessories3");
    Supplement_C_state = !Supplement_C_state;
    console.log(Supplement_C_state);
    TrunONOFF(Supplement_C_state, Opt_C, Supplement_C_price);
}




function Deselect(Except, price_except) {
    document.getElementById("Deposit_1").style.borderColor = color_base;
    document.getElementById("Deposit_2").style.borderColor = color_base;
    document.getElementById("Deposit_3").style.borderColor = color_base;
    
    
    for (let i = 0; i <= 3; i++)
    {
        Option_state[i]=false;
        Except=true;
    }
    console.log(Option_price_buffor);
    price(Option_price_buffor*(-1));
}

function Select(Option_to_select)
{
    Option_to_select.style.borderColor = color_selected;
    
    console.log("wybieram");
   
}

function Option_A() {

    console.log("Działam Opcion A")
    var Option_A = document.getElementById("Deposit_1");
    Deselect(Option_state[0]);
    Option_state[0] = !Option_state[0];
    Select(Option_A, Option_A_price);
    Option_price_buffor = Option_A_price;
    price(Option_price_buffor);
    FreeKM = Option_A_free;
    
}

function Option_B() {

    Deselect();
    var Option_B = document.getElementById("Deposit_2");
    Option_state[1] = !Option_state[1];
    Select(Option_B);
    Option_price_buffor = Option_B_price;
    price(Option_price_buffor);
    FreeKM = Option_B_free;
}

function Option_C() {
    Deselect();
    var Option_C = document.getElementById("Deposit_3");
    Option_state[2] = !Option_state[2];
    Select(Option_C);
    Option_price_buffor = Option_C_price;
    price(Option_price_buffor);
    FreeKM = Option_C_free;
}



////////////////////////////////////////////////////////////
function TrunONOFF(OptionONNOFF, OptionDiv, OptionPrice) {
    if (OptionONNOFF == true) {

        price(OptionPrice);
        OptionDiv.style.outlineColor = "#07ad15";
    } else {

        price(OptionPrice * (-1));
        OptionDiv.style.outlineColor = "#5207ad";

    }

}
//////////////////////////////////////////////////////////////
function price(OptionalPrice) {
    var currentprice = document.getElementById("price");
    console.log("LICZE")
    price_now = OptionalPrice + price_now;
    console.log(price_now+"price now")
    price_sum = price_now;
    console.log(price_sum+"price sum")
    currentprice.innerHTML = "Cena = " + price_sum + "zł";
}