using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MadeInMalmo.Business.Data.Entities
{
    public class ProjectStatusOverview
    {
        public int projectID { get; set; }

        public string projectName { get; set; }

        public decimal reportedHours { get; set; }

        //public int WorkdaysPassed { get; set; }

        public bool DeadlineAdjusted { get; set; }

        //public StatusIndicatorEnum DeadlineStatus { get; set; }

        public decimal budgetPrice { get; set; }

        public decimal reportedSum { get; set; }

        public decimal calculatedEstimatedRemainingMoneyCostUntilFinished { get; set; }

        public decimal availableEmployeeProjectPlanHoursUntilDeadline { get; set; }

        public decimal calculatedEstimatedRemainingHoursUntilDone { get; set; }

        public decimal remainingMoneyFromBudget { get; set; }

        //public bool BudgetAdjusted { get; set; }

        //public StatusIndicatorEnum BudgetStatus { get; set; }

        // Calculated values in the calculator function (calculation could be moved here instead...)
        // budgetHours used for the gauge is workedhours + estimatedRemainingHours!
        public decimal budgethours { get; set; }

        public decimal greenstopMoney { get; set; }

        //public decimal greenstopTime { get; set; }

        public decimal yellowstopMoney { get; set; }

        //public decimal yellowstopTime { get; set; }

        public decimal orangestopMoney { get; set; }

        //public decimal orangestopTime { get; set; }

        public decimal redstopMoney { get; set; }

        //public decimal redstopTime { get; set; }
    }
}
