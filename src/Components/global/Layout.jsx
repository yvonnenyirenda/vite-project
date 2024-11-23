import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
// import NavBar from "./NavBar";
import { useRecoilValue } from "recoil";
import { isAuthenticatedAtom, userDetailsAtom } from "../recoil/atoms";

const Layout = ({ children }) => {
  const user = useRecoilValue(userDetailsAtom);
  const auth = useRecoilValue(isAuthenticatedAtom);

  useEffect(() => {
    if (auth === false || user === null) {
      window.location.pathname = "/login";
      return;
    }
  }, [auth, user]);

  return (
    <div className="flex flex-col">
      {/* <NavBar /> */}
      <div className="flex h-screen">
        <Sidebar />
        <main className="p-2 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
