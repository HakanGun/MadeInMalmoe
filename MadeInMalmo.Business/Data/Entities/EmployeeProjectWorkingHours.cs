using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MadeInMalmo.Business.Data.Entities
{
    public class EmployeeProjectWorkingHours
    {
        public int EmployeeProjectWorkingHoursId { get; set; }

        public int EmployeeId { get; set; }

        public int ProjectId { get; set; }

        public DateTime DateWorked { get; set; }

        public decimal WorkedHours { get; set; }

        public decimal InvoicedHours { get; set; }

        public decimal InvoicedPricePerHour { get; set; }
    }
}
