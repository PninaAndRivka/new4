using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace EzerMitzionVacations.DL
{
    public class AppreDL
    {

        public static string cs = ConfigurationManager.ConnectionStrings["ExampleConnectionStrings"].ConnectionString;
        public static SqlConnection connection = new SqlConnection(cs);

        public DataTable getCount()
        {
            string quarey = "select * from tblApprentices";
            SqlCommand com1 = new SqlCommand(quarey, connection);
            connection.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(com1);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
            catch(Exception e)
            {
                throw e;
            }
            finally
            {
                connection.Close();
            }
        }
    }
}