using System.Linq;
using System.Collections.Generic;
using RomanWebApi.Models;
using RomanWebApi.Interfaces;

namespace RomanWebApi.Repositorios {
    /// <summary>
    /// Repositorio com metodos de cadastro alteração e listagem de temas
    /// </summary>
    public class TemasRepository : ITemasRepository {
        /// <summary>
        /// Altera os valores de um tema cadastrado no banco de dados
        /// </summary>
        /// <param name="tema">Tema a ser alterado</param>
        public void Alterar(Temas tema) {
            using (DesafioRomanContext romanContext = new DesafioRomanContext()) {
                romanContext.Temas.Update(tema);
            }
        }

        /// <summary>
        /// Cadastra um tema no banco de dados
        /// </summary>
        /// <param name="tema">Tema a ser cadastrado</param>
        public void Cadastrar(Temas tema) {
            using (DesafioRomanContext romanContext = new DesafioRomanContext()) {
                romanContext.Temas.Add(tema);
            }
        }

        /// <summary>
        /// Lista todos os Temas do banco de dados
        /// </summary>
        /// <returns>Retorna uma lista com todos os temas do banco de dados</returns>
        public List<Temas> Listar(){
            using (DesafioRomanContext romanContext = new DesafioRomanContext()) {
                return romanContext.Temas.ToList();
            }
        }
    }
}
