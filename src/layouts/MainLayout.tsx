import { Footer, Navbar } from "@/components/navigation";
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