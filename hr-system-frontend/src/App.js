import DepartmentCrud from './components/DepartmentCrud'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './Dashboard';
import EmployeeCrud from './components/EmployeeCrud';

function App() {
  return (
  <BrowserRouter>
    {/* <Sidebar> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/EmployeeCrud" element={<EmployeeCrud />} />
        <Route path="/DepartmentCrud" element={<DepartmentCrud />} />

      </Routes>
    {/* </Sidebar> */}
  </BrowserRouter>
);
};
export default App;


