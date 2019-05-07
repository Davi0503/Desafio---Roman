using RomanWebApi.Models;
using System.Collections.Generic;

namespace RomanWebApi.Interfaces {
    /// <summary>
    /// Interface com metodos de listagem cadastro e alteração de temas
    /// </summary>
    public interface ITemasRepository {
        List<Temas> Listar();
        void Cadastrar(Temas tema);
        void Alterar(Temas tema);
    }
}
