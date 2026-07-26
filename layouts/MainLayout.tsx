import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <header className="bg-red-500 p-4">
        <h2 className="text-white text-2xl font-bold">
          Navbar
        </h2>
      </header>

      <main className="p-8">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-white p-4">
        Footer
      </footer>
    </>
  );
}

export default MainLayout;