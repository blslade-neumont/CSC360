

export function unifyLineEndings(val: string, lineEnding: string) {
    return val.replace(/\r?\n|\r/g, lineEnding);
}
