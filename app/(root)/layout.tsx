import React from "react";
import NavBar from "../components/shared/navbar/Navbar";
import LeftSideBar from "../components/shared/LeftSidebar";
import RightSidebar from "../components/shared/RightSidebar";
import { ThemeProvider } from "../context/ThemeProvider";
import "../globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <main className="background-light850_dark100 relative">
        <NavBar />
        <div className="flex">
          <LeftSideBar />
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </section>
          <RightSidebar />
        </div>
        Toaster
      </main>
    </ThemeProvider>
  );
};

export default Layout;
