import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  createPath,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";
import PagesLayouts from "./layouts/PagesLayouts";
import AddFriend from "./pages/AddFriend";
import FriendRequests from "./pages/FriendRequests";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PagesLayouts />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addfriend" element={<AddFriend />} />
          <Route path="/friendrequests" element={<FriendRequests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
