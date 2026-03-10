import React from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";
const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 items-center justify-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
              <span className="text-lg font-semibold tracking-tight">
                Virvr
              </span>
            </a>
          </div>
          <ul className="hidden md:flex items-center space-x-12 lg:flex ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a
              href="#"
              className="py-2 px-3 border border-neutral-600 rounded-md hover:border-neutral-500 transition-colors"
            >
              Login
            </a>

            <a
              href="#"
              className="border rounded-md py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-medium"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMobileDrawer}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center space-x-12">
              <a
                href="#"
                className="py-2 px-3 border border-neutral-600 rounded-md hover:border-neutral-500 transition-colors"
              >
                Login
              </a>
              <a
                href="#"
                className="border rounded-md py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-medium"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
