using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class FuelType
    {
        public FuelType()
        {
            Cars = new HashSet<Car>();
        }

        public int FuelId { get; set; }
        public string FuelType1 { get; set; } = null!;

        public virtual ICollection<Car> Cars { get; set; }
    }
}
