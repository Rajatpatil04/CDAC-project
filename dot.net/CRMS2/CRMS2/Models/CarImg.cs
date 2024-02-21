using System;
using System.Collections.Generic;

namespace CRMS2.Models
{
    public partial class CarImg
    {
        public int ImgId { get; set; }
        public int CarId { get; set; }
        public byte[]? FrontView { get; set; }
        public byte[]? SideView { get; set; }
        public byte[]? BackView { get; set; }
        public byte[]? InteriorView { get; set; }

        public virtual Car Car { get; set; } = null!;
    }
}
