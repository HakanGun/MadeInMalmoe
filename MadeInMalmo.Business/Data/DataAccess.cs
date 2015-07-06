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
