using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MadeInMalmo.Business.Data.Entities
{
    public class EmployeeProjectPlan
    {
        public int EmployeeProjectPlanId { get; set; }

        public int EmployeeProjectId { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public Decimal AverageDailyHours { get; set; }
    }
}
