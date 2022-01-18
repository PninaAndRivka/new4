using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using EzerMitzionVacations.DL;
namespace EzerMitzionVacations.BL
{
    public class AppreBL
    {
        public int countAppre()
        {
            AppreDL appreDl = new AppreDL();
            DataTable dt = appreDl.getCount();

            if (dt.Rows.Count > 0)
                return dt.Rows.Count;
            return -1;
        }
    }
}