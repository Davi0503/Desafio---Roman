using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RomanWebApi.Interfaces;
using RomanWebApi.Models;
using RomanWebApi.Repositorios;
using System;

namespace RomanWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class TemasController : ControllerBase
    {
        private readonly ITemasRepository Repositorio;

        public TemasController() {
            Repositorio = new TemasRepository();
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
        public IActionResult Cadastrar(Temas tema) {
            try {
                Repositorio.Cadastrar(tema);
                return Ok(new { Sucesso = "Tema cadastrado com sucesso" });
            } catch (Exception exc) {
                return BadRequest(new { erro = exc.Message });
            }
        }

        [Authorize]
        [HttpPut("alterar")]
        public IActionResult Alterar(Temas tema) {
            try {
                Repositorio.Alterar(tema);
                return Ok(new { Sucesso = "Tema alterado com sucesso" });
            } catch (Exception exc) {
                return BadRequest(new { erro = exc.Message });
            }
        }
    }
}