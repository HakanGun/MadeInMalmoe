using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MadeInMalmo.Business.Data.Entities
{
    public class ProjectCalculation
    {
        // The calculated estimated number of hours needed until the projet is finished
        public decimal CalculatedEstimatedRemainingHoursUntilDone { get; set; }

        // The number of avaliable hours per employee left until deadline according to the EmployeeProjectPlans
        public decimal AvailableEmployeeProjectPlanHoursUntilDeadline { get; set; }

        // The calculated estimated remaining cost in money until the project is finished
        public decimal CalculatedEstimatedRemainingMoneyCostUntilFinished { get; set; }

        // The (latest) budget minus the hours already registered for invoicing until today
        public decimal RemainingMoneyFromBudget { get; set; }

        public string CurrentDeadlineString { get; set; }

        public bool DeadlineAdjusted { get; set; }

        public decimal TotalMoneyForInvoice { get; set; }
    }
}
