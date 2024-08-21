import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import MainLayout from "../layouts/main";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path:'/auth',
      element:<MainLayout/>,
      children:[
        {element:<LoginPage/>,path:'login'},
        {element:<RegisterPage/>,path:'register'},
        {element:<ResetPassword/>,path:'reset-password'},
        {element:<NewPassword/>,path:'new-password'},
      ]
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        {path:'group',element:<GroupPage/>},
        
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);
const Settings = Loadable(
  lazy(() => import("../pages/dashboard/Settings")),
);

const LoginPage =  Loadable(
  lazy(()=> import('../pages/auth/Login'))
)
const ResetPassword =  Loadable(
  lazy(()=> import('../pages/auth/ResetPassword'))
)
const NewPassword =  Loadable(
  lazy(()=> import('../pages/auth//NewPassword'))
)
const RegisterPage =  Loadable(
  lazy(()=> import('../pages/auth/Register'))
)
const GroupPage = Loadable(lazy(()=> import('../pages/dashboard/Group')))
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
