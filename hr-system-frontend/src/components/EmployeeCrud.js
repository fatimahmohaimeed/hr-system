import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Base.css';
import { Link } from 'react-router-dom'



function EmployeeCrud() {
  const pattern = new RegExp(/^\d{10}$/);


  const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

  const changeStyle = () => {
      if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
      {
          setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
      }
      else{
          setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
      }
  };
  const changeStyle1 = () => {
      if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
      {
          setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
      }
      else{
          setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
      }
  };
const [isError, setIsError] = useState(false);
const [id, setId] = useState("");
const [name, setName] = useState("");
const [mobile, setMobile] = useState("");
const [email, setEmail] = useState("");
const [departmentId, setDepartment] = useState("");

// const [departments, setDepartments] = useState([]);
//   useEffect(() => {
//     (async () => await LoadDep())();
//   }, []);
 
//   async function LoadDep() {
//     const result = await axios.get("https://localhost:7122/api/departments/GetDepartment");
//     setDepartments(result.data);
//     console.log(result.data);
//   }



  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);
 
  async function Load() {
    const result = await axios.get("https://localhost:7122/api/employees/GetEmployees");
    setEmployees(result.data);
    console.log(result.data);
  }

 
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7122/api/employees/AddEmployee", {   
        name: name,
        mobile:mobile,
        email:email,
        departmentId:departmentId,
       
      });
      alert("Employee Addtion Successfully");
          setId("");
          setName("");
          setMobile("");
          setEmail("");
          setDepartment("");
      Load();
    } catch (err) {
      alert(err);
    }
  }



  async function editEmployee(employees) {
    setName(employees.name);
    setMobile(employees.mobile);
    setEmail(employees.email);
    setDepartment(employees.departmentId);

    setId(employees.id);
  }
 

  async function DeleteEmployee(id) {
  await axios.delete("https://localhost:7122/api/employees/DeleteEmployee/" + id);
    alert("Employee deleted Successfully");
    setId("");
    setName("");
    setMobile("");
    setEmail("");
    setDepartment("");
   Load();
  }
 

  async function update(event) {
    event.preventDefault();
    try {
    await axios.patch("https://localhost:7122/api/employees/UpdateEmployee/"+ employees.find((u) => u.id === id).id || id,
        {
            id: id,
            name: name,
            mobile:mobile,
            email:email,
            departmentId:departmentId,

        }
      );
      alert("Updated Successfully");
      setId("");
      setName("");
      setMobile("");
      setEmail("");
      setDepartment("");
      Load();

    } catch (err) {
      alert(err);
    }
  }

    return (
      <div>
      <body id="page-top">
          <div id="wrapper">

              {/*  <!-- Sidebar --> */}
              <ul className={style} id="accordionSidebar">

                  {/*  <!-- Sidebar - Brand --> */}
                  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                      <div className="sidebar-brand-icon rotate-n-15">
                          <i className="fas fa-laugh-wink"></i>
                      </div>
                      <div className="sidebar-brand-text mx-3">good morning!<sup></sup></div>
                      <div className="text-center d-none d-md-inline">
                      <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                  </div>
                  </a>

                  {/*   <!-- Divider --> */}
                  <hr className="sidebar-divider my-0" />

                  {/*  <!-- Nav Item - Dashboard --> */}
                  <li className="nav-item active">
             
                  </li>

                  {/*  <!-- Divider --> */}
                  <hr className="sidebar-divider" />

                  {/*   <!-- Heading --> */}
                  <div className="sidebar-heading">
                      Interface
                  </div>

                  {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                  <li className="nav-item">
                      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                          aria-expanded="true" aria-controls="collapseTwo">
                          <i className="fas fa-fw fa-cog"></i>
                          <span>Setting</span>
                      </a>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                          <div className="bg-white py-2 collapse-inner rounded">
                              <h6 className="collapse-header">User Setting:</h6>
                              <a className="collapse-item" href="buttons.html">Add</a>
                              <a className="collapse-item" href="cards.html">Delete</a>
                          </div>
                      </div>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                          aria-expanded="true" aria-controls="collapseUtilities">
                          <i className="fas fa-fw fa-wrench"></i>
                          <span>Utilities</span>
                      </a>
                      <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                          data-parent="#accordionSidebar">
                          <div className="bg-white py-2 collapse-inner rounded">
                              <h6 className="collapse-header">User Utilities:</h6>
                              <a className="collapse-item" href="utilities-color.html">Colors</a>
                              <a className="collapse-item" href="utilities-border.html">Open Ticket</a>
                              <a className="collapse-item" href="utilities-animation.html">Dark Mood</a>
                              <a className="collapse-item" href="utilities-other.html">Other</a>
                          </div>
                      </div>
                  </li>
                  <hr className="sidebar-divider" />
                  {/* <!-- Heading --> */}
                  <div className="sidebar-heading">
                      Addons
                  </div>
                  {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                  <li className="nav-item">
                      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                          aria-expanded="true" aria-controls="collapsePages">
                          <i className="fas fa-fw fa-folder"></i>
                          <span>Pages</span>
                      </a>
                      <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                          <div className="bg-white py-2 collapse-inner rounded">
                              <h6 className="collapse-header">Login Screens:</h6>
                              <a className="collapse-item" href="login.html">Login</a>
                              <a className="collapse-item" href="register.html">Register</a>
                              <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                              <div className="collapse-divider"></div>
                              <h6 className="collapse-header">Other Pages:</h6>
                              <a className="collapse-item" href="404.html">404 Page</a>
                              <a className="collapse-item" href="blank.html">Blank Page</a>
                          </div>
                      </div>
                  </li>
                  {/* <!-- Nav Item - Charts --> */}
                  <li className="nav-item">
                      <a className="nav-link" href="charts.html">
                          <i className="fas fa-fw fa-chart-area"></i>
                          <Link to="/DepartmentCrud"><span>DepartmentCrud</span></Link></a>
                  </li>
                  {/*  <!-- Nav Item - Tables --> */}
                  <li className="nav-item">
                      <a className="nav-link">
                          <i className="fas fa-fw fa-table"></i>
                         <Link to="/EmployeeCrud"><span>EmployeeCrud</span></Link></a>
                  </li>
                  <li className="nav-item">
                                  <a className="nav-link">
                                      <i className="fas fa-fw fa-b"></i>
                                     <Link to="/"><span>Back</span></Link></a>
                              </li>
                  {/* <!-- Divider --> */}
                  <hr className="sidebar-divider d-none d-md-block" />
                  {/*  <!-- Sidebar Message --> */}
                  <div className="sidebar-card d-none d-lg-flex">
                      <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                      <p className="text-center mb-2"><strong>Admin</strong> </p>
                      <a className="btn btn-success btn-sm" href="">Launching a new project</a>
                  </div>

              </ul>

              {/*  <!-- End of Sidebar --> */}

              {/*  <!-- Content Wrapper --> */}
              <div id="content-wrapper" className="d-flex flex-column">

                  {/*  <!-- Main Content --> */}
                  <div id="content">

                      {/*  <!-- Topbar --> */}
                      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                          {/*  <!-- Sidebar Toggle (Topbar) --> */}
                          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                              <i className="fa fa-bars"></i>
                          </button>

                          {/*  <!-- Topbar Search --> */}
                          <form
                              className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                              <div className="input-group">
                                  <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                      aria-label="Search" aria-describedby="basic-addon2" />
                                  <div className="input-group-append">
                                      <button className="btn btn-primary" type="button">
                                          <i className="fas fa-search fa-sm"></i>
                                      </button>
                                  </div>
                              </div>
                          </form>
                          {/*  <!-- Topbar Navbar --> */}
                          <ul className="navbar-nav ml-auto">

                              {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                              <li className="nav-item dropdown no-arrow d-sm-none">
                                  <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="fas fa-search fa-fw"></i>
                                  </a>
                                  {/*   <!-- Dropdown - Messages --> */}
                                  <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                      aria-labelledby="searchDropdown">
                                      <form className="form-inline mr-auto w-100 navbar-search">
                                          <div className="input-group">
                                              <input type="text" className="form-control bg-light border-0 small"
                                                  placeholder="Search for..." aria-label="Search"
                                                  aria-describedby="basic-addon2" />
                                              <div className="input-group-append">
                                                  <button className="btn btn-primary" type="button">
                                                      <i className="fas fa-search fa-sm"></i>
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </li>

                              {/*  <!-- Nav Item - Alerts --> */}
                              <li className="nav-item dropdown no-arrow mx-1">
                                  <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="fas fa-bell fa-fw"></i>
                                      {/*  <!-- Counter - Alerts --> */}
                                      <span className="badge badge-danger badge-counter">3+</span>
                                  </a>
                                  {/*   <!-- Dropdown - Alerts --> */}
                                  <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                      aria-labelledby="alertsDropdown">
                                      <h6 className="dropdown-header">
                                          Alerts Center
                                      </h6>
                                      <a className="dropdown-item d-flex align-items-center" href="#">
                                          <div className="mr-3">
                                              <div className="icon-circle bg-primary">
                                                  <i className="fas fa-file-alt text-white"></i>
                                              </div>
                                          </div>
                                          <div>
                                              <div className="small text-gray-500">December 12, 2019</div>
                                              <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                          </div>
                                      </a>
                                      <a className="dropdown-item d-flex align-items-center" href="#">
                                          <div className="mr-3">
                                              <div className="icon-circle bg-success">
                                                  <i className="fas fa-donate text-white"></i>
                                              </div>
                                          </div>
                                          <div>
                                              <div className="small text-gray-500">December 7, 2019</div>
                                              $290.29 has been deposited into company account!
                                          </div>
                                      </a>
                                      <a className="dropdown-item d-flex align-items-center" href="#">
                                          <div className="mr-3">
                                              <div className="icon-circle bg-warning">
                                                  <i className="fas fa-exclamation-triangle text-white"></i>
                                              </div>
                                          </div>
                                          <div>
                                              <div className="small text-gray-500">December 2, 2019</div>
                                              Spending Alert: We've noticed unusually high spending for your account.
                                          </div>
                                      </a>
                                      <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                  </div>
                              </li>

                              {/*  <!-- Nav Item - Messages --> */}
                              <li className="nav-item dropdown no-arrow mx-1">
                                  <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="fas fa-envelope fa-fw"></i>
                                      {/*  <!-- Counter - Messages --> */}
                                      <span className="badge badge-danger badge-counter">7</span>
                                  </a>
                                  {/*   <!-- Dropdown - Messages --> */}
                                  <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                      aria-labelledby="messagesDropdown">
                                      <h6 className="dropdown-header">
                                          Message Center
                                      </h6>
                                      <a className="dropdown-item d-flex align-items-center" href="#">
                                          <div className="dropdown-list-image mr-3">
                                              <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                  alt="..." />
                                              <div className="status-indicator bg-success"></div>
                                          </div>
                                          <div className="font-weight-bold">
                                              <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                  problem I've been having.</div>
                                              <div className="small text-gray-500">Fatimah · 58m</div>
                                          </div>
                                      </a>
                                      <a className="dropdown-item d-flex align-items-center" href="#">
                                          <div className="dropdown-list-image mr-3">
                                              <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                  alt="..." />
                                              <div className="status-indicator"></div>
                                          </div>
                                          <div>
                                              <div className="text-truncate">I have the reports that you ordered last month, how
                                                  would you like them sent to you?</div>
                                              <div className="small text-gray-500">Saad · 1d</div>
                                          </div>
                                      </a>
                                      <a className="dropdown-item d-flex align-items-center" href="#">
                                          <div className="dropdown-list-image mr-3">
                                              <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                  alt="..." />
                                              <div className="status-indicator bg-warning"></div>
                                          </div>
                                          <div>
                                              <div className="text-truncate">Last month's report looks great, I am very happy with
                                                  the progress so far, keep up the good work!</div>
                                              <div className="small text-gray-500">Sara Ahmed · 2d</div>
                                          </div>
                                      </a>
                                      <a className="dropdown-item d-flex align-items-center" href="#">
                                          <div className="dropdown-list-image mr-3">
                                              <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                  alt="..." />
                                              <div className="status-indicator bg-success"></div>
                                          </div>
                                          <div>
                                              <div className="text-truncate">I submitted my vacation last week and have not received any response yet?</div>
                                              <div className="small text-gray-500">Faisal· 2w</div>
                                          </div>
                                      </a>
                                      <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                  </div>
                              </li>

                              <div className="topbar-divider d-none d-sm-block"></div>

                              {/* <!-- Nav Item - User Information --> */}
                              <li className="nav-item dropdown no-arrow">
                                  <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">Mohammed</span>
                                      <img className="img-profile rounded-circle"
                                          src="img/undraw_profile.svg" />
                                  </a>
                                  {/*  <!-- Dropdown - User Information --> */}
                                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                      aria-labelledby="userDropdown">
                                      <a className="dropdown-item" href="#">
                                          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                          Profile
                                      </a>
                                      <a className="dropdown-item" href="#">
                                          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                          Settings
                                      </a>
                                      <a className="dropdown-item" href="#">
                                          <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                          Activity Log
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                          Logout
                                      </a>
                                  </div>
                              </li>

                          </ul>

                      </nav>
                      {/*  <!-- End of Topbar --> */}

                      {/* <!-- Begin Page Content --> */}
                      <div className="container-fluid">

                          {/*  <!-- Page Heading --> */}
                          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                              <h1 className="h3 mb-0 text-gray-800">Employees Dashboard</h1>
                              <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                  className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                          </div>

                          {/*  <!-- Content Row --> */}
                          <div className="row">

                              {/*  <!-- Earnings (Monthly) Card Example --> */}
                              <div className="col-xl-3 col-md-6 mb-4">
                                  <div className="card border-left-primary shadow h-100 py-2">
                                      <div className="card-body">
                                          <div className="row no-gutters align-items-center">
                                              <div className="col mr-2">
                                                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                  Average Daily Attendance </div>
                                                  <div className="h5 mb-0 font-weight-bold text-gray-800">96%</div>
                                              </div>
                                              <div className="col-auto">
                                                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              {/*  <!-- Earnings (Monthly) Card Example --> */}
                              <div className="col-xl-3 col-md-6 mb-4">
                                  <div className="card border-left-success shadow h-100 py-2">
                                      <div className="card-body">
                                          <div className="row no-gutters align-items-center">
                                              <div className="col mr-2">
                                                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                  Total Employees Salary (Monthly)</div>
                                                  <div className="h5 mb-0 font-weight-bold text-gray-800">SAR 215,000</div>
                                              </div>
                                              <div className="col-auto">
                                                  <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              {/*  <!-- Earnings (Monthly) Card Example --> */}
                              <div className="col-xl-3 col-md-6 mb-4">
                                  <div className="card border-left-info shadow h-100 py-2">
                                      <div className="card-body">
                                          <div className="row no-gutters align-items-center">
                                              <div className="col mr-2">
                                                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                                  </div>
                                                  <div className="row no-gutters align-items-center">
                                                      <div className="col-auto">
                                                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                      </div>
                                                      <div className="col">
                                                          <div className="progress progress-sm mr-2">
                                                              <div className="progress-bar bg-info a1" role="progressbar"
                                                              ></div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-auto">
                                                  <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              {/*  <!-- Pending Requests Card Example --> */}
                              <div className="col-xl-3 col-md-6 mb-4">
                                  <div className="card border-left-warning shadow h-100 py-2">
                                      <div className="card-body">
                                          <div className="row no-gutters align-items-center">
                                              <div className="col mr-2">
                                                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                      Number of Employees</div>
                                                  <div className="h5 mb-0 font-weight-bold text-gray-800">1118</div>
                                              </div>
                                              <div className="col-auto">
                                                  <i className="fas fa-comments fa-2x text-gray-300"></i>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          {/*  <!-- Content Row --> */}


                              {/*   <!-- Area Chart --> */}
                                  <div className="card shadow mb-4">
                                      {/*  <!-- Card Header - Dropdown --> */}
                                      <div
                                          className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                          <h6 className="m-0 font-weight-bold text-primary">List All Employees</h6>
                                          <div className="dropdown no-arrow">
                                              {/* <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                              </a>
                                              <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                  aria-labelledby="dropdownMenuLink">
                                                  <div className="dropdown-header">Dropdown Header:</div>
                                                  <a className="dropdown-item" href="#">Action</a>
                                                  <a className="dropdown-item" href="#">Another action</a>
                                                  <div className="dropdown-divider"></div>
                                                  <a className="dropdown-item" href="#">Something else here</a>
                                              </div> */}
                                          </div>
                                      </div>
                                      {/*  <!-- Card Body --> */}
                                      <div className="card-body">
                                          <table class="table">
                                          <thead>
                                          <tr>
                                          <th scope="col"> Id</th>
                                          <th scope="col"> Name</th>
                                          <th scope="col"> Mobile</th>
                                          <th scope="col"> Email</th>
                                          <th scope="col"> Department</th>
                                          <th scope="col">Option</th>


                                          </tr>
                                          </thead>
                                          {employees.map(function fn(employee) {
                                          return (
                                          <tbody>
                                          <tr>
                                          <th scope="row">{employee.id} </th>
                                              <td>{employee.name}</td>
                                              <td>{employee.mobile}</td>
                                              <td>{employee.email}</td>
                                              <td>{employee.departmentId}</td>
                                              <td>
                                              <div class="btn-group" role="group" aria-label="Basic example">
                                              <button type="button" class="btn btn-secondary" onClick={() => editEmployee(employee)} >Edit</button>
                                                <button type="button" class="btn btn-warning" onClick={() => DeleteEmployee(employee.id)}> Delete</button>
                                              </div>
                                              </td>
                                          </tr>
                                          </tbody>
                                          );
                                          })}
                                          </table>
                                  </div>
                              {/*  <!-- Pie Chart --> */}
                          </div>
                              {/*   <!-- Content Column --> */}
                  
                                  {/* <!-- Project Card Example --> */}
                                  <div className="card shadow mb-4">
                                      <div className="card-header py-3">
                                          <h6 className="m-0 font-weight-bold text-primary">Add or Update Employee</h6>
                                      </div>
                                      <div className="card-body">

                                      <form>
                                        <div class="form-group">
                                        
                                          <input
                                            type="text"
                                            class="form-control"
                                            id="id"
                                            hidden
                                            value={id}
                                            onChange={(event) => {
                                              setId(event.target.value);
                                            }}
                                          />

                                          <label>Employee Name</label>
                                          <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            value={name}
                                            onChange={(event) => {
                                              setName(event.target.value);
                                            }}
                                          />
                                        <label>Mobile</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="mobile"
                                            value={mobile}
                                            onChange={(event) => {
                                              setMobile(event.target.value);
                                              if (!pattern.test(event.target.value))
                                              setIsError(true);
                                              else setIsError(false);

                                            }}
                                          />
                                        <label>Email</label>
                                          <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(event) => {
                                              setEmail(event.target.value);
                                            }}
                                          />
                                      <label> Select Department</label>
                                          <input
                                            type="text"
                                            class="form-control"
                                            id="departmentId"
                                            value={departmentId}
                                            onChange={(event) => {
                                              setDepartment(event.target.value);
                                            }}
                                          />
                                        </div>

                                        <div>
                                          <button class="btn btn-primary mt-4" onClick={save}>
                                            Register
                                          </button>
                                          <button class="btn btn-warning mt-4" onClick={update}>
                                            Update
                                          </button>
                                        </div>
                                      </form>
                                      </div>
                                  </div> 
                      </div>
                      {/*   <!-- /.container-fluid --> */}

                  </div>
                  {/*   <!-- End of Main Content -->

                                  <!-- Footer --> */}
                  <footer className="sticky-footer bg-white">
                      <div className="container my-auto">
                          <div className="copyright text-center my-auto">
                              <span>Copyright &copy; Fatima 2024</span>
                          </div>
                      </div>
                  </footer>
                  {/* <!-- End of Footer --> */}

              </div>
              {/*  <!-- End of Content Wrapper --> */}

          </div>
          {/*  <!-- End of Page Wrapper -->

                          <!-- Scroll to Top Button--> */}
          <a className="scroll-to-top rounded" href="#page-top">
              <i className="fas fa-angle-up"></i>
          </a>

          {/*  <!-- Logout Modal--> */}
          <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                          </button>
                      </div>
                      <div className="modal-body">Select "Logout" below if you are ready to end company current session.</div>
                      <div className="modal-footer">
                          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                          <a className="btn btn-primary" href="login.html">Logout</a>
                      </div>
                  </div>
              </div>
          </div>

      </body>
  </div>























    );
  }
  
  export default EmployeeCrud;