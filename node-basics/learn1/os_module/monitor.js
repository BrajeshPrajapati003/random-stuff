import chalk from 'chalk';
import os, { totalmem } from 'node:os';

function monitor(){
    // Take a snapshot
    // Take another snapshot after 2 seconds

    const oldCpus = os.cpus();

    // console.log(oldCpus);

    setTimeout(()=>{
        const newCpus = os.cpus();

        const usage = newCpus.map((cpu, i)=> {
            return {
                core: i,
                usage: calculateCPU(oldCpus[i], newCpus[i]) + '%',
            };
        });

        console.clear();
        
        console.log(chalk.bgCyanBright(`==========System Stats===========`));
        console.table(usage);


        const usedMemory = (os.totalmem() - os.freemem()) / (1024 * 1024 * 1024);


        
        console.log('Memory used: ',
            usedMemory > 6 ? 
            chalk.redBright(`${usedMemory.toFixed(2)} GB / ${(totalmem / (1024*1024*1024)).toFixed(2)} GB`)
            : chalk.greenBright(`${usedMemory.toFixed(2)} GB / ${(totalmem / (1024*1024*1024)).toFixed(2)} GB`)
        );
        
        
        // console.log(`Memory used: ${usedMemory.toFixed(2)} GB / ${(totalmem / (1024*1024*1024)).toFixed(2)} GB`);
        
    }, 1000)
    
}


function calculateCPU(oldCpus, newCpus){
    const oldTotal = Object.values(oldCpus.times).reduce((a, b) => a+b);
    const newTotal = Object.values(newCpus.times).reduce((a, b) => a+b);

    const idle = newCpus.times.idle - oldCpus.times.idle;
    const total = newTotal - oldTotal;
    const used = total - idle;

    return ((100*used)/total).toFixed(1);
}


setInterval(monitor, 1000);


// [
// {
//     model: 'Intel(R) Core(TM) i5-10200H CPU @ 2.40GHz',
//     speed: 2400,
//     times: {
//       user: 2639453,
//       nice: 0,
//       sys: 2050031,
//       idle: 82380640,
//       irq: 121421
//     }
//   }
// ]