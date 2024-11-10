import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.scss";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineListAlt } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className={`sidebar ${open ? "open" : "close"}`}>
      <div className="sidebar-menu">
        {open ? (
          <IoCloseSharp onClick={handleClick} className="hamburger-menu" />
        ) : (
          <GiHamburgerMenu onClick={handleClick} className="hamburger-menu" />
        )}
      </div>
      {open && (
        <div className="sidebar-links">
          <Link
            to="/add"
            className={
              pathname === "/add" ? "sidebar-link active" : "sidebar-link"
            }
            onClick={handleLinkClick}
          >
            <p className="sidebar-icon">
              <CiCirclePlus /> Ajoutez un produit
            </p>
          </Link>

          <Link
            to="/list"
            className={
              pathname === "/list" ? "sidebar-link active" : "sidebar-link"
            }
            onClick={handleLinkClick}
          >
            <p className="sidebar-icon">
              <MdOutlineListAlt /> Liste des produits
            </p>
          </Link>

          <Link
            to="/orders"
            className={
              pathname === "/orders" ? "sidebar-link active" : "sidebar-link"
            }
            onClick={handleLinkClick}
          >
            <p className="sidebar-icon">
              <GoChecklist /> Commandes
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
