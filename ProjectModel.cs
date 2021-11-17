using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRProject.Models
{
    public class ProjectModel
    {
		public int ProjectId { get; set; }
		public string ProjectName { get; set; }
		public string ClientName { get; set; }
		public int NoOfDays { get; set; }
	
	}
}
