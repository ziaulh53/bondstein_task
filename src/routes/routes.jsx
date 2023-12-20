import { Dashboard, Home } from "../pages";


// array of all public components
export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];

// array of all auth components
export const authRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];

// array of all authorized page
export const privateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
];
