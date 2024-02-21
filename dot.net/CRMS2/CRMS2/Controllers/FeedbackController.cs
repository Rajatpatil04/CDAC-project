using CRMS2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CRMS2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        [HttpGet("Feedback")]
        public List<Feedback> GetAllFeedbacks()
        {
            List<Feedback> feedback = new List<Feedback>();
            using (var db = new bookmycar_dbContext())
            {
                feedback = db.Feedbacks.ToList();
            }
            return feedback;
        }


        [HttpPost]
        public String InsertEmp(Feedback feedback)
        {
            using (var db = new bookmycar_dbContext())
            {
                 db.Feedbacks.Add(feedback);
                db.SaveChanges();
            }
            return "bullya";
        }

    }
}
