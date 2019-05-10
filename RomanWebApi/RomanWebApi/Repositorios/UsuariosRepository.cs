using System.Collections.Generic;
using System.Linq;
using RomanWebApi.Interfaces;
using RomanWebApi.Models;

namespace RomanWebApi.Repositorios {
    public class UsuariosRepository : IUsuariosRepository {
        /// <summary>
        /// Lista todos os usuarios por area (equipe)
        /// </summary>
        /// <param name="area">Area do usuario a ser procurado</param>
        /// <returns>Retorna uma lista de usuarios de uma determinada area</returns>
        public List<Usuarios> Listar(string area) {
            using (DesafioRomanContext romanContext = new DesafioRomanContext()) {
                return romanContext.Usuarios.Where(i => i.Equipe == area).ToList();
            }
        }

        /// <summary>
        /// Lista todos os usuarios (Menos do tipo administrador)
        /// </summary>
        /// <returns>Uma lista com todos os usuarios</returns>
        public List<Usuarios> Listar() {
            using (DesafioRomanContext romanContext = new DesafioRomanContext()) {
                return romanContext.Usuarios.Where(i => i.Equipe != "Administrador").ToList();
            }
        }

        /// <summary>
        /// Procura e retorna um usuario logado com a combinação exata de email e senha
        /// </summary>
        /// <param name="Email">Email do Usuario</param>
        /// <param name="Senha">Senha do Usuario</param>
        /// <returns>Retorna um usuario que contenha as espeficiações inseridas</returns>
        public Usuarios Login(string Email, string Senha) {
            using (DesafioRomanContext romanContext = new DesafioRomanContext()) {
                return romanContext.Usuarios.ToList().Find(i => i.Email == Email && i.Senha == Senha);
            }
        }
    }
}
