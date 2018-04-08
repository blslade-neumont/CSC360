import { StreamReader, FileReader, CharShiftReader } from './stream-readers';
import { StreamWriter, FileWriter, SignatureWriter, CharShiftWriter } from './stream-writers';
import { ASSETS_PATH, TEMP_PATH } from './paths';
import path = require('path');

export function decoratorBasics() {
    const lightBrigadePath = path.join(ASSETS_PATH, 'light-brigade.txt');
    const encryptedPath = path.join(TEMP_PATH, 'encrypted-message.txt');
    const decryptedPath = path.join(TEMP_PATH, 'decrypted-message.txt');
    
    let message = readFile(lightBrigadePath);
    
    encryptSignAndSaveFile(message, 'Alfred Tennyson', encryptedPath);
    
    let decrypted = readAndDecryptFile(encryptedPath);
    
    if (message !== decrypted) throw new Error(`Decrypted message did not equal the original`);
    
    writeFile(decryptedPath, decrypted);
}

function readFile(path: string) {
    let reader: StreamReader = new FileReader(path);
    return reader.readToEnd();
}
function writeFile(path: string, message: string) {
    let writer: StreamWriter = new FileWriter(path);
    writer.write(message);
    writer.close();
}
function encryptSignAndSaveFile(message: string, author: string, path: string) {
    let writer: StreamWriter;
    writer = new FileWriter(path);
    writer = new CharShiftWriter(writer);
    writer = new SignatureWriter(writer, author);
    
    writer.write(message);
    writer.close();
}
function readAndDecryptFile(path: string) {
    let reader: StreamReader;
    reader = new FileReader(path);
    reader = new CharShiftReader(reader);
    
    let decryptedMessage = reader.readToEnd();
    console.log(`Decrypted:`, decryptedMessage);
    return decryptedMessage;
}
