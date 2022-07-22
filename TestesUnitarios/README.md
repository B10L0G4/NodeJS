# Testes unitários

### Sempre ter os modulos bem definidos , como será o modulo e como ele será escrito, ter pelo <br> menos uma ideia básica do que o mudulo ira fazer/executar 
### TDD - test driven development - desenvolvimento digidos/guiados por testes, <br> 
### BDD - Behaviour driven development - desenvolvimento guiado por comportamento <br>

É interessante manter um diretorio de testes , mas nao e obrigatorio <br>

Mocha irá rodar os testes 
as descrições devem ser escritas em ingles , pois o modulo expect do chai esta em ingles 

## As etapas de testes são 3 
### Setup : Etapa de cofiguração em que cria ums String de tese <br>
### Action : Etapa em que chama o codigo de produção para realizar a ação que está em teste <br>
### Assert : etapa onde o teste de Action são validados <br>

## Exemplos TDD <br>

function str_len( theStr){<br>
    return theStr.lenght<br>
} // retorma o tamanho da string <br>

teste de codigo <br>

it ('returns lenght of the string', functiom (){  <br>
    testStr = "1";   // setup , espera-se que o testeStr seja 1 <br>
    result  = str_len(testStr) // action  no resultado defini-se a string <br>
    expect(result).to.equal(1) // assert verifica-se o resultado esperado é igual ao resultado <br> obtido <br>
})

## As três leis do TDD

### 1 - Não se deve escrever o codigo de produçao ate criar um teste de unidade de falha <br>
### 2 - não se deve escrever mais de um teste de unidade do que o necessario para falhar,, e nao <br> compiar falhas <br> 
### 3- nao se deve e screver mais cidigos de producao que o necessario para aplicar o teste de <br> falha atual <br>


## Sobre coberturas 

Statemments -- instruções 
branches  - if,else, while, for ... 
functions - funções 
lines  - linhas 







