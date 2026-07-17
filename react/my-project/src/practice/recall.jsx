const timeout = new Promise((_, reject) => setTimeout(()=> reject("Timeout"), 2000));
const timeout2 = new Promise((_, reject) = setTimeout(()=> reject("Timeout"), 3000));
const timeout3 = new Promise((_, reject) = setTimeout(()=> reject("Timeout"), 4000));
const timeout4 = new Promise((_, reject) = setTimeout(()=> reject("Timeout"), 5000));


await Promise.race([fetch(url), timeout]);
await Promise.race([fetch(url2), timeout2]);
await Promise.race([fetch(url3), timeout3]);


const promise = new Promise((res, rej) => {
    const success = Math.random() > 0.5;
    if(success){
        res("Data Received");
    }else{
        rej("Error Occurred!");
    }
});

