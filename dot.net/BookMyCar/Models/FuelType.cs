using System;
using System.Collections.Generic;

namespace BookMyCar.Models;

public partial class FuelType
{
    public int FuelId { get; set; }

    public string FuelType1 { get; set; } = null!;

    public virtual ICollection<Car> Cars { get; set; } = new List<Car>();
}
