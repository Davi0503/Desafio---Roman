using RomanWebApi.Models;
using System.Collections.Generic;

namespace RomanWebApi.Interfaces {
    /// <summary>
    /// Interface com metodos de listagem cadastro e alteração de temas
    /// </summary>
    interface IProjetosRepository {
        /// <summary>
        /// Lista todos os projetos do banco de dados
        /// </summary>
        /// <returns>Retorna uma lista de Projetos</returns>
        List<Projetos> Listar();
        /// <summary>
        /// Cadastra um Projeto no banco de dados
        /// </summary>
        /// <param name="projeto">Projeto a ser cadastrado</param>
        void Cadastrar(Projetos projeto);
        /// <summary>
        /// Altera um projeto ja cadastrado no banco de dados
        /// </summary>
        /// <param name="projeto">projeto a ser alterado</param>
        void Alterar(Projetos projeto);
    }
}
