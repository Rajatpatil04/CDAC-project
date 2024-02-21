using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class Category
    {
        public Category()
        {
            Models = new HashSet<Model>();
        }

        public int CatId { get; set; }
        public string CatName { get; set; } = null!;

        public virtual ICollection<Model> Models { get; set; }
    }
}
