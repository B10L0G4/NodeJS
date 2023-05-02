##Instalação

>nvm para windows - https://github.com/B10L0G4/nvm-windows 
>> Comandos nvm 
>>  nvm on -irá inicializar o nvm na versão mais recente 
>> nvm install lts instala a ultima versão do node 
>> nvm use <versão desejada>
>> 
>> para verificar se o node está instalado node --version


Node JS 


**Dúvidas:**
Qaundo instalo um modulo ele pode ser lido de qualquer pasta ou apenas na pasta em que esta alocado 
**R:** ao instalar um modulo com -g , irá instalar globalmente 

Nodemon permite executar o codigo em "tempo"real,facilitando a execução, para iniciar <br>
**nomemon <- nome do arquivo -> <br>** 
**para finaizar control C** 

padrões devem ser seguido , se usar import sempre import, se const /require , sempre o <br>
mesmo const/require , aparentemente ele não entende requisições diferentes em um mesmo <br>
arquivo. Pesquisaer mais sobre. 

No fs.writeFileSync é possivél criar qualquer tipo de arquivos. -- pesquisar mais sobre , e a <br> realidade de uso. Quando usando o import não precisa usar o fs. 
<br>
Como usar Modulos 
Moduloes são pedaços/trecho reutilizaveis de código , a função import é usada para <br>
importar modulos que são exportados de outros modulos. 
<br>

## Import 
Sobre o import , usa-se a extensão **mjs** , o import se mostra uma ferramente mais simples no node <br> entretanto pouco utilizada por ser recente . 

Sua simplicidade se mostra ao não precisar de abstrações ou chamadas de modulos 


**Sintaxes de Importação** <br>
import **name** from 'nome do modulo' <br>
1- importação de um modulo inteiro <br>
**import * as name from 'module-name'** <br>
2-Importando uma única exportação de um módulo <br>
**importar {nome} de 'nome-do-módulo'**<br>
3-Importando várias exportações de um módulo:<br>
**import {nameOne, nameTwo} de 'module-name'**<br>
4-Importar um módulo apenas para efeitos colaterais<br>
**import './module-name'**<br>


quando criando um arquivo Json , não esquecer na hora de rodar o programa add os parâmetros <br>

## Sobre métodos sincronos e asincronos <br>

Nos metodos sincronos cada linha do programa é executada após a proxima <br>
independente de quanto tempo leve para que cada linha seja executada <br>

## Path Join 
o dirname mostra o caminho do diretorio onde estamos ,<br> 
path.join irá "unir o caminho na pasta public e src, conectando-se ao html da pasta public pela src.

## Get 
Método de get permite configurar um servidor , em que o servidor deve fazer quando alguem tenta obter recurso especifico na http 

## Argumentos na Linha de Comando 

-- O Node permite a leitura de argumentos na linha de comando <br>
para isto , utiliza-se o array **process.argv** , onde pode-se fazer loops e <br>
resgatar valores . <br>




