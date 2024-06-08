import { Routes as DomRoutes, Route } from "react-router-dom";
 
// import Private from "./RouteTypes/Private";
import { Login } from "../screens";
import { ROUTES } from "../utils/constants/routes";
import { RouteDataType } from "./types";
import Public from "./route-types/public";
import DashboardPage from "../screens/dashboard/DashboardPage";
import Private from "./route-types/private";
// import { GlobalDialog } from "../components/organisms";
// import { BaseTemplate } from "../components/template";
// import DashboardComponent from "../screens/Dashboard/Dashboard";

export const RoutesData: { [key: string]: RouteDataType } = {
  base: {
    path: ROUTES.base,
    component: Login,
    isPrivate: false,
  },

  dashboard: {
    path: ROUTES.dashboard,
    component: DashboardPage,
    isPrivate: true,
  },

  // forgotPassword: {
  //   path: ROUTES.forgotPassword,
  //   component: ForgotPassword,
  //   isPrivate: false,
  // },
  // resetPassword: {
  //   path: ROUTES.resetPassword,
  //   component: ResetPassword,
  //   isPrivate: false,
  // },
  // dashboard: {
  //   path: ROUTES.dashboard,
  //   component: DashboardComponent,
  //   isPrivate: false,
  // },
};

export default function WebRoutes() {
  return (
    <>
    
        <DomRoutes key={"DomRoutes"}>
          {Object.keys(RoutesData).map((route) => {
            const  item: RouteDataType = RoutesData[route];
            return (
              <Route
                key={`web-route-${item.path}`}
                path={item.path}
                element={
                  item.isPrivate ? (
                    <Private
                      element={item.component}                    
                    />
                  ) : (
                    <Public
                      element={item.component}
                    />
                  )
                }
              />
            );
          })}
        </DomRoutes>
      
    </>
  );
}
