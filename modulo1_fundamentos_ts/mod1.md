* typescript

  * superset de js
  * npm i -g typescript > instalar ts globalmente
  * npm init --y > cria package.json
  * npm i -D typescript > instala ts no projeto como dependência de desenvolvimento
  * npm i -D ts-node > instala dependência de desenvolvimento pra transpilar e rodar o js mais fácil doq transpilar na mão e executar dps
    * adiciona "dev":"ts-node-dev app.ts" nos scripts do package.json
    * npm run dev, transpila e executa de uma vez, facinho
  * npx tsc --init > cria o tsconfig.json
  * npx tsc app.ts > transpila app.ts para app.js
  * node app.js > executa o app.js

* tipos primitivos
  * string
  * number
  * boolean

* interface x type
  * interfaces servem pra declaram tipos de objetos {}

* objetos literais
  * servem pra substituir uma caralhada de else if else if else if else if else if else if else if else if else if else if else if else if else if else if

* poo
  * abstração
    * implementar métodos e atributos relevantes de algo em código
  * herança
    * compartilhar métodos e atributos entre classes
  * polimorfismo
    * permite que um classe filho chame um método do pai aplicando mudanças
    * é possível alterar a assinatura de um método do pai (tipo do retorno)
    * é possível alterar o fluxo de um método do pai (oq o método faz)

* super()
  * no começo do construtor de uma classe que estende de outra para puxar os atributos e métodos dela, também é necessário passar os valores para preencher os atributos do construtor da classe pai

* import e export de classes entre arquivos

* props privadas com getters e setters públicos para serem acessados ou alterados ou também protected, para serem acessados pelos filhos