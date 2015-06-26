using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MadeInMalmo.Business.Data.Entities;

namespace MadeInMalmo.Business
{
    public class ApplicationManager
    {
        public ApplicationManager()
        {
            // To do, initiate data layer class etc.
        }

        public IList<ProjectStatusOverview> GetOverviewData(int employeeId)
        {
            var result = new List<ProjectStatusOverview>();

            // Dummy data....
            var item1 = new ProjectStatusOverview();
            item1.Budget = 150000M;
            item1.BudgetAdjusted = false;
            item1.BudgetStatus = StatusIndicatorEnum.green;
            item1.BudgetUsed = 85000M;
            item1.DeadlineAdjusted = false;
            item1.DeadlineStatus = StatusIndicatorEnum.green;
            item1.ProjectDisplayName = "MadeInMalmö";
            item1.ProjectId = 1;
            item1.WorkdaysPassed = 35;
            item1.WorkdaysTotal = 80;

            result.Add(item1);

            return result;
        }
    }
}
