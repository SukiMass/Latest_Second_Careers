import React from "react";
import Images from "../../utils/images.js";
import { MdNotificationsActive } from "react-icons/md";

const DashboardNavbar = ({ dashboadMenus, profileImage, profileName }) => {
  return (
    <nav className="navbar navbar-light bg-white fixed-top navbar-expand-md shadow-sm p-2 justify-content-center">
      <div className="container-fluid">
        <a className="navbar-brand d-flex w-50 me-auto " href="#">
          <img
            src={Images.logo}
            alt="No Logo"
            className="img-responsive logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsingNavbar3"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
          <ul className="navbar-nav w-100 justify-content-between">
            <li className="nav-item active" >
              <a className="nav-link" href="#" data-testid='Home'>
                <b>{dashboadMenus[0]}</b>
              </a>
            </li>
            <li className="nav-item" data-testid="Learning">
              <a className="nav-link" href="//codeply.com">
                {dashboadMenus[1]}
              </a>
            </li>
            <li className="nav-item" data-testid="Community">
              <a className="nav-link" href="#">
                {dashboadMenus[2]}
              </a>
            </li>
          </ul>

          <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#" data-testid="Bell">
                <MdNotificationsActive className="fs-4" />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profileImage}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                  data-testid="Profile"
                />
                {profileName}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-left"
                aria-labelledby="navbarScrollingDropdown" data-testid='ProfileCard'
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Contact 2nd Careers
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;