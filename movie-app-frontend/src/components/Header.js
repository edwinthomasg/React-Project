import React from "react";
import { useLocation } from "react-router-dom";
import AdminHeader from "./admin/AdminHeader";
import UserHeader from "./user/UserHeader";

const Header = () => {
  const location = useLocation()
  const paths = location.pathname.split('/')
  console.log("path : ",location.pathname)
  return(<>
        {
            paths.includes('admin')? <AdminHeader /> : <UserHeader />
        }
  </>)
}

export default Header