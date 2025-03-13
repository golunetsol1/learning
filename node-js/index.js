const path = require('path');
const os = require('os');
const fs = require('fs/promises');
const EventEmitter = require('events');
const http = require('http');

//================= path module =================//

// school folder/students/Data.txt 
// const filePath = path.join("folder","students","data.txt");
// console.log(filePath);


// console.log("Host Name :-",os.hostname());
// fs module //
// const fileName = 'text.txt'
// const filePath = path.join(__dirname, fileName);
// const writeFile = fs.writeFileSync(filePath, "This is initial Data", "utf-8");

// console.log(writeFile);

// const fileName = 'text.txt'
// const filePath = path.join(__dirname, fileName);
// const writeFile = fs.writeFile(filePath, "This is initial Data", "utf-8", (err) =>{
//     if(err) console.error(err);
//     else console.log('file has been saved');
// });
// const readFile = fs.readFile(filePath, "utf-8", (err,data) =>{
//     if(err) console.error(err);
//     else console.log(data);
// });

// const readFile = fs.readFileSync(filePath, "utf-8"); // add utf-8 for directlly read without buffer

// console.log(readFile.toString()); // for encoding buffer to string 

// console.log("Read Data InSIDE FILE :- ",readFile);

// const appendFile = fs.appendFileSync(
//     filePath,
//     "\nThis is the Updated Data 02",
//     "utf-8"
// )
// const deleteFile = fs.unlinkSync(filePath);

// console.log(writeFile);
// console.log(readFile);

// ================ async fs module ================= //

const fileName = 'text.txt'
const filePath = path.join(__dirname, fileName);

// const writeFile = fs.writeFile(filePath, "This is initial Data", "utf-8", (err) =>{
//     if(err) console.error(err);
//     else console.log('file has been saved');
// });
// const readFile = fs.readFile(filePath, "utf-8", (err,data) =>{
//     if(err) console.error(err);
//     else console.log(data);
// });

// const dir = __dirname;
// fs.promises
// .readdir(filePath)
// .then((data) => console.log(data))
// .catch((err) => console.error(err));





// const deleteFile = fs.unlinkSync(filePath);


// const readFolder = async () => {
//     try{
//     const res = await fs.promises.readdir(dir);
//     console.log(res);
//     } catch (error) {
//         console.error(error);
//     }
// };
// readFolder();

// const writeFileExp = async () => {
//     try{
//     await fs.writeFile(filePath, 'this is data', 'utf-8');
//     } catch (error) {
//         console.error(error);
//     }
// };
// writeFileExp();

// const readFileExp = async () => {
//     try{
//      const res = await fs.readFile(filePath, 'utf-8');
    // console.log(res);
//     } catch (error) {
//         console.error(error);
//     }
// };
// readFileExp();

// const appendFileExp = async () => {
//     try{
//      await fs.appendFile(filePaths,'\n updated file data', 'utf-8');
//     console.log('file update successfully!');
//     } catch (error) {
//         console.error('error reading file :-',error.message);
//     }
// };
// appendFileExp();



// const readFileExp = async () => {
//     try{
//     const res = await fs.readFile(filePath, 'utf-8');
//     console.log(res);
//     } catch (error) {
//         console.error(error);
//     }
// };
// readFileExp();

// events modul  //

// create an event of EventEmitter 

const emitter = new EventEmitter();

// emitter.on('greet', () => {
//     console.log(`Hello GS`)
// })

// emitter.emit("greet");

// emitter.on('greet', (username) => {
//     console.log(`Hello ${username}`)
// })

// emitter.emit("greet",'Gs Chauhan');


// emitter.on('greet', (arg) => {
//     console.log(`Hello ${arg.username} ${arg.prof}`)
// })

// emitter.emit("greet",{username:"Gs Chauhan",prof:"web-dev"});

// Task 
const eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-update": 0,
}
emitter.on('user-login', (arg) => {
    eventCounts['user-login']++;
    console.log(`Hello ${arg.username} ${arg.prof}`)
})

emitter.emit("user-login",{username:"Gs Chauhan",prof:"web-dev"});

emitter.on('summary', (arg) => {
    console.log(eventCounts)
})

emitter.emit("summary");