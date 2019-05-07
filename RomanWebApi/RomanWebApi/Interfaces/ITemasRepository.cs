using RomanWebApi.Models;
using System.Collections.Generic;

namespace RomanWebApi.Interfaces {
    /// <summary>
    /// Interface com metodos de listagem cadastro e alteração de temas
    /// </summary>
    public interface ITemasRepository {
        List<Temas> Listar();
        List<Temas> ListarAtivos();
        void Cadastrar(Temas tema);
        void Alterar(Temas tema);
    }
}
