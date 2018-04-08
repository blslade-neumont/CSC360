

const CC_a = 'a'.charCodeAt(0);
const CC_z = 'z'.charCodeAt(0);
const CC_A = 'A'.charCodeAt(0);
const CC_Z = 'Z'.charCodeAt(0);

export function shiftString(val: string, shiftBy: number): string {
    let translated = '';
    for (let q = 0; q < val.length; q++) {
        let charCode = val.charCodeAt(q);
        if (charCode >= CC_a && charCode <= CC_z) charCode = (((charCode - CC_a) + shiftBy) % (CC_z - CC_a)) + CC_a;
        if (charCode >= CC_A && charCode <= CC_Z) charCode = (((charCode - CC_A) + shiftBy) % (CC_Z - CC_A)) + CC_A;
        translated += String.fromCharCode(charCode);
    }
    return translated;
}
