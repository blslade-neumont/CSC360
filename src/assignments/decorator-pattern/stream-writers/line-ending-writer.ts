import { StreamWriter } from './stream-writer';
import { unifyLineEndings } from '../util';

export class LineEndingWriter extends StreamWriter {
    constructor(private base: StreamWriter, private lineEnding: string) {
        super();
    }
    
    write(val: string): void {
        this.base.write(unifyLineEndings(val, this.lineEnding));
    }
    flush(): void {
        this.base.flush();
    }
    close(): void {
        this.base.close();
    }
}
