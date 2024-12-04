import "./Sidebar.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { sidebarLinks } from "../../constants/sidebarLinkData";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { SidebarLink } from "../ui/SidebarLink";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {open ? (
          <IoCloseSharp onClick={handleClick} className="hamburger-menu" />
        ) : (
          <GiHamburgerMenu onClick={handleClick} className="hamburger-menu" />
        )}
      </div>
      {open && (
        <div className="sidebar-links">
          {sidebarLinks.map((sidebarLink) => (
            <SidebarLink
              key={sidebarLink.to}
              to={sidebarLink.to}
              className={`sidebar-link ${
                pathname === sidebarLink.to ? "active" : ""
              }`}
              onClick={handleLinkClick}
              icon={sidebarLink.icon}
              title={sidebarLink.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
