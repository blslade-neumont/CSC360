/// <reference types="mocha" />

import { expect, use } from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
use(sinonChai);

import { shiftChar } from '../shift-string';

describe('decorator-pattern', () => {
    describe('util/shiftChar', () => {
        it('should shift lowercase characters', () => {
            expect(shiftChar('a', 0, 1)).to.eql('b');
            expect(shiftChar('d', 0, 1)).to.eql('e');
        });
        it('should shift uppercase characters', () => {
            expect(shiftChar('A', 0, 1)).to.eql('B');
            expect(shiftChar('D', 0, 1)).to.eql('E');
        });
        it('should wrap lowercase characters down to "a"', () => {
            expect(shiftChar('z', 0, 1)).to.eql('a');
            expect(shiftChar('y', 0, 1)).to.eql('z');
            expect(shiftChar('y', 0, 2)).to.eql('a');
        });
        it('should wrap uppercase characters down to "A"', () => {
            expect(shiftChar('Z', 0, 1)).to.eql('A');
            expect(shiftChar('Y', 0, 1)).to.eql('Z');
            expect(shiftChar('Y', 0, 2)).to.eql('A');
        });
        it('should wrap lowercase characters up to "z"', () => {
            expect(shiftChar('a', 0, -1)).to.eql('z');
            // expect(shiftChar('b', 0, -1)).to.eql('a');
            // expect(shiftChar('b', 0, -2)).to.eql('z');
        });
        it('should wrap uppercase characters up to "Z"', () => {
            expect(shiftChar('A', 0, -1)).to.eql('Z');
            expect(shiftChar('B', 0, -1)).to.eql('A');
            expect(shiftChar('B', 0, -2)).to.eql('Z');
        });
    });
});
