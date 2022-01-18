using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EzerMitzionVacations.BL;

namespace EzerMitzionVacations.Controllers
{
    public class AppreController : ApiController
    {

        public HttpResponseMessage Get()
        {
            AppreBL appreBl = new AppreBL();
            int count = appreBl.countAppre();
            return Request.CreateResponse(HttpStatusCode.OK, count);
        }
    }
}
