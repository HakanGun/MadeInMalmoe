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
            data.GetProjectForEmployee(1);
        }
    }
}
