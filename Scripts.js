var Supplement_A_state = false,
    Supplement_B_state = false,
    Supplement_C_state = false;

var Option_state = [false, false, false, false];

var Option_A_price = 100,
    Option_B_price = 200,
    Option_C_price = 500;

var Supplement_A_price = 10,
    Supplement_B_price = 20,
    Supplement_C_price = 50;


var price_sum = 0;
var price_now = 0;
var Selected_option = 0;





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


////////////////////////////////////////////////////////


// console.log("  Option A: "+Option_state[0]+"  Option B: "+ Option_state[1]+"  Option C: "+ 



function Deselect() {
    document.getElementById("Deposit_1").style.outlineColor = "#5207ad";
    document.getElementById("Deposit_2").style.outlineColor = "#5207ad";
    document.getElementById("Deposit_3").style.outlineColor = "#5207ad";
    document.getElementById("Deposit_4").style.outlineColor = "#5207ad";
    
    for (let i = 0; i <= 3; i++)
    {
        Option_state[i]=false;
    }
}

function Select(Option_to_select, OptionPrice)
{
    Option_to_select.style.outlineColor = "#07ad15";
    console.log(Option_state);
    if (Option_to_select == true) {

        price(OptionPrice);     
    } else {

        price(OptionPrice * (-1));
    }
    //test
}

function Option_A() {

    Deselect();
    var Option_A = document.getElementById("Deposit_1");
    Option_state[0] = !Option_state[0];
    Select(Option_A, Option_A_price);
    

}

function Option_B() {

    Deselect();
    var Option_B = document.getElementById("Deposit_2");
    Option_state[1] = !Option_state[1];
    Select(Option_B);

}

function Option_C() {
    Deselect();
    var Option_C = document.getElementById("Deposit_3");
    Option_state[2] = !Option_state[2];
    Select(Option_C);

}

function Option_D() {
    Deselect();
    var Option_D = document.getElementById("Deposit_4");
    Option_state[3] = !Option_state[3];
    Select(Option_D);
   

}
////////////////////////////////////////////////////////////

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
///////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
function price(OptionalPrice) {
    var currentprice = document.getElementById("price");

    price_now = OptionalPrice + price_now;
    price_sum = price_now;

    currentprice.innerHTML = "Cena = " + price_sum + "zł";




}



// function Option_A() {

//     var Option_1_var = document.getElementById("Deposit_1");
//     Option_state[0] = !Option_state[0];
//     Deselect(Option_state[0]);
//     Switcher(Option_state[0], Option_1_var, Option_price[0]);

// }

// function Option_B() {
//     var Option_2_var = document.getElementById("Deposit_2");
//     Option_state[1] = !Option_state[1];
//     Deselect(Option_state[1]);
//     Switcher(Option_state[1], Option_2_var, Option_price[1]);

// }

// function Option_C() {
//     var Option_3_var = document.getElementById("Deposit_3");
//     Option_state[2] = !Option_state[2];
//     Deselect(Option_state[2]);
//     Switcher(Option_state[2], Option_3_var, Option_price[1]);
// }

// function Option_D() {
//     var Option_D_var = document.getElementById("Deposit_4");
//     Option_D_state = !Option_D_state;
//     Switcher(Option_D_state, Option_D_var, Option_D_price);
// }
// ////////////////////////////////////////////////////////////
// function Switcher(OptionONNOFF, OptionDiv, OptionPrice) {
//     if (OptionONNOFF == true) {

//         price(OptionPrice);

//         OptionDiv.style.outlineColor = "#07ad15";
//         OptionONNOFF = true;
//     } else {


//         price(OptionPrice * (-1));
//         OptionDiv.style.outlineColor = "#5207ad";
//         OptionONNOFF = false;
//     }
// }