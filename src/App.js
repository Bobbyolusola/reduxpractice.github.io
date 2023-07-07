import './App.css';
import {createBrowserRouter, RouterProvider, outlet, Outlet} from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import {AppRoutes} from "./common/routes/AppRoutes";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";


const App = () => {

  const Layout = () => {
    return(
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: AppRoutes.MAIN,
      element: <Layout />,
      errorElement : <h1>PAGE NOT FOUND</h1>,
      children: [
        {
          path: AppRoutes.MAIN,
          element: <Login />,
          errorElement : <h1>PAGE LOg`iN NOT FOUND</h1>,
        },
        {
          path: AppRoutes.PROFILE,
          element: <Profile />
        },
        {
          path: AppRoutes.REGISTER,
          element: <Register />,
        },
      ]
    },
  ]);
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
