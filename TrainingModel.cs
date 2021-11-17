using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRProject.Models
{
    public class TrainingModel
    {
        public int EmpId { get; set; }
		public int BatchNo { get; set; }
		public string BatchName { get; set; }
		public string Courses { get; set; }
		public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; }
		public int TrainerId { get; set; }
		public int ManagerId { get; set; }
	}
}
