import Poster from "pages/user/poster";
import Contact from "pages/user/contact";
import HomePage from "./pages/user/homePage";
import ProfilePage from "./pages/user/profilePage";
import MasterLayout from "./pages/user/theme/masterLayout";
import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILe,
      component: <ProfilePage />,
    },
    {
      path: ROUTERS.USER.POSTER,
      component: <Poster />,
    },
    {
      path: ROUTERS.USER.CONTACT,
      component: <Contact />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
