using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRProject.Models
{
    public class LeaveManagementModel
    {
		public int EmpId { get; set; }
		public int TotalLeave { get; set; }
		public int BalanceLeave { get; set; }
		public int CasualLeave { get; set; }
		public int EarnedLeave { get; set; }
		public int UnpaidLeave { get; set; }
	}
}
