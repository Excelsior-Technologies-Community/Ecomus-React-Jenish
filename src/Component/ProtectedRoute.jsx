// // import { Navigate, Outlet } from "react-router-dom";

// // const ProtectedRoute = () => {
// //   const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

// //   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// // };

// // export default ProtectedRoute;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import Login from "./Login";
// import Dashboard from "./Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />

//         {/* Protected Route */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Route>

//       </Routes>
//     </Router>
//   );
// }

// export default App;
