using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class Area
    {
        public Area()
        {
            Customers = new HashSet<Customer>();
            Hosts = new HashSet<Host>();
        }

        public int AreaId { get; set; }
        public string AreaName { get; set; } = null!;
        public int? Pincode { get; set; }
        public int? CityId { get; set; }

        public virtual City? City { get; set; }
        public virtual ICollection<Customer> Customers { get; set; }
        public virtual ICollection<Host> Hosts { get; set; }
    }
}
