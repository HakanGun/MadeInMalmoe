using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Common;
//using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MadeInMalmo.Business.Data.Entities;
using Microsoft.Practices.EnterpriseLibrary.Data;

namespace MadeInMalmo.Business.Data
{
    public class DataAccess
    {
        public IList<Project> GetProjectForEmployee(int employeeId)
        {
            Database db = this.CreateDatabase();

            IList<Project> result = new List<Project>();

            using (DbCommand command = db.GetStoredProcCommand("GetProjectsForEmployee"))
            {
                db.AddInParameter(command, "EmployeeId", DbType.Int32, employeeId);

                using (IDataReader reader = db.ExecuteReader(command))
                {
                    if (reader.Read())
                    {
                        result.Add(this.GetProjectFromReader(reader));
                    }
                }
            }

            return result;
        }

        public IList<ProjectBudget> GetBudgetsForProject(int projectId)
        {
            Database db = this.CreateDatabase();

            IList<ProjectBudget> result = new List<ProjectBudget>();

            using (DbCommand command = db.GetStoredProcCommand("GetBudgetForProject"))
            {
                db.AddInParameter(command, "@ProjectId", DbType.Int32, projectId);

                using (IDataReader reader = db.ExecuteReader(command))
                {
                    if (reader.Read())
                    {
                        result.Add(this.GetProjectBudgetFromReader(reader));
                    }
                }
            }

            return result;
        }

        public IList<ProjectEstimate> GetEstimatesForProject(int projectId)
        {
            Database db = this.CreateDatabase();

            IList<ProjectEstimate> result = new List<ProjectEstimate>();

            using (DbCommand command = db.GetStoredProcCommand("GetProjectEstimate"))
            {
                db.AddInParameter(command, "@ProjectId", DbType.Int32, projectId);

                using (IDataReader reader = db.ExecuteReader(command))
                {
                    if (reader.Read())
                    {
                        result.Add(this.GetProjectEstimateFromReader(reader));
                    }
                }
            }

            return result;
        }

        public IList<EmployeeProjectWorkingHours> GetEmployeeProjectWorkingHoursForProject(int projectId, int employeeId)
        {
            Database db = this.CreateDatabase();

            IList<EmployeeProjectWorkingHours> result = new List<EmployeeProjectWorkingHours>();

            using (DbCommand command = db.GetStoredProcCommand("GetEmployeeProjectWorkingHours"))
            {
                db.AddInParameter(command, "@ProjectId", DbType.Int32, projectId);
                db.AddInParameter(command, "@EmployeeId", DbType.Int32, employeeId);

                using (IDataReader reader = db.ExecuteReader(command))
                {
                    if (reader.Read())
                    {
                        result.Add(this.GetEmployeeProjectWorkingHoursFromReader(reader));
                    }
                }
            }

            return result;
        }

        public IList<ProjectEmployee> GetProjectEmloyees(int projectId)
        {
            Database db = this.CreateDatabase();

            IList<ProjectEmployee> result = new List<ProjectEmployee>();

            using (DbCommand command = db.GetStoredProcCommand("GetEmployeesForProject"))
            {
                db.AddInParameter(command, "@ProjectId", DbType.Int32, projectId);

                using (IDataReader reader = db.ExecuteReader(command))
                {
                    if (reader.Read())
                    {
                        result.Add(this.GetProjectEmployeeFromReader(reader));
                    }
                }
            }

            return result;
        }

        public IList<EmployeeProjectPlan> GetEmployeeProjectPlans(int projectId, int employeeId)
        {
            Database db = this.CreateDatabase();

            IList<EmployeeProjectPlan> result = new List<EmployeeProjectPlan>();

            using (DbCommand command = db.GetStoredProcCommand("GetEmployeeProjectPlan"))
            {
                db.AddInParameter(command, "@ProjectId", DbType.Int32, projectId);
                db.AddInParameter(command, "@EmployeeId", DbType.Int32, employeeId);

                using (IDataReader reader = db.ExecuteReader(command))
                {
                    if (reader.Read())
                    {
                        result.Add(this.GetEmployeeProjectPlanFromReader(reader));
                    }
                }
            }

            return result;
        }

        private Project GetProjectFromReader(IDataReader reader)
        {
            var result = new Project();
            result.OrigialDeadline = this.GetValueFromReader<DateTime>("OriginalDeadline", reader);
            result.OriginalHours = this.GetValueFromReader<int>("OriginalHours", reader);
            result.OriginalPrice = this.GetValueFromReader<decimal>("OriginalPrice", reader);
            result.PricePerHour = this.GetValueFromReader<decimal>("PricePerHour", reader);
            result.ProjectId = this.GetValueFromReader<int>("ProjectId", reader);
            result.ProjectName = this.GetValueFromReader<string>("ProjectName", reader);
            result.StartDate = this.GetValueFromReader<DateTime>("StartDate", reader);
            result.UseProjectHourPrice = this.GetValueFromReader<bool>("UseProjectHourPrice", reader);
            return result;
        }

        private ProjectBudget GetProjectBudgetFromReader(IDataReader reader)
        {
            var result = new ProjectBudget();
            result.BudgetHours = this.GetValueFromReader<int>("BudgetHours", reader);
            result.BudgetMoney = this.GetValueFromReader<decimal>("BudgetMoney", reader);
            result.CreatedDate = this.GetValueFromReader<DateTime>("CreatedDate", reader);
            result.Deadline = this.GetValueFromReader<DateTime>("Deadline", reader);
            result.ProjectBudgetId = this.GetValueFromReader<int>("BudgetId", reader);
            result.ProjectId = this.GetValueFromReader<int>("ProjectId", reader);
            return result;
        }

        private ProjectEstimate GetProjectEstimateFromReader(IDataReader reader)
        {
            var result = new ProjectEstimate();
            result.Date = this.GetValueFromReader<DateTime>("Date", reader);
            result.EstimateHoursLeft = this.GetValueFromReader<int>("EstimateHours", reader);
            result.ProjectEstimateId = this.GetValueFromReader<int>("ProjectEstimateId", reader);
            result.ProjectId = this.GetValueFromReader<int>("ProjectId", reader);
            
            return result;
        }

        private EmployeeProjectWorkingHours GetEmployeeProjectWorkingHoursFromReader(IDataReader reader)
        {
            var result = new EmployeeProjectWorkingHours();
            result.DateWorked = this.GetValueFromReader<DateTime>("Date", reader);
            result.EmployeeId = this.GetValueFromReader<int>("EmployeeId", reader);
            result.EmployeeProjectWorkingHoursId = this.GetValueFromReader<int>("EmployeeProjectWorkingHoursId", reader);
            result.ProjectId = this.GetValueFromReader<int>("ProjectId", reader);
            result.WorkedHours = this.GetValueFromReader<decimal>("WorkedHours", reader);
            result.InvoicedHours = this.GetValueFromReader<decimal>("InvoicedHours", reader);
            result.InvoicedPricePerHour = this.GetValueFromReader<decimal>("InvoicedPricePerHour", reader);

            return result;
        }

        private ProjectEmployee GetProjectEmployeeFromReader(IDataReader reader)
        {
            var result = new ProjectEmployee();
            //result.AverageDailyHours = this.GetValueFromReader<decimal>("AverageDailyHours", reader);
            result.CapacityUtilizationRate = this.GetValueFromReader<int>("CapacityUtilizationRate", reader);
            result.EmployeeId = this.GetValueFromReader<int>("EmployeeId", reader);
            result.EmployeeProjectId = this.GetValueFromReader<int>("EmployeeProjectId", reader);
            result.PricePerHour = this.GetValueFromReader<decimal>("PricePerHour", reader);
            result.ProjectId = this.GetValueFromReader<int>("ProjectId", reader);

            result.FirstName = this.GetValueFromReader<string>("FirstName", reader);
            result.LastName = this.GetValueFromReader<string>("LastName", reader);

            return result;
        }

        private EmployeeProjectPlan GetEmployeeProjectPlanFromReader(IDataReader reader)
        {
            var result = new EmployeeProjectPlan();
            result.AverageDailyHours = this.GetValueFromReader<decimal>("AverageDailyHours", reader);
            result.EmployeeProjectId = this.GetValueFromReader<int>("", reader);
            result.EmployeeProjectPlanId = this.GetValueFromReader<int>("", reader);
            result.EndDate = this.GetValueFromReader<DateTime>("", reader);
            result.StartDate = this.GetValueFromReader<DateTime>("", reader);
           
            return result;
        }

        private Database CreateDatabase()
        {
            DatabaseProviderFactory factory = new DatabaseProviderFactory();

            return factory.Create("MadeInMalmoDB");
        }

        private T GetValueFromReader<T>(string fieldName, IDataReader reader)
        {
            T result = default(T);
            int ordinal = reader.GetOrdinal(fieldName);

            if (!reader.IsDBNull(ordinal))
            {
                result = (T)reader.GetValue(ordinal);
            }

            return result;
        }
    }
}
