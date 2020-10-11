    let from_currency = document.getElementById('C1');
    let to_currency = document.getElementById('C2');
    let from_ammount = document.getElementById('Currency1').value;
    let to_ammount = document.getElementById('Currency2');

document.body.onkeyup = function(e) { if (e.keyCode == 13) {getCurrencyRate(from_currency,to_currency);}};


 async function getCurrencyRate(from_currency,to_currency){
    const request = await fetch(`https://api.exchangeratesapi.io/latest?base=${from_currency.value}`);
    const data = await request.json();
    let rate = data.rates;
     to_ammount.value = from_ammount * rate[C2.value];
 }
 getCurrencyRate(from_currency,to_currency);


//  const axios = require('axios');


// let test1, test2;

// function myfunc(C1,C2){
//      tast1 = C1;
//      tast2 = C2;
//       getCurrencyRate();
//  }
//  myfunc('USD','GBP');

//  async function getCurrencyRate(){
    
//     const request = await axios.get(`https://api.exchangeratesapi.io/latest?base=${tast1}`);
//     const data = await request.json();
//     const rate = request.data.rates;
//     console.log(rate);
//     console.log(from_ammount * rate[tast2]);
     
//  }

/* const getCountries = async (currencyCode) => {
    try{const response = await fetch(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map(country => country.name);
  }
  catch (error) {
    throw new Error(`Unable to get countries that use ${currencyCode}`);
  }

  
}
const countries = await getCountries(to_currency.value);
  console.log(`${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}.
             You can spend these in the following countries: ${countries}`);*/
