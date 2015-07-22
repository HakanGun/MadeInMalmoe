using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MadeInMalmo.Business.Data;
using MadeInMalmo.Business.Data.Entities;

namespace MadeInMalmo.Business
{
    public class ApplicationManager
    {
        private DataAccess data;

        public ApplicationManager()
        {
            // To do, initiate data layer class etc.
            data = new DataAccess();
        }

        public IList<ProjectStatusOverview> GetOverviewData(int employeeId)
        {
            var result = new List<ProjectStatusOverview>();

            var projects = this.GetProjectDataForEmployee(employeeId);
            foreach (var project in projects)
            {
                var projectStatusOverview = new ProjectStatusOverview();
                projectStatusOverview.availableEmployeeProjectPlanHoursUntilDeadline = project.ProjectCalculations.AvailableEmployeeProjectPlanHoursUntilDeadline;
                var lastBudget = project.ProjectBudgets.OrderByDescending(x => x.CreatedDate).FirstOrDefault();
                projectStatusOverview.budgetPrice = lastBudget == null ? project.OriginalPrice : lastBudget.BudgetMoney;
                projectStatusOverview.calculatedEstimatedRemainingHoursUntilDone = project.ProjectCalculations.CalculatedEstimatedRemainingHoursUntilDone;
                projectStatusOverview.calculatedEstimatedRemainingMoneyCostUntilFinished = project.ProjectCalculations.CalculatedEstimatedRemainingMoneyCostUntilFinished;
                projectStatusOverview.DeadlineAdjusted = false; // Todo (if needed)!
                projectStatusOverview.projectID = project.ProjectId;
                projectStatusOverview.projectName = project.ProjectName;
                projectStatusOverview.remainingMoneyFromBudget = project.ProjectCalculations.RemainingMoneyFromBudget;
                projectStatusOverview.reportedHours = 0; //Todo (if needed)!
            }

            // Dummy data since database is empty...
            var item1 = GetDummyProject1();
            result.Add(item1);

            // Calculate some values. Could be moved to the entity instead in "real" version.
            foreach (var projectStatusOverview in result)
            {
                this.CalculateStatusColorValuesForProject(projectStatusOverview);
            }

            return result;
        }

        private ProjectStatusOverview GetDummyProject1()
        {
            // Dummy data.... Todo: use a Project instead and a convertor, and eventually get data from the database instead.
            var item1 = new ProjectStatusOverview();
            item1.budgetPrice = 150000M;
            //item1.BudgetAdjusted = false;
            //item1.BudgetStatus = StatusIndicatorEnum.green;
            item1.reportedSum = 85000M;
            item1.DeadlineAdjusted = false;
            //item1.DeadlineStatus = StatusIndicatorEnum.green;
            item1.projectName = "MadeInMalmö";
            item1.projectID = 1;
            //item1.WorkdaysPassed = 35;
            //item1.budgethours = 80;
            item1.reportedHours = 30;

            // the calculated values for project
            item1.calculatedEstimatedRemainingMoneyCostUntilFinished = 70000M;
            item1.calculatedEstimatedRemainingHoursUntilDone = 45;
            item1.availableEmployeeProjectPlanHoursUntilDeadline = 40;

            return item1;
        }

        private void CalculateStatusColorValuesForProject(ProjectStatusOverview projectStatusOverview)
        {
            #region Money
            // Green: the percentage of the gauge where the calculated remaining cost per today is equal to the remaining budget money
            // Calculated as (budget - estimatedRemainingCost)/budget
            projectStatusOverview.greenstopMoney = (projectStatusOverview.budgetPrice - projectStatusOverview.calculatedEstimatedRemainingMoneyCostUntilFinished) / projectStatusOverview.budgetPrice;

            // Yellow: the percentage of the gauge where the calculated remaining cost per today is 10% more than the remaining budget money
            // Calculated as (budget - estimatedRemainingCost) * 1.1 /budget
            projectStatusOverview.yellowstopMoney = (projectStatusOverview.budgetPrice - projectStatusOverview.calculatedEstimatedRemainingMoneyCostUntilFinished) * 1.1M / projectStatusOverview.budgetPrice;

            // Orange: the percentage of the gauge where the calculated remaining cost per today is 20% more than the remaining budget money
            // Calculated as (budget - estimatedRemainingCost) * 1.2 /budget
            projectStatusOverview.orangestopMoney = (projectStatusOverview.budgetPrice - projectStatusOverview.calculatedEstimatedRemainingMoneyCostUntilFinished) * 1.2M / projectStatusOverview.budgetPrice;

            // Red: the percentage of the gauge where the calculated remaining cost per today is 30% more than the remaining budget money
            // Calculated as (budget - estimatedRemainingCost) * 1.3 /budget
            projectStatusOverview.redstopMoney = (projectStatusOverview.budgetPrice - projectStatusOverview.calculatedEstimatedRemainingMoneyCostUntilFinished) * 1.3M / projectStatusOverview.budgetPrice;

            #endregion

            #region Time
            // budgetHours used for the gauge is availableHoursUntilDeadline + estimatedRemainingHours! (Misleading variable name...
            projectStatusOverview.budgethours = projectStatusOverview.calculatedEstimatedRemainingHoursUntilDone + projectStatusOverview.availableEmployeeProjectPlanHoursUntilDeadline;

            #endregion  
        }

        private void CalculateProject(Project project)
        {
            project.ProjectCalculations = new ProjectCalculation();

            // Some of the code in this method is redundant on purpose to make it easier to separate the different calculations.
            #region CalculatedEstimatedRemainingHoursUntilDone
            // CalculatedEstimatedRemainingHoursUntilDone

            // Get latest estimate
            var latestestimate = project.ProjectEstimates.OrderByDescending(x => x.Date).FirstOrDefault();
            decimal totalWorkedHours = 0;

            if (latestestimate == null)
            {
                // If there are no estimate since project start, then use the original estimated hours minus the number of worked hours
                foreach (var employee in project.ProjectEmployees)
                {
                    totalWorkedHours += employee.ProjectEmployeeWorkingHours.Sum(p => p.WorkedHours);
                }

                project.ProjectCalculations.CalculatedEstimatedRemainingHoursUntilDone = project.OriginalHours - totalWorkedHours;
            }
            else
            {
                foreach (var employee in project.ProjectEmployees)
                {
                    // Also count hours from the same day as the estimate was done. (Impossible to know if these where part of the estimate or not.)
                    totalWorkedHours += employee.ProjectEmployeeWorkingHours.Where(p => p.DateWorked > latestestimate.Date).Sum(p => p.WorkedHours);
                }

                project.ProjectCalculations.CalculatedEstimatedRemainingHoursUntilDone = latestestimate.EstimateHoursLeft - totalWorkedHours;
            }

            //------------------------------------------------------------------------------------------------------
            #endregion

            #region AvailableEmployeeProjectPlanHoursUntilDeadline
            //AvailableEmployeeProjectPlanHoursUntilDeadline
            decimal availableEmployeeProjectPlanHoursUntilDeadline = 0;
            foreach (var employee in project.ProjectEmployees)
            {
                foreach (var plan in employee.EmployeeProjectPlans)
                {
                    var startdate = plan.StartDate > DateTime.Today ? plan.StartDate : DateTime.Today;

                    // Improvement! Get the dealine from project or latest budget instead of assuming endDate not after deadline.
                    var numberOfDaysInPeriod = this.GetNumberOfWeekdaysBeweenDates(startdate, plan.EndDate);
                    availableEmployeeProjectPlanHoursUntilDeadline += numberOfDaysInPeriod * plan.AverageDailyHours;
                }
            }

            project.ProjectCalculations.AvailableEmployeeProjectPlanHoursUntilDeadline = availableEmployeeProjectPlanHoursUntilDeadline;

            //------------------------------------------------------------------------------------------------------
            #endregion

            #region CalculatedEstimatedRemainingMoneyCostUntilFinished
            //CalculatedEstimatedRemainingMoneyCostUntilFinished

            // First, wee need to calculate an average capacity utilization rate. This should take into account how many hours
            // each employee has available. 
            // Formula: (hours for each employee * the capacity utilization rate for the employee) / total number of available hours
            decimal calculatedCapacityUtilizationRateInAverage = 1.0M;
            decimal availableProjectPlanHoursWithCapacityUtilizationRate = 0;

            // Defensive - if there are no more hours until deadline then use 100 %
            if (project.ProjectCalculations.AvailableEmployeeProjectPlanHoursUntilDeadline > 0)
            { 
                foreach (var employee in project.ProjectEmployees)
                {
                    foreach (var plan in employee.EmployeeProjectPlans)
                    {
                        var startdate = plan.StartDate > DateTime.Today ? plan.StartDate : DateTime.Today;

                        // Improvement! Get the dealine from project or latest budget instead of assuming endDate not after deadline.
                        var numberOfDaysInPeriod = this.GetNumberOfWeekdaysBeweenDates(startdate, plan.EndDate);
                        availableProjectPlanHoursWithCapacityUtilizationRate += numberOfDaysInPeriod * plan.AverageDailyHours * employee.CapacityUtilizationRate / 100;
                    }
                }

                calculatedCapacityUtilizationRateInAverage = availableProjectPlanHoursWithCapacityUtilizationRate / project.ProjectCalculations.AvailableEmployeeProjectPlanHoursUntilDeadline;
            }

            if (project.UseProjectHourPrice)
            {
                project.ProjectCalculations.CalculatedEstimatedRemainingMoneyCostUntilFinished = 
                    project.ProjectCalculations.CalculatedEstimatedRemainingHoursUntilDone * 
                    calculatedCapacityUtilizationRateInAverage * 
                    project.PricePerHour;
            }
            else
            {
                // Calculate average price per hour
                decimal workHoursTimesHourPrice = 0;
                foreach (var employee in project.ProjectEmployees)
                {
                    foreach (var plan in employee.EmployeeProjectPlans)
                    {
                        var startdate = plan.StartDate > DateTime.Today ? plan.StartDate : DateTime.Today;

                        // Improvement! Get the dealine from project or latest budget instead of assuming endDate not after deadline.
                        var numberOfDaysInPeriod = this.GetNumberOfWeekdaysBeweenDates(startdate, plan.EndDate);
                        workHoursTimesHourPrice += numberOfDaysInPeriod * plan.AverageDailyHours * employee.PricePerHour;
                    }
                }

                // defensive - avoid division by zero
                var averageHourPrice = 0M;
                if (project.ProjectCalculations.AvailableEmployeeProjectPlanHoursUntilDeadline > 0)
                {
                    averageHourPrice = workHoursTimesHourPrice / project.ProjectCalculations.AvailableEmployeeProjectPlanHoursUntilDeadline;
                }

                project.ProjectCalculations.CalculatedEstimatedRemainingMoneyCostUntilFinished =
                    project.ProjectCalculations.CalculatedEstimatedRemainingHoursUntilDone *
                    calculatedCapacityUtilizationRateInAverage *
                    averageHourPrice;
            }


            //------------------------------------------------------------------------------------------------------
            #endregion

            #region RemainingMoneyFromBudget
            // RemainingMoneyFromBudget

            // Get last budget for project
            var lastBudget = project.ProjectBudgets.OrderByDescending(x => x.CreatedDate).FirstOrDefault();
            var lastBudgetMoney = lastBudget == null ? project.OriginalPrice : lastBudget.BudgetMoney;
            var totalMoneyForInvoice = 0.0M;

            foreach (var employee in project.ProjectEmployees)
            {
                foreach (var workingHours in employee.ProjectEmployeeWorkingHours)
                {
                    totalMoneyForInvoice += workingHours.InvoicedHours * workingHours.InvoicedPricePerHour;
                }
            }

            project.ProjectCalculations.RemainingMoneyFromBudget = lastBudgetMoney - totalMoneyForInvoice;

            #endregion
        }

        private IList<Project> GetProjectDataForEmployee(int employeeId)
        {
            var projects = this.data.GetProjectForEmployee(employeeId);

            foreach (var project in projects)
            {
                // Get Budget
                project.ProjectBudgets = this.data.GetBudgetsForProject(project.ProjectId);

                // Get Estimate
                project.ProjectEstimates = this.data.GetEstimatesForProject(project.ProjectId);

                // Get all employees 
                project.ProjectEmployees = this.data.GetProjectEmloyees(project.ProjectId);

                foreach (var employee in project.ProjectEmployees)
                {
                    // Get EmployeeProjectPlans
                    employee.EmployeeProjectPlans = this.data.GetEmployeeProjectPlans(employee.ProjectId, employee.EmployeeId);

                    // GetEmployeeProjectWorkingHours
                    employee.ProjectEmployeeWorkingHours = this.data.GetEmployeeProjectWorkingHoursForProject(employee.ProjectId, employee.EmployeeId);
                }

                this.CalculateProject(project);
            }

            return projects;
        }

        private int GetNumberOfWeekdaysBeweenDates(DateTime startDate, DateTime endDate)
        {
            // Improvement! This method should also take into account public holidays. Implement if there is time left....
            int result = 0;
            var ts = endDate - startDate;
            for (int i = 0; i < ts.TotalDays; i++)
            {
                var cur = startDate.AddDays(i);
                if (cur.DayOfWeek != DayOfWeek.Saturday && cur.DayOfWeek != DayOfWeek.Sunday)
                {
                    result ++;
                }
            }

            return result;
        }
    }
}
