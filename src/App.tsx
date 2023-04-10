import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoutes from "./protectedRoutes/protectedRoutes";
import DetailsPage from "./pages/DetailsPage";
import MasterPortal from "./pages/MasterPortal";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path={`/posts/:id`}
          element={
            <ProtectedRoutes>
              <DetailsPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path={`/master`}
          element={
            <ProtectedRoutes>
              <MasterPortal />
            </ProtectedRoutes>
          }
        />
        <Route
          path={`/addpost`}
          element={
            <ProtectedRoutes>
              <AddPost />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
