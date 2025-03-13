import https from 'https'
import chalk from 'chalk'

const getJoke = ()=>{
    const url = 'https://official-joke-api.appspot.com/random_joke';

    https.get(url, (response)=>{
        let data = "";
        response.on('data', (chunk)=>{
            data+= chunk
        });
        response.on('end', ()=>{
            // console.log(data); // get api response inside data
            const joke = JSON.parse(data);  // perse in to String using JSON.perse to show proper
            // console.log(joke);
            console.log(`Here is a random joke: `);
            console.log(chalk.red(`${joke.setup}`)); // this setup inside data array in api
            console.log(chalk.bgRed.blue.bold(joke.punchline)); // this punchline inside data array in api
        });
        response.on('error', (err)=>{
            console.log(`Error fecthing the joke, ${err.message}`);
        });
    });

}

getJoke();