using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class User
    {
        public User()
        {
            Customers = new HashSet<Customer>();
            Hosts = new HashSet<Host>();
        }

        public int Uid { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int? RoleId { get; set; }
        public ulong? Status { get; set; }

        public virtual Role? Role { get; set; }
        public virtual ICollection<Customer> Customers { get; set; }
        public virtual ICollection<Host> Hosts { get; set; }
    }
}
