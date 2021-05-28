
function Adds(){
    
    
    if(document.getElementById("currency").value == '' || document.getElementById("currency").value<= 0 )
    {
        alert("Enter an amount greater than 0");
    }
    else if (document.getElementById("date").value == '')
    {
        alert("Please enter a valid date");
    }
    else if (document.getElementById("name").value == '')
    {
        alert("Please give the transaction a name");
    }
    else
    {
    //variable refrences
    let nameInput= document.getElementById("name");
    let dateInput= document.getElementById("date");
    let currencyInput= document.getElementById("currency");
    let table = document.getElementById("mytable");
    
    //creating row in table
    let row = table.insertRow(-1);

    //inserts cells
    let name= row.insertCell(0);
    let date = row.insertCell(1);
    let currency =row.insertCell(2);

    //displays information
    name.innerHTML = nameInput.value;
    date.innerHTML = dateInput.value;
    currency.innerHTML = "$" + currencyInput.value;

     //displays total
     total();

     //clears the text
     clears();
    }
}

function total(){
     
    let amount =  document.getElementById("currency").value;
    let currentValue = document.getElementById("totall").value;

    let add = Number(amount) +Number(currentValue); 


     document.getElementById("totall").value= add.toFixed(2);
}


function clears(){
    //clears information
    document.getElementById("currency").value = '';
    document.getElementById("date").value = '';
    document.getElementById("name").value = 'Where was the expense made?';
}

