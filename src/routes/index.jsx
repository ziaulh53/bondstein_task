import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authRoutes, privateRoutes, publicRoutes } from "./routes";
import { AuthComponents, PrivateComponents, PublicComponents } from "./RouteProtector";
import { Home } from "../pages";

export const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((rt) => (
          <Route
            key={rt.path}
            path={rt.path}
            element={<PublicComponents element={rt.element} />}
          />
        ))}
        {authRoutes.map((rt) => (
          <Route
            key={rt.path}
            path={rt.path}
            element={<AuthComponents element={rt.element} />}
          />
        ))}
        {privateRoutes.map((rt) => (
          <Route
            key={rt.path}
            path={rt.path}
            element={
              <PrivateComponents element={rt.element} />
            } /*"route guard"*/
          />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
