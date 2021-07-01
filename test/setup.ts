import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import chaiSpies from 'chai-spies';

chai.use(dirtyChai);
chai.use(chaiSpies);

global.chaiExpect = expect;
