using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class Model
    {
        public Model()
        {
            Cars = new HashSet<Car>();
        }

        public int ModelId { get; set; }
        public string? ModelName { get; set; }
        public int? BrandId { get; set; }
        public string? TransmissionType { get; set; }
        public int? SeatingCapacity { get; set; }
        public bool? GpsNavigationSystem { get; set; }
        public int? CatId { get; set; }

        public virtual Brand? Brand { get; set; }
        public virtual Category? Cat { get; set; }
        public virtual ICollection<Car> Cars { get; set; }
    }
}
