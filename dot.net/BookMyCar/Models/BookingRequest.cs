using System;
using System.Collections.Generic;

namespace BookMyCar.Models;

public partial class BookingRequest
{
    public int ReqId { get; set; }

    public int? CustomerId { get; set; }

    public int? CarId { get; set; }

    public int? PackageId { get; set; }

    public DateTime? JourneyDateTime { get; set; }

    public int? Status { get; set; }

    public DateTime? ExpectedReturnDate { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual Car? Car { get; set; }

    public virtual Customer? Customer { get; set; }

    public virtual Package? Package { get; set; }
}
