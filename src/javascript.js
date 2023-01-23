const cardNumber = document.getElementById ('cardnumber');
cardNumber.addEventListener('keypress', validateNumber)
function validateNumber (event) {
    const key = String.fromCharCode(event.charCode);
    if (isNaN(key)){
        event.preventDefault()}

    }
    
    const botonValidar = document.getElementById("btn-validar");

    botonValidar.addEventListener("click", validate)

function validate() { //colocar cardNumber dentro dentro delparentesis
    
    const cardNumber = document.getElementById ("cardnumber").value;
    console.log(cardNumber);
//Marcaba errar porque declaré cardnumber y no clardNumber
const result = document.getElementById("result");
// si elinput es igual a cero, no se ponen datos, se regresará un texto como resultado que contenga el texto "ingrese sus datos"
    if (cardNumber == "") {

      result.innerText ="ingresa tus datos"
      console.log(element.innerText)
    return
   


   } 
   const valid = isValid (cardNumber)
   if (valid) {
    result.innerHTML= "tarjeta valida"
   }
   else { 
    result.innerHTML = "tarjeta no válida"
}
}
    function isValid(creditCardNumber){
        let array = creditCardNumber.split("").map(Number);
        console.log(array);
        const reversed = array.reverse();
        let sum = 0;

        for(let i=0; i<reversed.length;i++) {
    const pos= i+ 1;

    if (pos % 2 ==0){
        reversed[i]= reversed[i] *2;
    }
        if (reversed[i] >9) {
            
            const num = reversed[i].toString().split("").map(Number);
            console.log(num);
            reversed [i] = num [0] + num [1];
        }
        sum += reversed[i]
    }

return  sum % 10 == 0; 
 
}
 