console.log(`
######################################################

                FIZZ-BUZZ

######################################################


`);

//partiamo dichiarando due costanti contenenti rispettivamente fizz e buzz
const fizz = "Fizz";
const buzz = "Buzz";
//ora credo due variabili che avranno il compito di immagazzinare il resto della divisione tra "i" e i numeri "3" e "5"
let multiplier3;
let multiplier5;

//iniziamo il ciclo
for(let i=1; i<=100; i++){
    //effettuiamo l'operazione per capire se al momento i è un multiplo
    multiplier3= i%3;
    multiplier5= i%5;
    
    if(multiplier3 == 0 && multiplier5 == 0) //con questo primo if vediamo subito se i è multiplo di entrambi
    {
        console.log(fizz + buzz);
        
        document.getElementById("my-container").innerHTML += `
        <div class="squareFizzBuzz">
            <p>${fizz + buzz}</p>
        </div>
        `;
    }else if(multiplier3==0){   //qui vediamo se è multiplo di 3
        
        console.log(fizz);
        document.getElementById("my-container").innerHTML += `
        <div class="squareFizz">
            <p>${fizz}</p>
        </div>
        `;
    }else if(multiplier5==0){   //qui vediamo se lo è di 5
        
        console.log(buzz);
        document.getElementById("my-container").innerHTML += `
        <div class="squareBuzz">
            <p>${buzz}</p>
        </div>
        `;
    }else{ //se arriviamo a questo else allora significa che i non è un multiplo 
        console.log(i);
        document.getElementById("my-container").innerHTML += `
        <div class="squareNormal">
            <p>${i}</p>
        </div>
        `;
    }
    
    

    

}

