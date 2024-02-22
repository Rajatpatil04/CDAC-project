using System;
using System.Collections.Generic;

namespace BookMyCar.Models;

public partial class CarModel
{
    public int ModelId { get; set; }

    public string? Category { get; set; }

    public string? FuelType { get; set; }

    public string? ModelName { get; set; }

    public int? PackageA { get; set; }

    public int? PackageB { get; set; }

    public int? Seats { get; set; }

    public string? Transmission { get; set; }
}
