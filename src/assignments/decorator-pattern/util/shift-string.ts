

const CC_a = 'a'.charCodeAt(0);
const CC_z = 'z'.charCodeAt(0);
const CC_A = 'A'.charCodeAt(0);
const CC_Z = 'Z'.charCodeAt(0);

export function mod(n: number, m: number) {
    //Dumb, stupid hack because % is the remainder operator, not modulus
    return ((n % m) + m) % m;
}
export function shiftChar(val: string, index: number, shiftBy: number): string {
    let charCode: number = val.charCodeAt(index);
    if (charCode >= CC_a && charCode <= CC_z) charCode = mod((charCode - CC_a) + shiftBy, CC_z + 1 - CC_a) + CC_a;
    if (charCode >= CC_A && charCode <= CC_Z) charCode = mod((charCode - CC_A) + shiftBy, CC_Z + 1 - CC_A) + CC_A;
    return String.fromCharCode(charCode);
}
export function shiftString(val: string, shiftBy: number): string {
    let translated = '';
    for (let q = 0; q < val.length; q++) {
        translated += shiftChar(val, q, shiftBy);
    }
    return translated;
}
