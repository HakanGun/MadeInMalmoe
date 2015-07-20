using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MadeInMalmo.Business.Data.Entities
{
    public class ProjectEmployee
    {
        public int EmployeeId { get; set; }

        public int ProjectId { get; set; }

        public int EmployeeProjectId { get; set; }

       // public decimal AverageDailyHours { get; set; }

        public decimal PricePerHour { get; set; }

        public int CapacityUtilizationRate { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public IList<EmployeeProjectWorkingHours> ProjectEmployeeWorkingHours { get; set; }

        public IList<EmployeeProjectPlan> EmployeeProjectPlans { get; set; }
    }
}
