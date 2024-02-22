using System;
using System.Collections.Generic;

namespace BookMyCar.Models;

public partial class User
{
    public int Uid { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int? RoleId { get; set; }

    public ulong? Status { get; set; }

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();

    public virtual ICollection<Host> Hosts { get; set; } = new List<Host>();

    public virtual Role? Role { get; set; }
}
