import { StreamReader, FileReader } from './stream-readers';
import { StreamWriter, FileWriter, LineEndingWriter } from './stream-writers';
import { ASSETS_PATH, TEMP_PATH } from './paths';
import path = require('path');

export function decoratorRealLife() {
    const lightBrigadePath = path.join(ASSETS_PATH, 'light-brigade.txt');
    const unixPath = path.join(TEMP_PATH, 'real-life-unix.txt');
    const windowsPath = path.join(TEMP_PATH, 'real-life-windows.txt');
    
    let message = readFile(lightBrigadePath);
    
    writeFileWithLineEnding(message, unixPath, '\n');
    console.log(`Unix message saved to ${unixPath}`);
    
    writeFileWithLineEnding(message, windowsPath, '\r\n');
    console.log(`Windows message saved to ${windowsPath}`);
}

function readFile(path: string) {
    let reader: StreamReader = new FileReader(path);
    return reader.readToEnd();
}
function writeFileWithLineEnding(message: string, path: string, lineEnding: string) {
    let writer: StreamWriter;
    writer = new FileWriter(path);
    writer = new LineEndingWriter(writer, lineEnding);
    
    writer.write(message);
    writer.close();
}
