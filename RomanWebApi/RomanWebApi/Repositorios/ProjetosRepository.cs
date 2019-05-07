using System.Collections.Generic;
using System.Linq;
using RomanWebApi.Interfaces;
using RomanWebApi.Models;

namespace RomanWebApi.Repositorios {
    /// <summary>
    /// Repositorio com metodos de cadastro alteração e listagem de projetos
    /// </summary>
    public class ProjetosRepository : IProjetosRepository {
        /// <summary>
        /// Altera os valores de um Projeto cadastrado no banco de dados
        /// </summary>
        /// <param name="projeto">Projeto a ser alterado</param>
        public void Alterar(Projetos projeto) {
            using (DesafioRomanContext romanContext = new DesafioRomanContext()) {
                romanContext.Projetos.Update(projeto);
            }
        }

        /// <summary>
        /// Cadastra um Projeto no banco de dados
        /// </summary>
        /// <param name="projeto">Projeto a ser cadastrado</param>
        public void Cadastrar(Projetos projeto) {
            using (DesafioRomanContext romanContext = new DesafioRomanContext()) {
                romanContext.Projetos.Add(projeto);
            }
        }

        /// <summary>
        /// Lista todos os Projetos do banco de dados
        /// </summary>
        /// <returns>Retorna uma lista com todos os Projetos do banco de dados</returns>
        public List<Projetos> Listar() {
            using (DesafioRomanContext romanContext = new DesafioRomanContext()) {
                return romanContext.Projetos.ToList();
            }
        }
    }
}
