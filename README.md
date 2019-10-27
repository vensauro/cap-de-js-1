## Capacitação de Javascript

1. O que é javascript?
    É uma linguagem de programação rs,
    Ela é utilizada nas tecnologias web por ser exotica
    da para fazer muita coisa ruim.

2. O que é o ES5 ou ES6 ou ES7 ou ES2019 ou ES2020
    No começo do javascript ele foi criado para coisas simples, não pensaram que seria usado para tudo
    como é hoje em dia, como  foi uma coisa interessante outras empresas copiaram, o netscape tinha a invenção,
    a micro soft criou o JScript, a macromedia(e adobe) tem o actionscript, e com essa diversidade houve a
    necessidade de se ter um padrão, que é a organização do ECMA

    Por curiosidade, o primeir nome do linguagem era mocha, depois mudou para javascript por marketing
    e hoje em dia é ecmascript

3. Agora é pra valer: Variaveis no javascript
    Para testar as coisas ditas, executa os arquivos do lado com o node

    ```bash
     $ node nome_do_arquivo
    ```

    O javascript tem três paralavras chaves criar ligações(ligações == variaveis)
    são elas: `var`, `const`, `let`. <br>
    o `var` é recomendado não utilizar por deixar a variavel no escopo global
    além de ter comportamento diferente da maioria das outras linguagens
    e ter algo chamado [hoisting](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwiN9_Gatb3lAhUMErkGHV8AAkAQFjAAegQIABAB&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fpt-BR%2Fdocs%2FGlossario%2FHoisting&usg=AOvVaw2e7PmwoRUy31kl2TPlD5Ie).

    > exemplos no arquivo 1 <br>

    O var tambem não tem escopo, assim se vc colocar o `i` dentro do for,
    esse `i` será acessado de fora tambem

    > exemplos no arquivo 2 <br>

    além do var tem o `let` e o `const`
    eles criam ligações, porém não sofrem com o hoisting e tem escorpo normal
    a diferença entre let e const é que let pode ser reatribuido e const não

    ```javascript
        let vetor = []
        vetor = 9
        // tudo certo
        const pessoa = {
            nome: "thebestLucc"
        }
        const pessoa = {
            nome: "h."
        }
        // da erro por tentar reatribuir pessoa

        // porém vc pode mudar as estruturas de dentro da "constante"

        pessoa.nome = "Jan"
    ```
4. Curto circuito
    O que são operadores de curto circuito?
    são os && e o ||

    eles dão curto nas operações
    ```javascript
    if(true && true)
        alert('ola')
    ```
    aqui ele vai verificando o resultado e retornando um valor

    ```javascript
    true && true
    ```
    ele verificou que o primeiro valor é verdadeiro, se sim foi pro proximo, e verificou
    ele vai indo pro proximo até encontrar um valor falso, ou chegar no fim
    e assim retorna o valor encontrado primeiro, ou falso ou o valor do fim
    no if ele encontrou um valor verdadeiro e retornou

    ```javascript
    if(true && false && true)
        alert('ola')
    ```
    ele encontrou o false primeiro, retornou e o if quebrou

    ```javascript
    if(true && true && 20)
    ```
    ele foi até o fim e retornou o 20, como o if precisa de valor booleano, a javascript converteu ele
    para booleano e assim passou no if já que 20 é um valor trully
    sobre valores trully e falsy [Entendendo trully e falsy values](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwifq7jPvL3lAhVDHbkGHUgQBBIQFjABegQIChAF&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F35642809%2Funderstanding-javascript-truthy-and-falsy&usg=AOvVaw1Ggiu0wEdm0ENXmymGPM78)

    Com o `||` é uma logica parecida, porém ele procura o primeiro valor verdadeiro(true)

    ```javascript
    if(false || 0 || true || '')
    ```

    E esse comportamento é bastante interessante já que ele não depende do if para funcionar
    assim podemos ter logicas booleanas em "one line" sem utilizar if
    e o mais importante é que são expressões o que ajuda no react que aceita apenas expressões
    dentro da renderização dos componentes

    ```javascript
    const existe_algo = pessoa1 || pessoa2
    ```
    
    se `pessoa1` for um valor com nada dentro o valor de `existe_algo` será pessoa2
    caso contrario será `pessoa1`

    ```javascript
        variavel_com_valor_verdadeiro && executaFuncaoApenasSeValorForTrue()
    ```


5. Desestruturação