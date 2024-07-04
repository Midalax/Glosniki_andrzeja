var subject;
var supplement_list="\0";
var where;
function Option_creator()
{
    if(Option_state[0]==true)
        {
            subject = 'Zestaw podstawowy';
        }
    else if(Option_state[1]==true)
        {
            subject = 'Zestaw rozszerzony';
        }
    else if(Option_state[2]==true)
        {
            subject = 'Zestaw pełny';
        }
    else
        {
            subject = 'Zestaw: Brak!';
        }

}

function Supplement_creator()
{
    if(Supplement_A_state==true)
        {
            supplement_list =  supplement_list+"Mikrofon przewodowy";
        }
    else if(Supplement_B_state==true)
        {
                supplement_list =  supplement_list+"Mikrofon bezprzewodowy";
        }
    else if(Supplement_C_state==true)
        {
                    supplement_list =  supplement_list+"Dodatkowe 2L płynu do dymiarki";
        }
    else if(Supplement_A_state==false && Supplement_B_state == false && Supplement_C_state == false)
    {
        supplement_list = "Bez dodatków"
    }
    
}

function Get_destination(place)
{
    if(destinationLocation == null)
        {
            where = 'Nie wybrano lokalizacji! \n (proszę podać adres)'; 
        }
    else{
        where=destinationLocation;
    }
    
}

function openMail() {

    Option_creator();
    Supplement_creator();
    Get_destination();
      const email = 'korpand@gmail.com';
      
      const body = 'Dzień dobry, \n\n\n Numer kontaktowy: \n Imię i nazwisko: \n' + subject + ' z dodatkami: \n' + supplement_list+'\nDo lokalizacji:\n'+where;

      

      var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailtoLink;
    }