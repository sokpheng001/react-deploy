import { Outlet } from "react-router-dom";
import { NavbarComponent } from "./NavbarComponent";
import { FooterComponent } from "./FooterComponent";
import "flowbite";

// import { Search } from "./Search"
import { ThemeProvider } from "../../theme/ThemeText.jsx";
export default function RootLayout() {
  return (
    <main className="dark:bg-gray-900 dark:border-gray-700 min-w-80">
        <NavbarComponent />
      <Outlet />
      <FooterComponent />
      
    </main>
  );
}
