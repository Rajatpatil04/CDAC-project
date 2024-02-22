using System;
using System.Collections.Generic;

namespace BookMyCar.Models;

public partial class Package
{
    public int PackageId { get; set; }

    public int Hours { get; set; }

    public int Kilometers { get; set; }

    public virtual ICollection<BookingRequest> BookingRequests { get; set; } = new List<BookingRequest>();
}
