using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MadeInMalmo.Business.Data.Entities
{
    public class Project
    {
        public int ProjectId { get; set; }

        public string ProjectName { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime OrigialDeadline { get; set; }

        public int OriginalHours { get; set; }

        public decimal PricePerHour { get; set; }

        public decimal OriginalPrice { get; set; }

        public bool UseProjectHourPrice { get; set; }

        public IList<ProjectBudget> ProjectBudgets { get; set; }

        public IList<ProjectEstimate> ProjectEstimates { get; set; }

        public IList<ProjectEmployee> ProjectEmployees { get; set; }

        public ProjectCalculation ProjectCalculations { get; set; }
    }
}
