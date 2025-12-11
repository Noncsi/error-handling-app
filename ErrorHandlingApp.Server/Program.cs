using ErrorHandlingApp.Server.models;
using System.Net;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// API
app.MapGet("/api/demo/success", () => Results.Ok());

app.MapGet("/api/demo/error", () =>
{
    var error = new ErrorResponse
    {
        StatusCode = HttpStatusCode.InternalServerError,
        Name = "INTERNAL_SERVER_ERROR",
        Message = "Something went wrong on the server.",
    };
    return Results.Json(error, statusCode: ((int)error.StatusCode));
});

app.MapGet("/api/demo/upgrade", () =>
{
    var error = new ErrorResponse
    {
        StatusCode = HttpStatusCode.PaymentRequired,
        Name = "PAYMENT_REQUIRED",
        Message = "Your current plan does not allow this action.",
    };
    return Results.Json(error, statusCode: ((int)error.StatusCode));
});

// Serve Angular app
app.UseDefaultFiles();
app.MapStaticAssets();
app.MapFallbackToFile("/index.html");

app.Run();
