using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CRMS2.Models
{
    public partial class bookmycar_dbContext : DbContext
    {
        public bookmycar_dbContext()
        {
        }

        public bookmycar_dbContext(DbContextOptions<bookmycar_dbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Area> Areas { get; set; } = null!;
        public virtual DbSet<Availablecar> Availablecars { get; set; } = null!;
        public virtual DbSet<Booking> Bookings { get; set; } = null!;
        public virtual DbSet<BookingRequest> BookingRequests { get; set; } = null!;
        public virtual DbSet<Brand> Brands { get; set; } = null!;
        public virtual DbSet<Car> Cars { get; set; } = null!;
        public virtual DbSet<CarImg> CarImgs { get; set; } = null!;
        public virtual DbSet<CarModel> CarModels { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<City> Cities { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Feedback> Feedbacks { get; set; } = null!;
        public virtual DbSet<FuelType> FuelTypes { get; set; } = null!;
        public virtual DbSet<HibernateSequence> HibernateSequences { get; set; } = null!;
        public virtual DbSet<Host> Hosts { get; set; } = null!;
        public virtual DbSet<Model> Models { get; set; } = null!;
        public virtual DbSet<Package> Packages { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=bookmycar_db", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Area>(entity =>
            {
                entity.ToTable("area");

                entity.HasIndex(e => e.CityId, "city_id");

                entity.Property(e => e.AreaId).HasColumnName("area_id");

                entity.Property(e => e.AreaName)
                    .HasMaxLength(30)
                    .HasColumnName("area_name");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.Pincode).HasColumnName("pincode");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Areas)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("area_ibfk_1");
            });

            modelBuilder.Entity<Availablecar>(entity =>
            {
                entity.ToTable("availablecars");

                entity.HasIndex(e => e.CarId, "CarID");

                entity.HasIndex(e => e.HostId, "HostID");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.CarId).HasColumnName("CarID");

                entity.Property(e => e.CargoSpace).HasMaxLength(20);

                entity.Property(e => e.Chassis).HasMaxLength(50);

                entity.Property(e => e.HostId).HasColumnName("HostID");

                entity.Property(e => e.NumPlate).HasMaxLength(50);

                entity.HasOne(d => d.Car)
                    .WithMany(p => p.Availablecars)
                    .HasForeignKey(d => d.CarId)
                    .HasConstraintName("availablecars_ibfk_1");

                entity.HasOne(d => d.Host)
                    .WithMany(p => p.Availablecars)
                    .HasForeignKey(d => d.HostId)
                    .HasConstraintName("availablecars_ibfk_2");
            });

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.ToTable("bookings");

                entity.HasIndex(e => e.ReqId, "req_id");

                entity.Property(e => e.BookingId).HasColumnName("booking_id");

                entity.Property(e => e.ActualPickupDate)
                    .HasColumnType("datetime")
                    .HasColumnName("actual_pickup_date");

                entity.Property(e => e.ActualReturnDate)
                    .HasColumnType("datetime")
                    .HasColumnName("actual_return_date");

                entity.Property(e => e.Amount)
                    .HasPrecision(7, 2)
                    .HasColumnName("amount");

                entity.Property(e => e.PaymentDate)
                    .HasColumnType("datetime")
                    .HasColumnName("payment_date");

                entity.Property(e => e.PaymentMode)
                    .HasMaxLength(20)
                    .HasColumnName("payment_mode");

                entity.Property(e => e.ReqId).HasColumnName("req_id");

                entity.Property(e => e.TransactionId)
                    .HasMaxLength(30)
                    .HasColumnName("transaction_id");

                entity.HasOne(d => d.Req)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.ReqId)
                    .HasConstraintName("bookings_ibfk_1");
            });

            modelBuilder.Entity<BookingRequest>(entity =>
            {
                entity.HasKey(e => e.ReqId)
                    .HasName("PRIMARY");

                entity.ToTable("booking_requests");

                entity.HasIndex(e => e.CarId, "car_id");

                entity.HasIndex(e => e.CustomerId, "customer_id");

                entity.HasIndex(e => e.PackageId, "package_id");

                entity.Property(e => e.ReqId).HasColumnName("req_id");

                entity.Property(e => e.CarId).HasColumnName("car_id");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.ExpectedReturnDate)
                    .HasMaxLength(6)
                    .HasColumnName("expected_return_date");

                entity.Property(e => e.JourneyDateTime)
                    .HasColumnType("datetime")
                    .HasColumnName("journey_date_time");

                entity.Property(e => e.PackageId).HasColumnName("package_id");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("'0'");

                entity.HasOne(d => d.Car)
                    .WithMany(p => p.BookingRequests)
                    .HasForeignKey(d => d.CarId)
                    .HasConstraintName("booking_requests_ibfk_2");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.BookingRequests)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("booking_requests_ibfk_1");

                entity.HasOne(d => d.Package)
                    .WithMany(p => p.BookingRequests)
                    .HasForeignKey(d => d.PackageId)
                    .HasConstraintName("booking_requests_ibfk_3");
            });

            modelBuilder.Entity<Brand>(entity =>
            {
                entity.ToTable("brands");

                entity.HasIndex(e => e.BrandName, "brand_name")
                    .IsUnique();

                entity.Property(e => e.BrandId).HasColumnName("brand_id");

                entity.Property(e => e.BrandName)
                    .HasMaxLength(30)
                    .HasColumnName("brand_name");
            });

            modelBuilder.Entity<Car>(entity =>
            {
                entity.ToTable("cars");

                entity.HasIndex(e => e.FuelId, "fuel_id");

                entity.HasIndex(e => e.HostId, "host_id");

                entity.HasIndex(e => e.ModelId, "model_id");

                entity.HasIndex(e => e.RcNo, "rc_no")
                    .IsUnique();

                entity.Property(e => e.CarId).HasColumnName("car_id");

                entity.Property(e => e.Ac).HasColumnName("ac");

                entity.Property(e => e.CarImage).HasColumnName("car_image");

                entity.Property(e => e.CarImg).HasColumnName("car_img");

                entity.Property(e => e.Color)
                    .HasMaxLength(30)
                    .HasColumnName("color");

                entity.Property(e => e.FuelId).HasColumnName("fuel_id");

                entity.Property(e => e.HostId).HasColumnName("host_id");

                entity.Property(e => e.InsuranceExpDate).HasColumnName("insurance_exp_date");

                entity.Property(e => e.InsuranceType)
                    .HasMaxLength(30)
                    .HasColumnName("insurance_type");

                entity.Property(e => e.Mileage)
                    .HasPrecision(5, 2)
                    .HasColumnName("mileage");

                entity.Property(e => e.ModelId).HasColumnName("model_id");

                entity.Property(e => e.MusicSystem).HasColumnName("music_system");

                entity.Property(e => e.PricePerHour)
                    .HasPrecision(5, 2)
                    .HasColumnName("price_per_hour");

                entity.Property(e => e.RcNo)
                    .HasMaxLength(20)
                    .HasColumnName("rc_no");

                entity.Property(e => e.RegDate).HasColumnName("reg_date");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("'0'");

                entity.HasOne(d => d.Fuel)
                    .WithMany(p => p.Cars)
                    .HasForeignKey(d => d.FuelId)
                    .HasConstraintName("cars_ibfk_3");

                entity.HasOne(d => d.Host)
                    .WithMany(p => p.Cars)
                    .HasForeignKey(d => d.HostId)
                    .HasConstraintName("cars_ibfk_1");

                entity.HasOne(d => d.Model)
                    .WithMany(p => p.Cars)
                    .HasForeignKey(d => d.ModelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cars_ibfk_2");
            });

            modelBuilder.Entity<CarImg>(entity =>
            {
                entity.HasKey(e => e.ImgId)
                    .HasName("PRIMARY");

                entity.ToTable("car_img");

                entity.HasIndex(e => e.CarId, "car_id");

                entity.Property(e => e.ImgId).HasColumnName("img_id");

                entity.Property(e => e.BackView)
                    .HasColumnType("blob")
                    .HasColumnName("back_view");

                entity.Property(e => e.CarId).HasColumnName("car_id");

                entity.Property(e => e.FrontView)
                    .HasColumnType("blob")
                    .HasColumnName("front_view");

                entity.Property(e => e.InteriorView)
                    .HasColumnType("blob")
                    .HasColumnName("interior_view");

                entity.Property(e => e.SideView)
                    .HasColumnType("blob")
                    .HasColumnName("side_view");

                entity.HasOne(d => d.Car)
                    .WithMany(p => p.CarImgs)
                    .HasForeignKey(d => d.CarId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("car_img_ibfk_1");
            });

            modelBuilder.Entity<CarModel>(entity =>
            {
                entity.HasKey(e => e.ModelId)
                    .HasName("PRIMARY");

                entity.ToTable("car_models");

                entity.Property(e => e.ModelId).HasColumnName("model_id");

                entity.Property(e => e.Category)
                    .HasMaxLength(255)
                    .HasColumnName("category");

                entity.Property(e => e.FuelType)
                    .HasMaxLength(255)
                    .HasColumnName("fuel_type");

                entity.Property(e => e.ModelName)
                    .HasMaxLength(255)
                    .HasColumnName("model_name");

                entity.Property(e => e.PackageA).HasColumnName("package_a");

                entity.Property(e => e.PackageB).HasColumnName("package_b");

                entity.Property(e => e.Seats).HasColumnName("seats");

                entity.Property(e => e.Transmission)
                    .HasMaxLength(255)
                    .HasColumnName("transmission");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.CatId)
                    .HasName("PRIMARY");

                entity.ToTable("categories");

                entity.HasIndex(e => e.CatName, "cat_name")
                    .IsUnique();

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.CatName)
                    .HasMaxLength(20)
                    .HasColumnName("cat_name");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("cities");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.CityName)
                    .HasMaxLength(30)
                    .HasColumnName("city_name");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("customers");

                entity.HasIndex(e => e.AdharCard, "adhar_card")
                    .IsUnique();

                entity.HasIndex(e => e.AreaId, "area_id");

                entity.HasIndex(e => e.Contact, "contact")
                    .IsUnique();

                entity.HasIndex(e => e.LicenseNo, "license_no")
                    .IsUnique();

                entity.HasIndex(e => e.PancardNo, "pancard_no")
                    .IsUnique();

                entity.HasIndex(e => e.Uid, "uid");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Address)
                    .HasColumnType("text")
                    .HasColumnName("address");

                entity.Property(e => e.AdharCard)
                    .HasMaxLength(20)
                    .HasColumnName("adhar_card");

                entity.Property(e => e.AreaId).HasColumnName("area_id");

                entity.Property(e => e.Contact)
                    .HasMaxLength(15)
                    .HasColumnName("contact");

                entity.Property(e => e.Dob).HasColumnName("dob");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(45)
                    .HasColumnName("email_id");

                entity.Property(e => e.EmergencyContact)
                    .HasMaxLength(15)
                    .HasColumnName("emergency_contact");

                entity.Property(e => e.Fname)
                    .HasMaxLength(30)
                    .HasColumnName("fname");

                entity.Property(e => e.LicenseNo)
                    .HasMaxLength(20)
                    .HasColumnName("license_no");

                entity.Property(e => e.Lname)
                    .HasMaxLength(30)
                    .HasColumnName("lname");

                entity.Property(e => e.PancardNo)
                    .HasMaxLength(20)
                    .HasColumnName("pancard_no");

                entity.Property(e => e.RegDate).HasColumnName("reg_date");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.HasOne(d => d.Area)
                    .WithMany(p => p.Customers)
                    .HasForeignKey(d => d.AreaId)
                    .HasConstraintName("customers_ibfk_2");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.Customers)
                    .HasForeignKey(d => d.Uid)
                    .HasConstraintName("customers_ibfk_1");
            });

            modelBuilder.Entity<Feedback>(entity =>
            {
                entity.ToTable("feedbacks");

                entity.HasIndex(e => e.CarId, "car_id");

                entity.HasIndex(e => e.CustomerId, "customer_id");

                entity.Property(e => e.FeedbackId).HasColumnName("feedback_id");

                entity.Property(e => e.CarId).HasColumnName("car_id");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Feedback1)
                    .HasColumnType("text")
                    .HasColumnName("feedback");

                entity.HasOne(d => d.Car)
                    .WithMany(p => p.Feedbacks)
                    .HasForeignKey(d => d.CarId)
                    .HasConstraintName("feedbacks_ibfk_1");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Feedbacks)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("feedbacks_ibfk_2");
            });

            modelBuilder.Entity<FuelType>(entity =>
            {
                entity.HasKey(e => e.FuelId)
                    .HasName("PRIMARY");

                entity.ToTable("fuel_types");

                entity.HasIndex(e => e.FuelType1, "fuel_type")
                    .IsUnique();

                entity.Property(e => e.FuelId).HasColumnName("fuel_id");

                entity.Property(e => e.FuelType1)
                    .HasMaxLength(10)
                    .HasColumnName("fuel_type");
            });

            modelBuilder.Entity<HibernateSequence>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hibernate_sequence");

                entity.Property(e => e.NextVal).HasColumnName("next_val");
            });

            modelBuilder.Entity<Host>(entity =>
            {
                entity.ToTable("hosts");

                entity.HasIndex(e => e.AdharcardNumber, "adharcard_number")
                    .IsUnique();

                entity.HasIndex(e => e.AreaId, "area_id");

                entity.HasIndex(e => e.Contact, "contact")
                    .IsUnique();

                entity.HasIndex(e => e.EmailId, "email_id")
                    .IsUnique();

                entity.HasIndex(e => e.PancardNumber, "pancard_number")
                    .IsUnique();

                entity.HasIndex(e => e.Uid, "uid");

                entity.Property(e => e.HostId).HasColumnName("host_id");

                entity.Property(e => e.Address)
                    .HasColumnType("text")
                    .HasColumnName("address");

                entity.Property(e => e.AdharcardNumber)
                    .HasMaxLength(20)
                    .HasColumnName("adharcard_number");

                entity.Property(e => e.AreaId).HasColumnName("area_id");

                entity.Property(e => e.Contact)
                    .HasMaxLength(15)
                    .HasColumnName("contact");

                entity.Property(e => e.Dob).HasColumnName("dob");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(30)
                    .HasColumnName("email_id");

                entity.Property(e => e.Fname)
                    .HasMaxLength(30)
                    .HasColumnName("fname");

                entity.Property(e => e.Lname)
                    .HasMaxLength(30)
                    .HasColumnName("lname");

                entity.Property(e => e.PancardNumber)
                    .HasMaxLength(20)
                    .HasColumnName("pancard_number");

                entity.Property(e => e.RegDate).HasColumnName("reg_date");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.Property(e => e.UpiId)
                    .HasMaxLength(40)
                    .HasColumnName("upi_id");

                entity.HasOne(d => d.Area)
                    .WithMany(p => p.Hosts)
                    .HasForeignKey(d => d.AreaId)
                    .HasConstraintName("hosts_ibfk_1");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.Hosts)
                    .HasForeignKey(d => d.Uid)
                    .HasConstraintName("hosts_ibfk_2");
            });

            modelBuilder.Entity<Model>(entity =>
            {
                entity.ToTable("models");

                entity.HasIndex(e => e.BrandId, "brand_id");

                entity.HasIndex(e => e.CatId, "cat_id");

                entity.Property(e => e.ModelId)
                    .ValueGeneratedNever()
                    .HasColumnName("model_id");

                entity.Property(e => e.BrandId).HasColumnName("brand_id");

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.GpsNavigationSystem).HasColumnName("gps_navigation_system");

                entity.Property(e => e.ModelName)
                    .HasMaxLength(50)
                    .HasColumnName("model_name");

                entity.Property(e => e.SeatingCapacity).HasColumnName("seating_capacity");

                entity.Property(e => e.TransmissionType)
                    .HasMaxLength(50)
                    .HasColumnName("transmission_type");

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Models)
                    .HasForeignKey(d => d.BrandId)
                    .HasConstraintName("models_ibfk_2");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.Models)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("models_ibfk_1");
            });

            modelBuilder.Entity<Package>(entity =>
            {
                entity.ToTable("packages");

                entity.HasIndex(e => e.Hours, "hours")
                    .IsUnique();

                entity.Property(e => e.PackageId).HasColumnName("package_id");

                entity.Property(e => e.Hours).HasColumnName("hours");

                entity.Property(e => e.Kilometers).HasColumnName("kilometers");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("roles");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Role1)
                    .HasMaxLength(30)
                    .HasColumnName("role");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Uid)
                    .HasName("PRIMARY");

                entity.ToTable("users");

                entity.HasIndex(e => e.RoleId, "role_id");

                entity.HasIndex(e => e.Username, "username_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Status)
                    .HasColumnType("bit(1)")
                    .HasColumnName("status");

                entity.Property(e => e.Username)
                    .HasMaxLength(30)
                    .HasColumnName("username");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("users_ibfk_1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
