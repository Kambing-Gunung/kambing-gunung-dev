import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <header>
        <h2>Navbar</h2>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}

export default MainLayout;