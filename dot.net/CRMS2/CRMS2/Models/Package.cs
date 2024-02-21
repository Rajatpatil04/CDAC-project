using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class Package
    {
        public Package()
        {
            BookingRequests = new HashSet<BookingRequest>();
        }

        public int PackageId { get; set; }
        public int Hours { get; set; }
        public int Kilometers { get; set; }

        public virtual ICollection<BookingRequest> BookingRequests { get; set; }
    }
}
