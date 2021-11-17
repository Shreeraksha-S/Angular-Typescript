using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRProject.Models
{
    public class ResignationModel
    {
		public int EmpId { get; set; }
		public double PhoneNo { get; set; }
		public DateTime NoticePeriodDate { get; set; }
		public int NoticePeriod { get; set; }
		public DateTime ResignationDate { get; set; }
	}
}

