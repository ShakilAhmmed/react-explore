import { Routes, Route } from "react-router-dom";
import UserListComponent from "./components/admin/user/UserListComponent";
import DashboardComponent from "./components/DashboardComponent";
// Demo Bootstraping
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardComponent />} />
      <Route path="/user-list" element={<UserListComponent />} />
    </Routes>
  );
}

export default App;
