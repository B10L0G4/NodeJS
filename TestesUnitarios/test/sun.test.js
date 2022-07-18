'use strict'
const expect = require('chai').expect
const sun = require('../src/sun')

describe ('# sun', ()=>{ // descrever sobre o teste que ira ser utulizado
    it('Should sun module to be a fnction', ()=>{
//bdd - e uma forma de escrever o teste de forma simples e mais legivel/entendivel
        expect(sun).to.be.a('function')
    }) 
    it ('Should SUN return a number',()=>{
        expect(sun(7,1)).to.be.equal(8)
    })
 
    // chai sera usado para fazer as assercoes , ou seja, garante que o que esta sendo escrito e verdadeiro/real 
    // cada it sera um teste diferente , serao usados dois parametros , o primeiro parametro sera a descricao do teste e o segundo sera a funcao de callback que sera executada quando o teste for executado 
    // na funcao describe dentro da fucncao de callback ficarao dentro dessa fucncao 
    // chai ira fazer as asserções ou seja, garante que o que esta sendo escrito é verdadeiro/real
});
