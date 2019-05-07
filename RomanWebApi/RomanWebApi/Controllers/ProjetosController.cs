using System;
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

        [HttpGet("listar")]
        public IActionResult Listar() {
            try {
                return Ok(Repositorio.Listar());
            } catch (Exception) {
                return BadRequest();
            }
        }

        [HttpPost("cadastrar")]
        public IActionResult Cadastrar(Projetos projeto) {
            try {
                Repositorio.Cadastrar(projeto);
                return Ok(new {Sucesso = "Projeto cadastrado com sucesso"});
            } catch (Exception exc) {
                return BadRequest(new { erro = exc.Message });
            }
        }

        [HttpPost("alterar")]
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