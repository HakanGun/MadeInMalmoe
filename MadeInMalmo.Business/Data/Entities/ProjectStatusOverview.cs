using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MadeInMalmo.Business.Data.Entities
{
    public class ProjectStatusOverview
    {
        public int ProjectId { get; set; }

        public string ProjectDisplayName { get; set; }

        public int WorkdaysTotal { get; set; }

        public int WorkdaysPassed { get; set; }

        public bool DeadlineAdjusted { get; set; }

        public StatusIndicatorEnum DeadlineStatus { get; set; }

        public decimal Budget { get; set; }

        public decimal BudgetUsed { get; set; }

        public bool BudgetAdjusted { get; set; }

        public StatusIndicatorEnum BudgetStatus { get; set; }
    }
}
