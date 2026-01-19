### MyWebsite
**Sobre**
Esse projeto foi desenvolvido como forma de demonstrar meu conhecimento com desenvolvimento web, Ele tem o objetivo de demonstrar minhas habilidades utilizando framework React, escrito em javaScript.

A parte responsavel pela lógica do servidor (apesar de ainda não implementada no website) foi escrita utilizando framework .NET em C# nele se tem o uso de minimal API, Conector MySqlConnector para comunicação com banco de dados mariaDB, padrão de Dependecy Injection e obviamente linguagem QUERY.

### Front-end

O Front-end foi organizado de forma com que os itens estáticos isso é imagens, gifs, imagens, etc.. ficassem dentro da pasta `assets`.

Dentro da pasta `components` se encontra uma estrutura de design atomic que é uma forma de organizar o código em componentes pequenos e reutilizáveis sendo os de menor para maior complexidade os seguintes:

`atoms > molecules > organisms > pages > templates (Inexistente no caso)`

A pasta `temp` se encontra para criação de páginas de teste e afins sobe para produção apesar de não ser utilizada.

Dentro da pasta `utils` se encontram scripts utilitarios que podem e são frequentemente utilizados em componentes react. 

----
#**Inicializando Projeto (Front-end)**
Foi desenvolvido utilizando a **build-in tool Vite** + **node v24.11.0** para rodar localmente é necessário ter o **node instalado na versão v24.11.0+**

Uma vez com o node instalado é necessário abrir um console no local do projeto e rodar com o comando:

``` bash
    >>> npm run dev 
```

Com isso o node instalara todas as dependencias necessárias que se encontram no arquivo:

 `app>src>package.json`

---

### Back-end
O Back-end foi desenvolvido utilizando **.NET 9.0** e foi escrito utilizando **arquitetura de camadas** isso é quando a responsabilidade das classes são separadas por pastas de nome que fazem referencia a função pelo qual as classes exercem São elas até o determinado momento:

**bin** | Armazena arquivos compilados.
**data** | lógica de criação/conexão com banco de dados
**model** | padrões utilizados no código inteiro
**obj** | arquivos intermediarios do build
**properties** | Configurações
**routes** | Armazena Definição de rotas e minimalAPI
**security** | Classes referentes a criptografia, segurança e afins.

##### Inicializar Projeto
Tendo **.NET 9.0** instalado é apenas necessário acessar o diretório via terminal e inicializar o projeto utilizando:

``` bash
    >>> dotnet run
```

Note que a rota que se encontra em .app/{Classe que cuidam do crud} (Ainda não implementado) Precisara ser alterada de acordo com o endereço local + porta (Socket).

--------