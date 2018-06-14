## MEU PRIMEIRO CÓDIGO EM JAVASCRIPT

Conhecendo o Js
Dados e Tipo de Dados
Declarando variáveis e reconhecendo operadores
Declarando funções
Acessando elementos no HTML
manipulando elementos no HTML
Eventos do Mouse
Finalizando projetos


### Tipos de dados

Tipos Primitivos

* Boolean
* Undefined (uma variável sem valor
definido)
* Null (um único valor nulo)
* Number (isso inclui Infinity e NaN)
* Strings
* Symbols (novo)

Objetos


### Tipos de dados

```
//Numbers
4
9.

-

//Strings
"Hello World"
"43"

//Booleans
true
false

//null
null


//undefined
undefined
//Symbol
var a = Symbol(123);
var b = Symbol(123);
```

### Declarando variáveis

Um identificador JavaScript deve começar com:


* uma letra
* underline (_)
* cifrão ($)

os caracteres subsequentes podem também ser


* números (0-9)
* letras incluem caracteres de "A" a "Z" (maiúsculos)
* caracteres de "a" a "z" (minúsculos)

### Operadores Aritméticos


* adição (+)
* subtração (-)
* multiplicação(*)
* divisão (/) quociente
* modulo (%) resto

### Function declaration ou Function statement


Uma função JavaScript declarada é definida com a
palavra-chave function, seguida por um nome, seguido
por parênteses ().

```
function nome ( parametro1 , parametro2 , parametro3 ) {

  código para executar

}
```

### Exemplo

```
function calcRectArea(base, altura) {

  return base * altura;

}

console.log(calcRectArea(5, 6));

//output esperado: 30
```

### DOM


Um dos grandes responsáveis por isso tudo é o objeto
“document” que é responsável por conceder ao código
Javascript todo o acesso a árvore DOM do navegador Web.

Com o DOM pode-se mover itens dentro de uma página ou
criar efeitos CSS bastante interessantes sem precisar
nem mesmo recarregar a página.

### DOM


Localiza um elemento por id de elemento
```
document.getElementById(id)
```

### Eventos

```
//onclick=”showSaudacao()”

botaoSair.onclick = showSaudacao();

function showSaudacao(){
alert('Bem vindo ao site!')
}
```
### Event Handler


addEventListener() funciona adicionando uma função ou
um objeto que implementa EventListener à lista de
ouvintes de eventos para o tipo de evento especificado
no EventTarget no qual é chamado.

```
function showSaudacao(){
  alert('Bem vindo ao site!')
}

botaoSair.addEventListener('click', showSaudacao());

```

```
function showSaudacao(){
  alert('Bem vindo ao site!')
}

botaoSair.addEventListener('click', showSaudacao());

```
