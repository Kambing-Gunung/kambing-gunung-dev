import Navbar from "@/components/layouts/Navbar/Navbar";
import Footer from "@/components/layouts/Footer/Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <Navbar/>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;