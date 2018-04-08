import { StreamWriter } from './stream-writer';
import fs = require('fs');

export class FileWriter extends StreamWriter {
    constructor(private path: string) {
        super();
    }
    
    private _isOpen = true;
    get isOpen() {
        return this._isOpen;
    }
    
    private writeBuffer = '';
    write(val: string): void {
        if (!this.isOpen) throw new Error(`This FileWriter has already been closed.`);
        this.writeBuffer += val;
    }
    flush(): void {
        if (!this.isOpen) throw new Error(`This FileWriter has already been closed.`);
        console.warn(`flush is not implemented for FileWriter. The entire file will be written when you close the StreamWriter.`);
    }
    close(): void {
        if (!this.isOpen) throw new Error(`This FileWriter has already been closed.`);
        fs.writeFileSync(this.path, new Buffer(this.writeBuffer, 'utf8'));
        this._isOpen = false;
    }
}
