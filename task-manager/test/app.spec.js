const IsNumber = require('../app')
const { expect } = require("chai");

describe ('IsNumber', ()=> {
    it('Should be a Number', ()=>{
        console.log(IsNumber)
        expect(IsNumber).to.be.equal(9)
    })
})