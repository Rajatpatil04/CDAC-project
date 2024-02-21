using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class Customer
    {
        public Customer()
        {
            BookingRequests = new HashSet<BookingRequest>();
            Feedbacks = new HashSet<Feedback>();
        }

        public int CustomerId { get; set; }
        public string Fname { get; set; } = null!;
        public string Lname { get; set; } = null!;
        public string LicenseNo { get; set; } = null!;
        public string Contact { get; set; } = null!;
        public string EmergencyContact { get; set; } = null!;
        public DateOnly Dob { get; set; }
        public DateOnly? RegDate { get; set; }
        public string PancardNo { get; set; } = null!;
        public string AdharCard { get; set; } = null!;
        public int? Uid { get; set; }
        public int? AreaId { get; set; }
        public string? Address { get; set; }
        public string? EmailId { get; set; }

        public virtual Area? Area { get; set; }
        public virtual User? UidNavigation { get; set; }
        public virtual ICollection<BookingRequest> BookingRequests { get; set; }
        public virtual ICollection<Feedback> Feedbacks { get; set; }
    }
}
