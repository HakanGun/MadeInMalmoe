using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using MadeInMalmo.Business;
using MadeInMalmo.Business.Data.Entities;

namespace MadeInMalmo.Controllers
{
   // [Authorize]
    public class HomeController : Controller
    {
        private ApplicationManager _applicationManager;
        public ActionResult Index()
        {
            ViewData["NumberOfProjects"] = 10;
            return View();
        }

        [System.Web.Mvc.HttpGet]
        public JsonResult getProjects(int userId)
        {
            IList<ProjectStatusOverview> projects = new List<ProjectStatusOverview>();

            // Todo - do not initiate new managers inside methods like this... 
            this._applicationManager = new ApplicationManager();
            projects = this._applicationManager.GetOverviewData(userId);

            return Json(new { projects = projects }, JsonRequestBehavior.AllowGet);
        }

    }
}
