﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRProject.Models
{
    public class EmployeeDetailsModel
    {
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string EmpStatus { get; set; }
        public string Designation { get; set; }
        public int DeptNo { get; set; }
        public string Address { get; set; }
        public string Nationality { get; set; }
        public double PhoneNo { get; set; }
        public string WorkLocation { get; set; }
        public DateTime JoiningDate { get; set; }
        public int ManagerId { get; set; }
    }
}