using System.ComponentModel.DataAnnotations;

namespace RomanWebApi.Models
{
    public partial class Usuarios
    {
        public int Id { get; set; }
        [Required(AllowEmptyStrings =false,ErrorMessage ="O email é obrigatorio")]
        [StringLength(maximumLength:200,ErrorMessage = "O email inserido é muito grande")]
        public string Email { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "A senha é obrigatorio")]
        [StringLength(maximumLength:200, ErrorMessage = "A senha inserida é muito grande")]
        public string Senha { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "O usuario precisa ter uma equipe")]
        public string Equipe { get; set; }
    }
}
