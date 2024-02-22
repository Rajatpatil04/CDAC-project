using System;
using System.Collections.Generic;

namespace BookMyCar.Models;

public partial class Host
{
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

    public virtual ICollection<Car> Cars { get; set; } = new List<Car>();

    public virtual User? UidNavigation { get; set; }
}
