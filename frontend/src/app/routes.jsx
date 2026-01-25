import {Routes, Route} from "react-router-dom" ;
import { LoginPage } from "../features/auth/";
import { RegisterPage } from "../features/auth/";
import { TaskListPage } from "../features/tasks/";
import { Navigate } from "react-router-dom";

const AppRoutes = ()=>{
  return(
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" replace/>} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tasks" element={<TaskListPage />} />
    </Routes>
  );
};

export default AppRoutes;