import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  console.log(isSeller);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile w-10/12 mx-auto">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-white ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-white text-base-content">
            {/* <li>
              <Link to="/dashboard">My Orders</Link>
            </li> */}

            {/* {isSeller && (
              <>
                {" "}
                <li>
                  <Link to="/dashboard/add">Add Phone</Link>
                </li>
                <li>
                  <Link to="/dashboard/seller-products">My Products</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                {" "}
                <li>
                  <Link to="/dashboard/all-buyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-sellers">All Sellers</Link>
                </li>
              </>
            )} */}
            {isAdmin || isSeller ? (
              <>
                {" "}
                {isSeller && (
                  <>
                    {" "}
                    <li>
                      <Link to="/dashboard/add">Add Phone</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/seller-products">My Products</Link>
                    </li>
                  </>
                )}
                {isAdmin && (
                  <>
                    {" "}
                    <li>
                      <Link to="/dashboard/all-buyers">All Buyers</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/all-sellers">All Sellers</Link>
                    </li>
                  </>
                )}
              </>
            ) : (
              <>
                {" "}
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
