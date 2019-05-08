using RomanWebApi.Models;
using System.Collections.Generic;

namespace RomanWebApi.Interfaces {
    /// <summary>
    /// Interface que lida com dados referentes ao usuario
    /// </summary>
    public interface IUsuariosRepository {

        /// <summary>
        /// Lista todos os usuarios de um determinado tipo 
        /// </summary>
        /// <param name="area">Area dos usuarios a ser filtrada</param>
        /// <returns>Uma lista com todos os usuarios de uma determinada area</returns>
        List<Usuarios> Listar(string area);

        /// <summary>
        /// Lista todos os usuarios do banco de dados
        /// </summary>
        /// <returns>Uma lista com todos os usuarios de uma determinada area</returns>
        List<Usuarios> Listar();

        /// <summary>
        /// Procura um usuario no banco de dados com a combinação de Email e Senha
        /// </summary>
        /// <param name="Email">Email do usuario a ser procurado</param>
        /// <param name="Senha">Senha do usuario a ser procurado</param>
        /// <returns>Retorna Um usuario com a combinação de email e senha enviados por parametros</returns>
        Usuarios Login(string Email,string Senha);
    }
}
