import { Outlet, useNavigation } from "react-router-dom";
import Navbar from './../Pages/Shared/Navbar/Navbar';
import Footer from "../Pages/Shared/Footer/Footer";
import Loading from "../Pages/Loading/Loading";


const MainLayout = () => {

  //loading
  const navigation = useNavigation();
  {/* loading section start */}
  {navigation.state === 'loading' ? <Loading></Loading> : ''}
  {/* loading section end */}

  return (
    <div className="overflow-hidden">
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* main content start */}
      <div className="h-full">
        <Outlet></Outlet>
      </div>
      {/* main content end */}
      {/* footer section start */}
      <Footer></Footer>
      {/* footer section end */}
    </div>
  );
};

export default MainLayout;