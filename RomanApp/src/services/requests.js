import api from './api.js'

//Login
const repostaLogin = axios.post("/login", {
    email: 'batatinha',
    senha: 'batata123'
}); 

const token = repostaLogin.data.token;
//salvar no storage



//Listagem usuarios

const listarUsuarios = axios.get("/Usuarios", {
        area : 'Desenvolvimento'
}); 

const respostalista = listarUsuarios.data;


// listagem projetos

const listarprojetos = axios.get('/projetos');

const respostaprojetos = listarprojetos.data;


//Cadastrar projeto

const cadastrarProjeto = axios.post('/projetos',{
        nome: 'Batatinha',
        idtema: 1,
        ativo: true
});


//alterar projeto

const alterarProjeto = axios.post('/projetos',{
    id: 2,
    nome: 'Batatinha',
    idtema: 1,
    ativo: true
});





//listagem temas

const listartemas = axios.get('/temas');


const respostatemas = listartemas.data;




//cadastrar temas

const cadastrartema = axios.post('/temas',{
    nome: 'batata',
    ativo: true
});


//atualizar temas 

const  atualizartema = axios.post('/temas',{
    nome: 'batata',
    ativo: true
});




