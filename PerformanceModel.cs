using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRProject.Models
{
    public class PerformanceModel
    {
		public int EmpId { get; set; }
		public string Division { get; set; }
		public string WorkGroup { get; set; }
		public DateTime EvaluationDate { get; set; }
		public int EvaluatorId { get; set; }
		public int EvaluationPeriod { get; set; }
	}
}
