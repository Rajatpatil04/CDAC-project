using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class Host
    {
        public Host()
        {
            Availablecars = new HashSet<Availablecar>();
            Cars = new HashSet<Car>();
        }

        public int HostId { get; set; }
        public int? Uid { get; set; }
        public string Fname { get; set; } = null!;
        public string Lname { get; set; } = null!;
        public int? AreaId { get; set; }
        public string EmailId { get; set; } = null!;
        public string Contact { get; set; } = null!;
        public DateOnly? Dob { get; set; }
        public string PancardNumber { get; set; } = null!;
        public string AdharcardNumber { get; set; } = null!;
        public string UpiId { get; set; } = null!;
        public DateOnly? RegDate { get; set; }
        public string? Address { get; set; }

        public virtual Area? Area { get; set; }
        public virtual User? UidNavigation { get; set; }
        public virtual ICollection<Availablecar> Availablecars { get; set; }
        public virtual ICollection<Car> Cars { get; set; }
    }
}
