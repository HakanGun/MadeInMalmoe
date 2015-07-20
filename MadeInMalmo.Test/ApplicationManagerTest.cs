using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Reflection;
using MadeInMalmo.Business;
using MadeInMalmo.Business.Data.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace MadeInMalmo.Test
{
    [TestClass]
    public class ApplicationManagerTest
    {
        [TestMethod]
        public void GetNumberOfWeekdaysBeweenDates()
        {
            PrivateObject pObj = new PrivateObject(new ApplicationManager());

            Object[] arg1 = { new DateTime(2015,7,6), new DateTime(2015,7,12) };
            var result = (int)pObj.Invoke("GetNumberOfWeekdaysBeweenDates", arg1);
            Assert.AreEqual(result, 5);

            // This functionality where delimited, In a real version public hopidays should not be counted.
            //Object[] arg2 = { new DateTime(2015, 12, 21), new DateTime(2015, 12, 22) };
            //result = (int)pObj.Invoke("GetNumberOfWeekdaysBeweenDates", arg2);
            //Assert.AreEqual(result, 5);

            Object[] arg3 = { new DateTime(2015, 1, 1), new DateTime(2015, 12, 31) };
            result = (int)pObj.Invoke("GetNumberOfWeekdaysBeweenDates", arg3);
            Assert.AreEqual(result, 260);            
        }

        [TestMethod]
        public void CalculateProject_MissingData()
        {
            PrivateObject pObj = new PrivateObject(new ApplicationManager());
            Object[] arg1 = { GetProjectForCalculations_MissingData() };

            pObj.Invoke("CalculateProject", arg1);

            var result1 = (Project)arg1[0];

            Assert.AreEqual(result1.ProjectName, "Testprojekt 1");

        }

        [TestMethod]
        public void CalculateProject_UseProjectPrice()
        {
            PrivateObject pObj = new PrivateObject(new ApplicationManager());
            Object[] arg2 = { GetProjectForCalculations_UseProjectPrice() };

            pObj.Invoke("CalculateProject", arg2);

            var result2 = (Project)arg2[0];

            Assert.AreEqual(result2.ProjectName, "Testprojekt 1");
            Assert.AreEqual(247, result2.ProjectCalculations.AvailableEmployeeProjectPlanHoursUntilDeadline);
            Assert.AreEqual(100, result2.ProjectCalculations.CalculatedEstimatedRemainingHoursUntilDone);
            Assert.AreEqual(63613, Math.Round(result2.ProjectCalculations.CalculatedEstimatedRemainingMoneyCostUntilFinished, 0));
            Assert.AreEqual(77500, result2.ProjectCalculations.RemainingMoneyFromBudget);
        }

        [TestMethod]
        public void CalculateProject_UseEmployeePrice()
        {
            PrivateObject pObj = new PrivateObject(new ApplicationManager());
            Object[] arg2 = { GetProjectForCalculations_UseEmployeePrice() };

            pObj.Invoke("CalculateProject", arg2);

            var result2 = (Project)arg2[0];

            Assert.AreEqual(result2.ProjectName, "Testprojekt 1");
            Assert.AreEqual(247, result2.ProjectCalculations.AvailableEmployeeProjectPlanHoursUntilDeadline);
            Assert.AreEqual(100, result2.ProjectCalculations.CalculatedEstimatedRemainingHoursUntilDone);
            Assert.AreEqual(61793, Math.Round(result2.ProjectCalculations.CalculatedEstimatedRemainingMoneyCostUntilFinished, 0));
            Assert.AreEqual(78500, result2.ProjectCalculations.RemainingMoneyFromBudget);
        }

        private Project GetProjectForCalculations_MissingData()
        {
            var project = new Project();
            project.OrigialDeadline = new DateTime(2015, 10, 31);
            project.OriginalHours = 100;
            project.OriginalPrice = 100000;
            project.PricePerHour = 0;
            project.ProjectId = 1;
            project.ProjectName = "Testprojekt 1";
            project.StartDate = new DateTime(2015, 7, 1);
            project.UseProjectHourPrice = false;

            project.ProjectBudgets = new List<ProjectBudget>();
            project.ProjectEmployees = new List<ProjectEmployee>();
            project.ProjectEstimates = new List<ProjectEstimate>();
            
            return project;
        }

        private Project GetProjectForCalculations_UseProjectPrice()
        {
            var project = new Project();
            project.OrigialDeadline = new DateTime(2015, 10, 31);
            project.OriginalHours = 100;
            project.OriginalPrice = 100000;
            project.PricePerHour = 750;
            project.ProjectId = 1;
            project.ProjectName = "Testprojekt 1";
            project.StartDate = new DateTime(2015, 7, 1);
            project.UseProjectHourPrice = true;

            project.ProjectBudgets = new List<ProjectBudget>();
            project.ProjectBudgets.Add(new ProjectBudget()
            {
                BudgetHours = 100,
                BudgetMoney = 100000,
                CreatedDate = new DateTime(2015, 7, 15),
                Deadline = new DateTime(2015, 10, 31),
                ProjectId = 1
            });

            project.ProjectEmployees = new List<ProjectEmployee>();
            project.ProjectEmployees.Add(new ProjectEmployee()
            {
                CapacityUtilizationRate = 100,
                EmployeeId = 1,
                EmployeeProjectId = 1,
                FirstName = "Employyee1",
                LastName = "LastName1",
                PricePerHour = 0,
                ProjectId = 1,
                EmployeeProjectPlans = new List<EmployeeProjectPlan>()
                {
                    new EmployeeProjectPlan(){
                    AverageDailyHours = 1,
                    EmployeeProjectId = 1,
                    EmployeeProjectPlanId = 1,
                    EndDate = new DateTime(2015,7,31),
                    StartDate = new DateTime(2015,7,1)
                    },
                    new EmployeeProjectPlan(){
                    AverageDailyHours =2,
                    EmployeeProjectId = 1,
                    EmployeeProjectPlanId = 1,
                    EndDate = new DateTime(2015,10,31),
                    StartDate = new DateTime(2015,9,1)
                    }
                },
                ProjectEmployeeWorkingHours = new List<EmployeeProjectWorkingHours>()
                {
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,1),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,2),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,3),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,4),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,5),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,8),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,9),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,10),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,11),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,12),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    }
                },
            });

            project.ProjectEmployees.Add(new ProjectEmployee()
            {
                CapacityUtilizationRate = 75,
                EmployeeId = 2,
                EmployeeProjectId = 2,
                FirstName = "Employyee2",
                LastName = "LastName2",
                PricePerHour = 0,
                ProjectId = 1,
                EmployeeProjectPlans = new List<EmployeeProjectPlan>()
                {
                    new EmployeeProjectPlan(){
                    AverageDailyHours = 2,
                    EmployeeProjectId = 2,
                    EmployeeProjectPlanId = 3,
                    EndDate = new DateTime(2015,7,31),
                    StartDate = new DateTime(2015,7,1)
                    },
                    new EmployeeProjectPlan(){
                    AverageDailyHours =3,
                    EmployeeProjectId = 2,
                    EmployeeProjectPlanId = 4,
                    EndDate = new DateTime(2015,10,31),
                    StartDate = new DateTime(2015,9,1)
                    }
                },
                ProjectEmployeeWorkingHours = new List<EmployeeProjectWorkingHours>()
                {
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,1),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,2),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,3),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,4),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,5),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,8),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,9),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,10),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,11),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,12),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 750,
                        WorkedHours = 1
                    }
                },
            });

            project.ProjectEstimates = new List<ProjectEstimate>();
            project.ProjectEstimates.Add(new ProjectEstimate()
            {
                Date = new DateTime(2015,7,15),
                EstimateHoursLeft = 100,
                ProjectEstimateId = 1,
                ProjectId = 1
            });

            return project;
        }

        private Project GetProjectForCalculations_UseEmployeePrice()
        {
            var project = new Project();
            project.OrigialDeadline = new DateTime(2015, 10, 31);
            project.OriginalHours = 100;
            project.OriginalPrice = 100000;
            project.PricePerHour = 0;
            project.ProjectId = 1;
            project.ProjectName = "Testprojekt 1";
            project.StartDate = new DateTime(2015, 7, 1);
            project.UseProjectHourPrice = false;

            project.ProjectBudgets = new List<ProjectBudget>();
            project.ProjectBudgets.Add(new ProjectBudget()
            {
                BudgetHours = 100,
                BudgetMoney = 100000,
                CreatedDate = new DateTime(2015, 7, 15),
                Deadline = new DateTime(2015, 10, 31),
                ProjectId = 1
            });

            project.ProjectEmployees = new List<ProjectEmployee>();
            project.ProjectEmployees.Add(new ProjectEmployee()
            {
                CapacityUtilizationRate = 100,
                EmployeeId = 1,
                EmployeeProjectId = 1,
                FirstName = "Employyee1",
                LastName = "LastName1",
                PricePerHour = 850,
                ProjectId = 1,
                EmployeeProjectPlans = new List<EmployeeProjectPlan>()
                {
                    new EmployeeProjectPlan(){
                    AverageDailyHours = 1,
                    EmployeeProjectId = 1,
                    EmployeeProjectPlanId = 1,
                    EndDate = new DateTime(2015,7,31),
                    StartDate = new DateTime(2015,7,1)
                    },
                    new EmployeeProjectPlan(){
                    AverageDailyHours =2,
                    EmployeeProjectId = 1,
                    EmployeeProjectPlanId = 1,
                    EndDate = new DateTime(2015,10,31),
                    StartDate = new DateTime(2015,9,1)
                    }
                },
                ProjectEmployeeWorkingHours = new List<EmployeeProjectWorkingHours>()
                {
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,1),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 850,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,2),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 850,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,3),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 850,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,4),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 850,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,5),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 850,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,8),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 850,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,9),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 850,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,10),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 850,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,11),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 850,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,12),
                        EmployeeId = 1,
                        InvoicedHours = 1,
                        InvoicedPricePerHour = 850,
                        WorkedHours = 1
                    }
                },
            });

            project.ProjectEmployees.Add(new ProjectEmployee()
            {
                CapacityUtilizationRate = 75,
                EmployeeId = 2,
                EmployeeProjectId = 2,
                FirstName = "Employyee2",
                LastName = "LastName2",
                PricePerHour = 650,
                ProjectId = 1,
                EmployeeProjectPlans = new List<EmployeeProjectPlan>()
                {
                    new EmployeeProjectPlan(){
                    AverageDailyHours = 2,
                    EmployeeProjectId = 2,
                    EmployeeProjectPlanId = 3,
                    EndDate = new DateTime(2015,7,31),
                    StartDate = new DateTime(2015,7,1)
                    },
                    new EmployeeProjectPlan(){
                    AverageDailyHours =3,
                    EmployeeProjectId = 2,
                    EmployeeProjectPlanId = 4,
                    EndDate = new DateTime(2015,10,31),
                    StartDate = new DateTime(2015,9,1)
                    }
                },
                ProjectEmployeeWorkingHours = new List<EmployeeProjectWorkingHours>()
                {
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,1),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 650,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,2),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 650,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,3),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 650,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,4),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 650,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,5),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 650,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,8),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 650,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,9),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 650,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,10),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 650,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,11),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 650,
                        WorkedHours = 1
                    },
                    new EmployeeProjectWorkingHours(){
                        DateWorked = new DateTime(2015,7,12),
                        EmployeeId = 1,
                        InvoicedHours = 2,
                        InvoicedPricePerHour = 650,
                        WorkedHours = 1
                    }
                },
            });

            project.ProjectEstimates = new List<ProjectEstimate>();
            project.ProjectEstimates.Add(new ProjectEstimate()
            {
                Date = new DateTime(2015, 7, 15),
                EstimateHoursLeft = 100,
                ProjectEstimateId = 1,
                ProjectId = 1
            });

            return project;
        }
    }
}
