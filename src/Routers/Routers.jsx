import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services/Services";
import Contact from "../Pages/Contact/Contact/Contact";
import ServiceDetails from "../Pages/Home/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/services',
        element : <Services></Services>
      },
      {
        path : '/service-details/:id',
        element : <ServiceDetails></ServiceDetails>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      }
    ]
  },
]);