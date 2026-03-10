// console.log("Hello Brajesh");

// // console.log(process); //! process object already available in nodejs

// console.log(process.argv);
//! argv[0] -> node binary, argv.[1] -> current file
// console.log(process.argv[2], process.argv[3]); //! argv[2,...] -> command line arguments


// const name = process.argv[2];

// const hours = new Date().getHours(); //! 24 hours format
// console.log("hours: ", hours);


// function getGreetings(hours){
//     if(hours < 4 || hours >= 19) return "Good night";
//     if(hours < 9) return "Good morning";
//     if(hours < 16) return "Good afternoon";
//     return "Good evening";
// }

// const greetings = getGreetings(hours);

// console.log(`${greetings}, ${name}!`);


// const add = require("./math/add"); //! common js syntax for import
// console.log(add(3, 4));



// ctx: OS

// import os from 'node:os'; // inside package.json - type: "module" otherwise gives error (MODULE_NOT_FOUND)

// console.log('CPUs', os.cpus().length);
// console.log('Total Memory', os.totalmem() / (1024*1024*1024)); // GB
// console.log('Free Memory', os.freemem() / (1024*1024)); // MB
// console.log('Uptime', os.uptime() / (60*60));
// console.log('Hostname', os.hostname());
// console.log('User info', os.userInfo());
// console.log('Machine', os.machine());


import * as fs from 'node:fs';

function createFile(pathname){

    //! Sync
    fs.writeFileSync(pathname, 'Hello Nodejs!\n');
    fs.appendFileSync(pathname, 'Hello Brajesh!');
    console.log('File has been created!!');


    //! Async
    //! Error first callbacks
    fs.writeFile(pathname, 'Hello2 nodejs!\n', (err) => {
        if(err){
            console.log('Something went wrong while creating file.');
            return
        }

        console.log('File has been created and overwritten asynchronously');
        
    })
    console.log('File operation done!!!');
}


createFile('./fs_module/hello.txt');


