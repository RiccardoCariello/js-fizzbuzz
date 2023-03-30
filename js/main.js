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
//la variabile result servirà ad immagazzianare "fizz" e/o "buzz" nel caso in cui fossero divisori
let result='';
//iniziamo il cilo
for(let i=1; i<=100; i++){
    //calcolo se "i" è multipla di 3 e/o 5
    multiplier3= i%3;
    multiplier5= i%5;
    //con questo primo if vediamo subito se "i" è multipla di 3 e nel caso ce lo "appuntiamo" nella variabile result
    if(multiplier3==0){
    result+=fizz;
    } //ora vediamo se è divisibile per 5
    if(multiplier5==0){
    result+=buzz;
    } 
    //qui controlliamo il da farsi, se una delle due variabili "multiplier" è = a zero allora sappiamo che i è divisibile per almeno uno dei due valori,
    // perciò stampiamo result, per poi resettare il suo valore
    if(multiplier3 == 0 || multiplier5 == 0){                                                  
        console.log(result);
        result='';        
    }else{ //se così non fosse stampiamo semplicemente i
        console.log(i);
    }

    //fine :)

}
