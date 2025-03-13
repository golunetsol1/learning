// 1: enter the file name
// 2: enter the content

import readline from 'readline';
import fs, { read } from 'fs';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const fileCreation = () =>{
    rl.question('Enter Your File Name: ', (filename)=>{
        rl.question('enter the content for you file: ', (content)=>{
            fs.writeFile(`${filename}.txt`, content, (err) =>{
                if(err){
                    console.error(`Error writing the file: ${err.message}`);
                }else{
                    console.log(`File "${filename}.txt" Created Successfully!`);
                }
                rl.close
            })
        })
    })
}


fileCreation();