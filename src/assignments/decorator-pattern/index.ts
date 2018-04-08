import { decoratorBasics } from './basics';

//This is the entry point for the decorator pattern assignment

/*

Question: What happens in the written file when you wrap decorator 1 in decorator 2?  What about decorator 2 in 1?

Response:

    The reason this pattern is called the "decorator" pattern is that each instance of the class "decorates" a different
implementation. For example, the SignatureWriter class decorates a FileWriter by writing the author and date before
writing anything else to the file.

    If using multiple decorators, it's important to be careful which decorator is applied first. For example,
if you're adding a signature and also encrypting the message by shifting characters, then you want the signature
decorator on the outside; otherwise, the signature itself will not be encrypted with the rest of the message.
The outermost decorator is applied "first", so to speak. So in this set of stream writers:

SignatureWriter -> CharShiftWriter -> FileWriter

... you can understand what's happening by looking at each decorator in order. First, add a signature. Then, encrypt
the message by shifting characters. Finally, write the encrypted message+signature to a file.

*/

export function main() {
    decoratorBasics();
}
