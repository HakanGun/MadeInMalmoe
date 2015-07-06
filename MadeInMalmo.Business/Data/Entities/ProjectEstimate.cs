using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MadeInMalmo.Business.Data.Entities
{
    public class ProjectEstimate
    {
        public int ProjectEstimateId { get; set; }

        public int ProjectId { get; set; }

        public DateTime Date { get; set; }

        public int EstimateHoursLeft { get; set; }
    }
}
