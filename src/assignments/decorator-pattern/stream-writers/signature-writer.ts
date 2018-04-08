import { StreamWriter } from './stream-writer';
import { EOL } from 'os';

export class SignatureWriter extends StreamWriter {
    constructor(private base: StreamWriter, private name: string, private date = new Date()) {
        super();
        this.writeSignature();
    }
    
    writeSignature() {
        this.write(`Written by ${this.name} on ${this.date.toString()}${EOL}${EOL}`);
    }
    
    write(val: string): void {
        this.base.write(val);
    }
    flush(): void {
        this.base.flush();
    }
    close(): void {
        this.base.close();
    }
}
