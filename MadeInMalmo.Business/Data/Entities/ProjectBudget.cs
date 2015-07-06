using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MadeInMalmo.Business.Data.Entities
{
    public class ProjectBudget
    {
        public int ProjectBudgetId { get; set; }

        public int ProjectId { get; set; }

        public DateTime CreatedDate { get; set; }

        public int BudgetHours { get; set; }

        public decimal BudgetMoney { get; set; }

        public DateTime Deadline { get; set; }
    }
}
