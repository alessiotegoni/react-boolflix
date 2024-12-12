import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar";

export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
