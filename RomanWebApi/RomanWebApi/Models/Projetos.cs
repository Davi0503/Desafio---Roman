using System.ComponentModel.DataAnnotations;

namespace RomanWebApi.Models
{
    public partial class Projetos
    {
        public int Id { get; set; }
        [Display(Name = "Descrição")]
        [StringLength(maximumLength: 200, ErrorMessage = "A descrição do projeto não pode ser muito grande")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "A descrição é obrigatorio")]
        public string Nome { get; set; }
        [Required(AllowEmptyStrings =false, ErrorMessage = "O projeto precisa ter um tema")]
        public int Idtema { get; set; }
        public bool Ativo { get; set; }

        public Temas IdtemaNavigation { get; set; }
    }
}
