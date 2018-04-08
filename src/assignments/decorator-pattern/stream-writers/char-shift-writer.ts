import { StreamWriter } from './stream-writer';
import { shiftString } from '../util';

export class CharShiftWriter extends StreamWriter {
    constructor(private base: StreamWriter, private shiftBy = 1) {
        super();
    }
    
    write(val: string): void {
        this.base.write(shiftString(val, this.shiftBy));
    }
    flush(): void {
        this.base.flush();
    }
    close(): void {
        this.base.close();
    }
}
