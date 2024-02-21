using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class Feedback
    {
        public int FeedbackId { get; set; }
        public string? Feedback1 { get; set; }
        public int? CustomerId { get; set; }
        public int? CarId { get; set; }

        public virtual Car? Car { get; set; }
        public virtual Customer? Customer { get; set; }
    }
}
