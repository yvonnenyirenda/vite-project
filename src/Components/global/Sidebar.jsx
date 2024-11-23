"use client";

import { useState } from "react";
import LogoutButton from "../screens/Homex/Logout_button";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiMenu,
} from "react-icons/hi";
import DeviceModal from "../components/DeviceModal";

export default function Sidebar() {
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleEcommerce = () => {
    setIsEcommerceOpen(!isEcommerceOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen z-50 ">
      {/* Hamburger Menu for mobile */}
      <div className="lg:hidden bg-gray-800 text-white p-4 sticky">
        <HiMenu className="cursor-pointer" onClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:static w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold">Sidebar</h2>
          </div>
          <ul className="flex-grow mt-6">
            <li className="px-6 py-2 flex items-center hover:bg-gray-700">
              <HiChartPie className="mr-3" />
              <a href="map">Dashboard</a>
            </li>
            <li
              className="px-6 py-2 flex items-center justify-between hover:bg-gray-700 cursor-pointer"
              onClick={toggleEcommerce}
            >
              <div className="flex items-center">
                <HiShoppingBag className="mr-3" />
                <span>Marketplace</span>
              </div>
              <HiArrowSmRight
                className={`transform ${isEcommerceOpen ? "rotate-90" : ""}`}
              />
            </li>
            {isEcommerceOpen && (
              <ul className="ml-8">
                <li className="px-6 py-2 hover:bg-gray-700">
                  <a href="/products">Products</a>
                </li>
                <li className="px-6 py-2 hover:bg-gray-700">
                  <a href="#">Sales</a>
                </li>
              </ul>
            )}
            <li className="px-6 py-2 flex items-center hover:bg-gray-700">
              <HiInbox className="mr-3" />
              <a href="map">My Map</a>
            </li>
            <li className="px-6 py-2 flex items-center hover:bg-gray-700">
              <HiUser className="mr-3" />
              <a href="#">Members</a>
            </li>
            <li className="px-6 py-2 flex items-center hover:bg-gray-700">
              <HiShoppingBag className="mr-3" />
              <a href="assets">Assets</a>
            </li>
            <li className="px-6 py-2 flex items-center hover:bg-gray-700">
              <HiShoppingBag className="mr-3" />
              <a href="profile">Profile</a>
            </li>
            <li className="px-6 py-2 flex items-center hover:bg-gray-700">
              <HiTable className="mr-3" />
              <a href="allModules">All Modules</a>
            </li>
          </ul>
          <ul>
            <li className="px-6 py-2 flex items-center hover:bg-gray-700">
              <HiArrowSmRight className="mr-3" />
              <a href="#">Sign In</a>
            </li>
            <div className="px-6 py-2 flex items-center">
              <LogoutButton />
            </div>
          </ul>
        </div>
      </div>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
