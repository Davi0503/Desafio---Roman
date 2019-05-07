# SENAI Desafio : Roman  

## Sumario
- 1 **[Requisitos](#Requisitos)**  
- 2 **[Banco de dados](#Banco-de-dados)**  
  - 2.1. **[Criação](#Criação)**  
  - 2.2. **[Valores iniciais](#Valores-iniciais)**  
- 3 **[API](#API)**  
 - 3.1. **[Inicialização](#API)**  
 - 3.2. **[Endpoints](#Endpoints)**  
- 4 **[Aplicativo](#Aplicativo)**  
 - 4.1. **[Inicialização](#Aplicativo)**  
 - 4.2. **[Telas](#Telas)**  
 
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
  - Node.js  
  - React Native Modules (veja [Andoid:Inicialização](#Aplicação))  
  - Android SDK   
  - Alguma AVD (ou um celular com depuração USB ativado [Rodando a aplicação no seu Celular](https://facebook.github.io/react-native/docs/running-on-device))  

## Banco de dados  
O banco de dados deve ser a primeira coisa a ser criada.  
### Criação
A primeira coisa a se fazer para que a aplicação funcione é a criação de um banco de dados (os arquivos podem ser encontrados [aqui](#)).  
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
Você pode iniciar a API quando seu banco de dados tiver finalizado. Apenas uma mudança deverá ser feita e deverá ser no arquivo [DesafioRomanContext.cs](#) lá você deve alterar a string de conexão.  
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
### Endpoints  
## Aplicativo  
### Inicialização  
### Telas  
