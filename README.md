# SENAI Desafio : Roman  

## Sumario
- 1 **[Requisitos](#Requisitos)**  
- 2 **[Banco de dados](#Banco-de-dados)**  
  - 2.1. **[Modelos](#Modelos)**
  - 2.2. **[Criação](#Criação)**  
  - 2.3. **[Valores iniciais](#Valores-iniciais)**  
- 3 **[API](#API)**  
  - 3.1. **[Inicialização](#API)**  
  - 3.2. **[Endpoints](#Endpoints)**  
    - 3.2.1. **[Usuarios](#Usuarios)**  
    - 3.2.2. **[Projetos](#Projetos)**  
    - 3.2.3. **[Temas](#Temas)**  
- 4 **[Aplicativo](#Aplicativo)**  
  - 4.1. **[Inicialização](#Aplicativo)**  
    - 4.1.1 **[Android SDK](#Android-SDK)**  
    - 4.1.2 **[React Native Modules](#React-Native-Modules)**  
  - 4.2. **[Prototipação](#Prototipação)**  
  - 4.3. **[Telas](#Telas)**  
 
## Requisitos
Este são os requisitos minimos para rodar a aplicação
 - **Banco de dados**  
   - Sql Server  
 - **API**  
    - Visual Studio (opcional, Veja [API:Inicialização](#Inicialização))
 - **Bibliotecas**  
    - Microsoft.EntityFrameworkCore **(2.1.1)**  
    - Microsoft.EntityFrameworkCore.SqlServer **(2.1.1)**  
    - Microsoft.EntityFrameworkCore.Design **(2.1.1)**  
    - Microsoft.EntityFrameworkCore.Tools **(2.1.1)**  
    - Swashbuckle.AspNetCore **(4.0.1)**  
 - **Opcional**  
   - Postman **(Testar os endpoints da API)**  
- **Aplicativo**  
  - Java SDK  
  - Node.js (Necessario para instalar todas as dependencias do projeto)  
  - React Native Modules (veja [Aplicativo:Inicialização](#Aplicação))  
  - Android SDK (veja [Aplicativo:Inicialização](#Aplicação))   
  - Alguma AVD (ou um celular com depuração USB ativado [Rodando a aplicação no seu Celular](https://facebook.github.io/react-native/docs/running-on-device))  

## Banco de dados  
O banco de dados deve ser a primeira coisa a ser criada.  

### Modelos  
Aqui estão os modelos do banco de dados que foram criados.  
- #### Modelo Logico  
![Modelo Logico]()  

- #### Modelo Conceitual  
![Modelo Conceitual]()  

- #### Modelo Fisico  
![Modelo Fisico]()  

### Criação
A primeira coisa a se fazer para que a aplicação funcione é a criação de um banco de dados (os arquivos podem ser encontrados [aqui](https://github.com/Davi0503/Senai-Roman-Desafio-TipoFront/blob/master/Banco%20de%20dados/DB_Cria%C3%A7%C3%A3o.sql)).  
Selecione os 2 primeiros comandos (Criar e usar o banco de dados) e os execute (**F5**) .
Depois disso, selecione todos os outros e execute-os tambem.  
### Valores iniciais  
Como não há telas de cadastro de usuarios, os valores são inseridos à mão atraves de comandos SQL.  
No arquivo [DB_ValoresIniciais](#) terão os Usuarios que **deverão ser inseridos** (ou não havera maneira de logar, já que não haverá nenhuma Usuario no banco de dados).  
Os valores iniciais são :  
 - **Usuario 1** : 
   - **Email :** admin@admin.com  
   - **Senha :** 123456778  
   - **Equipe:** 1 (Administrador)  
   
 - **Usuario 2** : 
   - **Email :** helena@gmail.com  
   - **Senha :** umasenhadificil123  
   - **Equipe:** 2 (Desenvolvimento)  
   
 - **Usuario 3** : 
   - **Email :** professorderedesqueeunaoseionome@gmail.com  
   - **Senha :** umasenhamaisdificildoqueaanterior123  
   - **Equipe:** 2 (Redes)  
   
 - **Usuario 4** : 
   - **Email :** email@gmail.com  
   - **Senha :** senha@senha  
   - **Equipe:** 4 (Multimidia)  

## API
A api deve ser criada logo apos a criação do banco de dados.  
Diferente do banco de dados, você não precisará executar qualquer comando, apenas mudar a string de conexão caso sua intancia do Sql Server tenha um nome diferente.  

### Inicialização  
Você pode iniciar a API quando seu banco de dados tiver finalizado. 
Apenas algumas mudanças deverçao ser feitas e a primeira deverá ser no arquivo [DesafioRomanContext.cs](#) lá você deve alterar a string de conexão.  
```csharp
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
 	if (!optionsBuilder.IsConfigured){
 		optionsBuilder.UseSqlServer(
		"Data Source = .\\[NOME DO SEU SERVIDOR]; initial catalog = TIPOFRONT_PROJETO_ROMAN;user id = sa ; pwd = 132"
		);
		// No lugar de [NOMESERVIDOR] coloque o nome da sua instancia do SQL Server 
		// Não é necessario mudar o TIPOFRONT_PROJETO_ROMAN (se você criou o banco de dados com este nome)
		// initial catalog seria o banco de dados que ele irá iniciar usando
		// user id é o seu usuario administrador do banco de dados
		// pwd é a senha do usuario administrador 
		//  Caso seu banco não precise de login para abrir utilize -> Integrated Security=SSPI  no lugar de user id = sa; pwd = 132
       }
```
A outra alteração é no arquivo [launchSettings.json]() troque o valor do **applicationUrl** (que provavelmente estará localhost:5000) , coloque o seu ip (acessado o cmd e digitando ipconfig você consegue pegar o ipv4).  
Terá 2 ocorrencias de localhost:5000 então procure bem.  

### Endpoints  
Todos os endpoints da API podem ser vistos no endpoint */swagger/index.html*, mas nem todos podem ser acessados já que alguns requerem autenticação.  
O recomendado é ultilizar o [Postman](https://www.getpostman.com/downloads/) porque tem como fazer requisições utilizando token (e todos os endpoins com exceção do de login, precisam disso).  
#### Usuarios  
Aqui ficara todos os endpoints dos usuarios (*/api/Usuarios*).  
- **Como o objeto é retornado em json**:  
```json
{
	"id": 0,
	"email": "email",
	"senha": "senha",
	"equipe": "equipe"
}
```  
- ***/login***  
  - Metodo : **POST**  
  - **Corpo** : email e senha
 
- **Retorno **(200) : Um token gerado usado para acessar os outros endpoints  
``` json
{
	"token": "{algum token}"
}
```
 - **Retorno** (404) : [Uma mensagem de erro](#Mensagem-de-erro).  
- ***/listar***  
  - **Metodo** : GET  
  - **Permissão** : Somente administrador  
  - **Corpo** : Não tem corpo  
  - **Retorno **(200) : Todos os usuarios que não são administradores  

- ***listar/{nome-equipe}***
  - **Metodo** : GET  
  - **Permissão** : Somente administrador  
  - **Corpo** : Não tem corpo  
 - **Retorno** (200) : Todos os usuarios que não são administradores e de uma equipe especifica.  

#### Projetos  
Aqui ficara todos os endpoints dos projetos (/api/Projetos).  

- **Como o objeto é retornado em json**  
 ``` json
{
		"id": 1,
		"nome": "projeto",
		"idtema": 1,
		"ativo": true
}
 ```
- ***/listar***  
  - **Metodo** : GET  
  - **Permissão** : Qualquer usuario autenticado  
  - **Corpo** : Não tem corpo  
  - **Retorno** (200) : Todos os projetos **ativos**  

- ***/cadastrar***  
  - **Metodo** : POST  
  - **Permissão** : Qualquer usuario autenticado  
  - **Corpo** : Um Projeto  
  - **Retorno** (200) : [Uma mensagem de sucesso](#Mensagem-de-sucesso). 
  - **Retorno** (404) : [Uma mensagem de erro](#Mensagem-de-erro).  
- ***/alterar***  
  - **Metodo** : PUT  
  - **Permissão** : Qualquer usuario autenticado  
  - **Corpo** : Um Projeto  
  - **Retorno** (200) : [Uma mensagem de sucesso](#Mensagem-de-sucesso). 
  - **Retorno** (404) : [Uma mensagem de erro](#Mensagem-de-erro).  
 
#### Temas   
Aqui ficara todos os endpoints dos projetos (/api/Temas).
- **Como o objeto é retornado em json**  
 ``` json
{
	"id": 1,
	"nome": "tema"
}
 ```
- ***/listar***  
  - **Metodo** : GET  
  - **Permissão** : Qualquer usuario autenticado  
  - **Corpo** : Não tem corpo  
  - **Retorno** (200)  : Somente os temas **ativos**  
  
- ***/cadastrar***  
Cadastra um tema no banco de dados  
  - **Metodo** : POST  
  - **Permissão** : Qualquer usuario autenticado  
  - **Corpo** : Um objeto do tipo tema  
  - **Retorno** (200) : [Uma mensagem de sucesso](#Mensagem-de-sucesso). 
  - **Retorno** (404) : [Uma mensagem de erro](#Mensagem-de-erro).  
 
- ***/alterar***  
Altera um tema do banco de dados  
  - **Metodo** : PUT  
  - **Permissão** : Qualquer usuario autenticado  
  - **Corpo** Mesmo corpo *cadastrar* só que com um campo id.  
  - **Retorno** (200) : [Uma mensagem de sucesso](#Mensagem-de-sucesso). 
  - **Retorno** (404) : [Uma mensagem de erro](#Mensagem-de-erro).  
 
### Feedback  
Só possui 2 feedbacks, mensagem de sucesso e de erro
 #### Mensagem de erro  
 Retorna o nome do campo e o que esta errado, caso o erro não seja nos campos , retorna **erro** e a mensagem do erro.  
Exceção no caso do usuario que retorna***"usuario" : "Email ou senha invalidos"***
  ```json
{
	"{nome do campo}": "campo invalido"
}
```
 #### Mensagem de sucesso  
 Todas as mensagens de sucesso tem o nome da chave definida como **sucesso**:  
 ```json
{
	"sucesso": "{mensagem de sucesso}"
}
```
## Aplicativo  
Com o Banco de dados e a API finalizados , você pode iniciar o aplicativo.  
Aqui é uma das partes mais complicadas. (mas você passou por tudo isso já então, eu confio em você ...você consegue).  

### Inicialização  
Para iniciar a aplicação será necessario 3 ~~pequenos~~ passos demorados para que a aplicação funcione.  

#### Node.js  
* Baixe o [node.js](https://nodejs.org/en/) e Instale-o  
* Abra o prompt de comando na pasta do projeto e digite o comando :  
**npm install --save react-native-cli**  
* Após a instalação do modulos do React-Native, você vai precisar de mais 2 bibliotecas. Aqui está o comando para cada uma delas:  
**npm install --save react-native-gesture-handler** 
(biblioteca usada para reconhecer deslizes e outras interações com a tela)  
**npm install --save react-native-navigation** 
(biblioteca usada para facilitar a navegação entre telas)  
* Digite **react-native run-android** e veja... Nada vai acontecer porque você precisará executar o proximo passo (então feche o prompt de comando por agora)  

#### Java SDK e Variaveis de ambiente  
Para esse passo será necessario criar uma conta na oracle (eu sei é chato, mas é isso) pra poder baixar o [Java SDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html)  
Após intalar o Java você poderá seguir os passos abaixo.  
Você precisará configurar algumas coisas no seu sistema (não se preocupe, não é nada que vá explodir seu computador ou algo parecido).  
   * Abra o **menu Iniciar da Barra de tarefas do Windows** (ou aperte aquele botão entre o **ctrl** e **alt**)
   *  Selecione **Editar as variaveis de ambiente do sistema**  
   * Clique em **Variaveis de ambiente**  
   * Em **Variaveis do sistema** selecione **Novo...**  
   * Crie uma variavel com o nome **JAVA_HOME** e defina o valor que deve ser o caminho de instalação do Java Sdk (o padrão é **C:\Program Files\Java\jdk-12.0.1**)  
   * Procure e Selecione a variavel **Path** e clique em editar e adcione no final **%JAVA_HOME%\bin** (se estiver no windows 7 ou inferior você precisará colocar um **;** antes do primeiro %)  
  
#### Android Studio  
Se você não quiser ocupar espaço no seu celular para testar a aplicação, você pode instalar o android studio ou alguma AVD ae, mas ... eu não sei... vou só ensinar como fazer isso usando o Android Studio.  
é algo simples:  
*  Vá clicando em **Next** até chegar na parte de instalação.  
*  Selecione **Custom Instalation**  
*  Instale tudo (vai demorar um pouco...Faça um café e ~~relaxe um pouco~~ brincadeira vá para o proximo passo)  
* Enquanto o projeto estiver instalando faça isso  
    * Vá para Variaveis de ambiente (você ja sabe como ;/)
    * Crie uma variavel com o nome **ANDROID_HOME** e defina o valor como **C:\Users\{seu-usuario}\AppData\Local\Android\Sdk**
    * Volte a **Path** e edite-a denovo adcionando agora :
    **%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools**
*  Quando terminar, **crie um projeto** (não precisa nomea-lo nem nada, é só para acessarmos a AVD)  
* Selecione **Tools > AVD Manager**.  
* Clique em **AVD Manager** ![AVD Icone](https://developer.android.com/studio/images/buttons/toolbar-avd-manager.png) na barra de ferramentas.  
  
### Prototipação  
A prototipação foi feita utilizando Adobe XD. Foi feito apenas o Layout de alta fidelidade.  
As telas criadas estão todas na pasta [Modelo Adobe XD](https://github.com/Davi0503/Senai-Roman-Desafio-TipoFront/tree/dev/Modelo%20Adobe%20XD).  

> Tela de login (prototipação , alta fidelidade)  
![Tela Prototipação](https://raw.githubusercontent.com/Davi0503/Senai-Roman-Desafio-TipoFront/master/Modelo%20Adobe%20XD/Login.png)
>  

Vimos que algumas paginas poderiam ser reaproveitadas (as de cadastro e alteração) então fizemos ambas serem a mesma (apenas com a diferença de que as de cadastro irão se iniciar sem valores e a de alterar receberão valores).  
> Tela cadastro/alteração temas 
![Tela Prototipação](https://raw.githubusercontent.com/Davi0503/Senai-Roman-Desafio-TipoFront/master/Modelo%20Adobe%20XD/Cadastra-Altera%20Temas.png)
  
> Tela de listagem de temas (sem as informações preenchidas)  
![Tela Prototipação](https://raw.githubusercontent.com/Davi0503/Senai-Roman-Desafio-TipoFront/master/Modelo%20Adobe%20XD/Listar%20Temas.png)
>

O Navigator será diferente para um administrador (enquanto dos professores terá somente 2 botões (Temas e projetos), o do administrador terá 3 (Professores,Temas e projetos))  
> Tela de listagem de professores (somente administradores podem acessa-la )  
![Tela Prototipação](https://raw.githubusercontent.com/Davi0503/Senai-Roman-Desafio-TipoFront/master/Modelo%20Adobe%20XD/Listar%20Professores.png)

### Telas  
O Projeto ~~tem no total~~ deveria ter 6 telas sendo elas a de login (principal), cadastro e alteração de Temas e Projetos e a tela de listagem de Professores.  
Todas as outras telas só são acessiveis após o usuario fazer o login .  
![Fluxograma Telas]()

### Telas finalizadas (completamente)  
- [x] Login  
- [x] Listar Temas  
- [x] Listar Projetos  
- [ ] Cadastro/Alteração Projetos  
- [ ] Cadastro/Alteração Temas  
- [ ] Listar Professores  

