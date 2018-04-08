import { StreamReader } from './stream-reader';
import fs = require('fs');

export class FileReader extends StreamReader {
    constructor(private path: string) {
        super();
    }
    
    private _hasRead = false;
    readToEnd(): string {
        if (this._hasRead) throw new Error(`You've already read to the end of the file!`);
        this._hasRead = true;
        return fs.readFileSync(this.path, 'utf8');
    }
}
