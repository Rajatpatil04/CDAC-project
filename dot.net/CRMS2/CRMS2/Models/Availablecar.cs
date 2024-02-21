using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class Availablecar
    {
        public int Id { get; set; }
        public int? CarId { get; set; }
        public string NumPlate { get; set; } = null!;
        public string Chassis { get; set; } = null!;
        public int LockSpeed { get; set; }
        public string? CargoSpace { get; set; }
        public DateOnly? RegistrationDate { get; set; }
        public DateOnly? InsuranceDateExp { get; set; }
        public int? Insurance { get; set; }
        public int? HostId { get; set; }

        public virtual Car? Car { get; set; }
        public virtual Host? Host { get; set; }
    }
}
