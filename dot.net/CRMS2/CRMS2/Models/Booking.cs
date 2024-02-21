using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class Booking
    {
        public int BookingId { get; set; }
        public int? ReqId { get; set; }
        public DateTime? ActualPickupDate { get; set; }
        public DateTime? ActualReturnDate { get; set; }
        public decimal? Amount { get; set; }
        public string? PaymentMode { get; set; }
        public DateTime? PaymentDate { get; set; }
        public string? TransactionId { get; set; }

        public virtual BookingRequest? Req { get; set; }
    }
}
