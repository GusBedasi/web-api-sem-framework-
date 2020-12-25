# WEB API

Criamos uma web-api básica com 3 rotas, sem utilizar nenhuma framework.

## Routes

*  ### Default
    Nessa rota optamos por retornar só um Hello World, simplesmente para simbolizar como é construído uma rota padrão

* ### GET
    Nesta rota devolvemos todos os herois já criados no nosso arquivo JSON (no caso utilizamos um JSON para não criar o banco de dados, porém é totalmente possível essa integração)

    #### `Response:`
      
      results:[
        {
          "id":1,
          "name":"Gustavo",
          "age":21,
          "power":"Wizzard"
        },
        {
          "id":2,
          "name":"Nicolle",
          "age":20,
          "power":"Godess"
        },
        {
          "id":3,
          "name":"Chancha",
          "age":19,
          "power":"Bard"
        },
        {
          "id":1608912591144,
          "name":"Chapolin"
          ,"age":86,
          "power":"Astucia"}
      ]}
* ### POST
    Nesta rota podemos adicionar um heroi ao nosso arquivo JSON mandando os dados necessários: name, age and power e assim que o request é enviado ele é validado da seguinte mandeira:

    ### Validação:
     Request creating a hero: <br>
     `{"error":"name is missing"}`
     Se algum dos campos solicitados estiverem pendentes a API retornará um response informando o erro e o detalhando.

    #### `Response:`
    ```
    {
      "success":"Hero created with success",
      "id":1608913543970
    }    
    ```

## Usage

Para ligar o server basta rodar `node index.js`
```
Server is running at 3000
```

Vai rodar como uma aplicação express

### Enviando request
Podemos usar o curl, insomnia ou postman,qualquer plataforma que consiga enviar requests.

### `Exemplos`
Para ver exemplos basta abrir o arquivo script.sh, nele usamos as 3 operações disponíveis na API.

## `Agradecimento`

Foi incrível desenvolver está API e ser instruído pelo grande `Erick Wendel`, me inspiro muito nele e assisto seus conteúdos porque os julgo muito ricos em conhecimento e ainda assim grande parte gratuíta.