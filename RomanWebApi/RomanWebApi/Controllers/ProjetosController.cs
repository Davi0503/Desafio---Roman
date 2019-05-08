using System;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RomanWebApi.Interfaces;
using RomanWebApi.Models;
using RomanWebApi.Repositorios;

namespace RomanWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class ProjetosController : ControllerBase {
        private readonly IProjetosRepository Repositorio;

        public ProjetosController() {
            Repositorio = new ProjetosRepository();
        }

        [Authorize]
        [HttpGet("listar")]
        public IActionResult Listar() {
            try {
                return Ok(Repositorio.Listar());
            } catch (Exception exc) {
                return BadRequest(new { erro = exc.Message });
            }
        }

        [Authorize]
        [HttpGet("listar/ativos")]
        public IActionResult ListarAtivos() {
            try {
                return Ok(Repositorio.ListarAtivos());
            } catch (Exception exc) {
                return BadRequest(new { erro = exc.Message });
            }
        }

        [Authorize]
        [HttpPost("cadastrar")]
        public IActionResult Cadastrar(Projetos projeto) {
            try {
                Repositorio.Cadastrar(projeto);
                return Ok(new {Sucesso = "Projeto cadastrado com sucesso"});
            } catch (Exception exc) {
                return BadRequest(new { erro = exc.Message });
            }
        }

        [Authorize]
        [HttpPut("alterar")]
        public IActionResult Alterar(Projetos projeto) {
            try {
                Repositorio.Alterar(projeto);
                return Ok(new { Sucesso = "Projeto alterado com sucesso" });
            } catch (Exception exc) {
                return BadRequest(new { erro = exc.Message });
            }
        }
    }
}