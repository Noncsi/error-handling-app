using System.Net;

namespace ErrorHandlingApp.Server.models
{
    public class ErrorResponse
    {
        public HttpStatusCode StatusCode { get; set; }
        public required string Name { get; set; }
        public required string Message { get; set; }
    }
}
