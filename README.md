## Instalação

>nvm para windows - <https://github.com/B10L0G4/nvm-windows>
>> Comandos nvm
>> nvm on -irá inicializar o nvm na versão mais recente
>> nvm install lts instala a ultima versão do node
>> nvm use <versão desejada>
>> nvm list - lista as versões instaladas
>> nvm uninstall <versão desejada> - desinstala a versão desejada
>> nvm list available - lista as versões disponiveis para instalação
>> para verificar se o node está instalado node --version

Node JS

**Dúvidas:**
Qaundo instalo um modulo ele pode ser lido de qualquer pasta ou apenas na pasta em que esta alocado
**R:** ao instalar um modulo com -g , irá instalar globalmente

Nodemon permite executar o codigo em "tempo"real,facilitando a execução, para iniciar

**nomemon <- nome do arquivo ->
**para finaizar control C**

padrões devem ser seguido , se usar import sempre import, se const /require , sempre o
mesmo const/require , aparentemente ele não entende requisições diferentes em um mesmo
arquivo. Pesquisaer mais sobre.

No fs.writeFileSync é possivél criar qualquer tipo de arquivos. -- pesquisar mais sobre , e a realidade de uso. Quando usando o import não precisa usar o fs.

Como usar Modulos
Moduloes são pedaços/trecho reutilizaveis de código , a função import é usada para
importar modulos que são exportados de outros modulos.

## Import

Sobre o import , usa-se a extensão **mjs** , o import se mostra uma ferramente mais simples no node entretanto pouco utilizada por ser recente .

Sua simplicidade se mostra ao não precisar de abstrações ou chamadas de modulos

**Sintaxes de Importação**

import **name** from 'nome do modulo'
1- importação de um modulo inteiro
**import * as name from 'module-name'**
2-Importando uma única exportação de um módulo
**importar {nome} de 'nome-do-módulo'**
3-Importando várias exportações de um módulo:
**import {nameOne, nameTwo} de 'module-name'**
4-Importar um módulo apenas para efeitos colaterais
**import './module-name'**

quando criando um arquivo Json , não esquecer na hora de rodar o programa add os parâmetros

## Sobre métodos sincronos e asincronos

Nos metodos sincronos cada linha do programa é executada após a proxima
independente de quanto tempo leve para que cada linha seja executada

## Path Join

o dirname mostra o caminho do diretorio onde estamos,
path.join irá "unir o caminho na pasta public e src, conectando-se ao html da pasta public pela src.

## Get

Método de get permite configurar um servidor , em que o servidor deve fazer quando alguem tenta obter recurso especifico na http

## Argumentos na Linha de Comando

-- O Node permite a leitura de argumentos na linha de comando para isto , utiliza-se o array **process.argv** , onde pode-se fazer loops e resgatar valores .

## Events 

**getElementById** - permite pegar um elemento pelo id
**getElemenntsByClassName** - permite pegar um elemento pela classe
**addEventListener** - permite adicionar um evento ao elemento
**removeEventListener** - permite remover um evento ao elemento
**innerHTML** - permite adicionar um texto ao elemento
**innerText** - permite adicionar um texto ao elemento
**appendChild** - permite adicionar um elemento filho ao elemento
**createElement** - permite criar um elemento

**preventDefault** - previne o comportamento padrão do elemento
