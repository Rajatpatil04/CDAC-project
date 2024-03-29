﻿using System;
using System.Collections.Generic;

namespace BookMyCar.Models;

public partial class Model
{
    public int ModelId { get; set; }

    public string? ModelName { get; set; }

    public int? BrandId { get; set; }

    public string? TransmissionType { get; set; }

    public int? SeatingCapacity { get; set; }

    public bool? GpsNavigationSystem { get; set; }

    public int? CatId { get; set; }

    public virtual Brand? Brand { get; set; }

    public virtual ICollection<Car> Cars { get; set; } = new List<Car>();

    public virtual Category? Cat { get; set; }
}
