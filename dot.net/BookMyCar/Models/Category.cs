using System;
using System.Collections.Generic;

namespace BookMyCar.Models;

public partial class Category
{
    public int CatId { get; set; }

    public string CatName { get; set; } = null!;

    public virtual ICollection<Model> Models { get; set; } = new List<Model>();
}
