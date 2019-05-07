using Microsoft.EntityFrameworkCore;
using RomanWebApi.Models;

namespace RomanWebApi
{
    public partial class DesafioRomanContext : DbContext
    {
        public DesafioRomanContext()
        {
        }

        public DesafioRomanContext(DbContextOptions<DesafioRomanContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Projetos> Projetos { get; set; }
        public virtual DbSet<Temas> Temas { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(
                    "Data Source = .\\SQLEXPRESS; Initial Catalog = TIPOFRONT_PROJETO_ROMAN; user id = sa ; pwd = 132"
                );
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Projetos>(entity =>
            {
                entity.ToTable("PROJETOS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Ativo)
                    .HasColumnName("ATIVO")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Idtema).HasColumnName("IDTEMA");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdtemaNavigation)
                    .WithMany(p => p.Projetos)
                    .HasForeignKey(d => d.Idtema)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PROJETOS__IDTEMA__4F7CD00D");
            });

            modelBuilder.Entity<Temas>(entity =>
            {
                entity.ToTable("TEMAS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Ativo)
                    .HasColumnName("ATIVO")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME")
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.ToTable("USUARIOS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("EMAIL")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Equipe).HasColumnName("EQUIPE")
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasColumnName("SENHA")
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });
        }
    }
}
