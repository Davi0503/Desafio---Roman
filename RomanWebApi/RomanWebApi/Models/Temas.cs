using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RomanWebApi.Models
{
    public partial class Temas
    {
        public Temas()
        {
            Projetos = new HashSet<Projetos>();
        }

        public int Id { get; set; }
        [Display(Name ="Descrição")]
        [StringLength(maximumLength:200,ErrorMessage ="A descrição do tema não pode ser muito grande")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "A descrição é obrigatorio")]
        public string Nome { get; set; }
        public bool Ativo { get; set; }

        public ICollection<Projetos> Projetos { get; set; }
    }
}
