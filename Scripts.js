var Supplement_A_state = false,
    Supplement_B_state = false,
    Supplement_C_state = false;

var Option_state = [false, false, false, false];

var Option_A_price = 100,
    Option_B_price = 200,
    Option_C_price = 500,
    Option_D_price = 700;

var Supplement_A_price = 10,
    Supplement_B_price = 20,
    Supplement_C_price = 50;


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
    document.getElementById("Deposit_1").style.outlineColor = "#5207ad";
    document.getElementById("Deposit_2").style.outlineColor = "#5207ad";
    document.getElementById("Deposit_3").style.outlineColor = "#5207ad";
    document.getElementById("Deposit_4").style.outlineColor = "#5207ad";
    
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
    Option_to_select.style.outlineColor = "#07ad15";
    console.log(Option_state);
   
}

function Option_A() {

    
    var Option_A = document.getElementById("Deposit_1");
    Deselect(Option_state[0]);
    Option_state[0] = !Option_state[0];
    Select(Option_A, Option_A_price);
    Option_price_buffor = Option_A_price;
    price(Option_price_buffor);
    
}

function Option_B() {

    Deselect();
    var Option_B = document.getElementById("Deposit_2");
    Option_state[1] = !Option_state[1];
    Select(Option_B);
    Option_price_buffor = Option_B_price;
    price(Option_price_buffor);
    
}

function Option_C() {
    Deselect();
    var Option_C = document.getElementById("Deposit_3");
    Option_state[2] = !Option_state[2];
    Select(Option_C);
    Option_price_buffor = Option_C_price;
    price(Option_price_buffor);
}

function Option_D() {
    Deselect();
    var Option_D = document.getElementById("Deposit_4");
    Option_state[3] = !Option_state[3];
    Select(Option_D);
    Option_price_buffor = Option_D_price;
    price(Option_price_buffor);

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

    price_now = OptionalPrice + price_now;
    price_sum = price_now;

    currentprice.innerHTML = "Cena = " + price_sum + "zł";




}



