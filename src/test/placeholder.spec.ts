/// <reference types="mocha" />

import { expect, use } from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
use(sinonChai);

describe('CSC360', () => {
    it('should have a placeholder test', () => {
        expect(true).not.to.be.false;
    });
});
