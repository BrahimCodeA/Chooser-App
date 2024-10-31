import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineListAlt } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="sidebar">
      <Link
        to="/add"
        className={pathname === "/add" ? "sidebar-link active" : "sidebar-link"}
      >
        <p className="sidebar-icon">
          <CiCirclePlus /> Ajoutez un produit
        </p>
      </Link>

      <Link to="/list" className="sidebar-link">
        <p className="sidebar-icon">
          <MdOutlineListAlt /> Liste des produits
        </p>
      </Link>

      <Link to="/orders" className="sidebar-link">
        <p className="sidebar-icon">
          <GoChecklist /> Commandes
        </p>
      </Link>
    </div>
  );
}
