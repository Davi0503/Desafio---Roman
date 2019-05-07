using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Swashbuckle.AspNetCore.Swagger;

namespace RomanWebApi {
    public class Startup {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services) {

            services.AddMvc().AddJsonOptions(
                i => {
                    i.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                    i.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                }
            ).SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddAuthentication(
                  c => {
                      c.DefaultAuthenticateScheme = "JwtBearer";
                      c.DefaultChallengeScheme = "JwtBearer";
                  }
            ).AddJwtBearer(
                "JwtBearer",
                i => {
                    i.TokenValidationParameters = new TokenValidationParameters() {
                        ValidateActor = true,
                        ValidateIssuer = true,
                        ValidAudience = "ApiRoman",
                        ValidIssuer = "ApiRoman",
                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.FromHours(1),
                        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("TipoFront-ProjetoRoman"))
                    };
                }
            );

            services.AddSwaggerGen(
                i => i.SwaggerDoc("v1", 
                    new Info() {
                        Title = "Desafio Roman", Version = "v1"
                    }
                )
            );

            services.AddCors(options => 
                {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
                }
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("CorsPolicy");
            app.UseAuthentication();


            app.UseSwagger();

            app.UseSwaggerUI(c => 
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Desafio Roman");
                }
            );

            app.UseMvc();
        }
    }
}
