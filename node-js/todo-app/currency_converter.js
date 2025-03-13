import https from 'https';
import readline from 'readline';

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

const apiKey = '0e786779fbd718a4ad6dae4b';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const covertCurrency = (amount, rate)=>{
    return (amount * rate).toFixed(2)
}

const get = https.get(url, (response)=>{
    let data = "";
    response.on('data',(chunk)=>{
        data += chunk
    })
    response.on('end',()=>{
        // console.log(data);
        const rates = JSON.parse(data).conversion_rates;
        rl.question('Enter the amoun in USD: ', (amount)=>{
            rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (currency)=>{
                const rate = rates[currency.toUpperCase()];
                if(rate){
                    console.log(`${amount} USD is approximately ${covertCurrency(amount, rate)} ${currency}`)
                }else{
                    console.log(`Invalid Currency Code.`)
                }
                rl.close();
            })
        })
    })
})