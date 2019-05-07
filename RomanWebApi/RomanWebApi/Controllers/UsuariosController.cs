using System;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using RomanWebApi.Interfaces;
using RomanWebApi.Models;
using RomanWebApi.Repositorios;
using RomanWebApi.ViewModels;

namespace RomanWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuariosRepository Repositorio;

        public UsuariosController() {
            Repositorio = new UsuariosRepository();
        }

        [HttpGet("listar")]
        public IActionResult Listar() {
            try {
                return Ok(Repositorio.Listar());
            } catch (Exception exc) {
                return BadRequest(exc.Message);
            }
        }

        [HttpGet("listar/{tipo}")]
        public IActionResult Listar(string tipo) {
            try {
                return Ok(Repositorio.Listar(tipo));
            } catch (Exception exc) {
                return BadRequest(exc.Message);
            }
        }

        [HttpPost("login")]
        public IActionResult Login(UsuariosViewModel usuario) {
            try {
                Usuarios user = Repositorio.Login(usuario.Email, usuario.Senha);
                if (user == null) {
                    return BadRequest(
                        new{
                            Usuario = "Email e senha invalidos"
                        }
                    );
                } else {
                    var claims = new[] {
                    new Claim(JwtRegisteredClaimNames.Jti,user.Id.ToString()),
                    new Claim(ClaimTypes.Role,user.Equipe),
                    new Claim("Role",user.Equipe),
                };

                    var chave = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("TipoFront-ProjetoRoman"));

                    var credenciais = new SigningCredentials(chave, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(
                        issuer: "ApiRoman",
                        audience: "ApiRoman",
                        claims: claims,
                        expires: DateTime.Now.AddHours(1),
                        signingCredentials: credenciais
                    );

                    return Ok(new {
                        Token = new JwtSecurityTokenHandler().WriteToken(token)
                    });
                }
            } catch (Exception exc) {
                return BadRequest(exc.Message);
            }
        }


    }
}