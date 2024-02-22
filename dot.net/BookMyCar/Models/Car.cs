using System;
using System.Collections.Generic;

namespace BookMyCar.Models;

public partial class Car
{
    public int CarId { get; set; }

    public int ModelId { get; set; }

    public int? HostId { get; set; }

    public int? FuelId { get; set; }

    public decimal Mileage { get; set; }

    public decimal PricePerHour { get; set; }

    public string? Color { get; set; }

    public string RcNo { get; set; } = null!;

    public DateOnly? RegDate { get; set; }

    public string? InsuranceType { get; set; }

    public DateOnly? InsuranceExpDate { get; set; }

    public bool? MusicSystem { get; set; }

    public bool? Ac { get; set; }

    public byte[]? CarImage { get; set; }

    public int? Status { get; set; }

    public byte[]? CarImg { get; set; }

    public virtual ICollection<BookingRequest> BookingRequests { get; set; } = new List<BookingRequest>();

    public virtual ICollection<Feedback> Feedbacks { get; set; } = new List<Feedback>();

    public virtual FuelType? Fuel { get; set; }

    public virtual Host? Host { get; set; }

    public virtual Model Model { get; set; } = null!;
}
