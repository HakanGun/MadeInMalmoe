using System;
using MadeInMalmo.Business.Data;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace MadeInMalmo.Test
{
    [TestClass]
    public class DataAccesTest
    {
        [TestMethod]
        public void GetProjectForEmployee()
        {
            var data = new DataAccess();
            var result = data.GetProjectForEmployee(1);
        }

        [TestMethod]
        public void GetBudgetsForProject()
        {
            var data = new DataAccess();
            var result = data.GetBudgetsForProject(1);
        }

        [TestMethod]
        public void GetEstimatesForProject()
        {
            var data = new DataAccess();
            var result = data.GetEstimatesForProject(1);
        }

        [TestMethod]
        public void GetEmployeeProjectWorkingHoursForProject()
        {
            var data = new DataAccess();
            var result = data.GetEmployeeProjectWorkingHoursForProject(1, 1);
        }

        [TestMethod]
        public void GetProjectEmloyees()
        {
            var data = new DataAccess();
            var result = data.GetProjectEmloyees(1);
        }

        [TestMethod]
        public void GetEmployeeProjectPlans()
        {
            var data = new DataAccess();
            var result = data.GetEmployeeProjectPlans(1, 1);
        }
    }
}
