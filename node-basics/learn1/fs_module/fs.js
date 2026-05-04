import * as fs from 'node:fs/promises';
import path from 'node:path';

async function createFolder(foldername){
    await fs.mkdir(foldername, { recursive: true });
}

async function createFile(pathname, content = ''){
    await fs.writeFile(pathname, content);
}

async function writeToFile(pathname, content = '') {
    await fs.appendFile(pathname, content);
}

async function readFile(pathname) {
    const data = await fs.readFile(pathname, 'UTF-8');
    console.log('data', data);
}

async function deleteFile(filepath){
    await fs.unlink(filepath);
}

async function deleteFolder(folderPath) {
    await fs.rm(folderPath, { recursive: true })
}


// createFolder('./contents/images');
// readFile('./hello.txt');
deleteFile('./hello.txt');
