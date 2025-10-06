import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutSPA from "./LayoutSPA";
// import Dashboard from "./Dashboard";

const Dashboard = () => <h1>Dashboard</h1>;
const Settings = () => <h1>Settings</h1>;
const Profile = () => <h1>Profile</h1>;

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <LayoutSPA />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);