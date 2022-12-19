const index = require('../src/index')
const expect = require('chai').expect

describe('Read the return function ',()=>{ //descreve sobre o teste q será realizado
    it('Should function return a string' ,()=>{ 
        expect(index).to.be.a('string');
    })
})
