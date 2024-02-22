
using BookMyCar.Models;
using System.Text.Json.Serialization;

namespace BookMyCar
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<BookmycarDbContext>();
            builder.Services.AddControllers().AddJsonOptions(Options =>
            {
                Options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                Options.JsonSerializerOptions.WriteIndented = true;
            });
            builder.Services.AddCors(policybuilder => policybuilder.AddDefaultPolicy(policy=>policy.WithOrigins("*").AllowAnyHeader().AllowAnyHeader()));

            var app = builder.Build();
            app.UseCors();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
