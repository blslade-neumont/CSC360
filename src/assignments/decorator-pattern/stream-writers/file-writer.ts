import { StreamWriter } from './stream-writer';
import fs = require('fs');

export class FileWriter extends StreamWriter {
    constructor(private path: string) {
        super();
        this._writeStream = fs.createWriteStream(path);
    }
    
    private _writeStream: fs.WriteStream | null = null;
    get isOpen() {
        return !!this._writeStream;
    }
    
    private writeBuffer = '';
    write(val: string): void {
        if (!this.isOpen) throw new Error(`This FileWriter has already been closed.`);
        this.writeBuffer += val;
    }
    flush(): void {
        if (!this.isOpen) throw new Error(`This FileWriter has already been closed.`);
        this._writeStream!.write(this.writeBuffer);
        this.writeBuffer = '';
    }
    close(): void {
        if (!this.isOpen) throw new Error(`This FileWriter has already been closed.`);
        this.flush();
        this._writeStream!.close();
        this._writeStream = null;
    }
}
