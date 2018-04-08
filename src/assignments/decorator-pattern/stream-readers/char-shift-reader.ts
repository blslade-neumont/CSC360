import { StreamReader } from './stream-reader';
import { shiftString } from '../util';

export class CharShiftReader extends StreamReader {
    constructor(private base: StreamReader, private shiftBy = -1) {
        super();
    }
    
    readToEnd(): string {
        return shiftString(this.base.readToEnd(), this.shiftBy);
    }
}
