

export abstract class StreamWriter {
    constructor() { }
    
    abstract write(val: string): void;
    abstract flush(): void;
    abstract close(): void;
}
