import "./MenuComponent.scss";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { SiJordan } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { Link } from "react-router-dom";

interface MenuComponentProps {
  onCloseMenu: () => void;
}

export default function MenuComponent({ onCloseMenu }: MenuComponentProps) {
  return (
    <div className="menu-container">
      <div className="icon-menu-closed" onClick={onCloseMenu}>
        <RxCross1 />
      </div>
      <ul className="links-pages">
        <li className="link">
          <Link to="/men" onClick={onCloseMenu}>
            Homme <IoIosArrowForward className="arrow-link" />
          </Link>
        </li>
        <li className="link">
          <Link to="/women" onClick={onCloseMenu}>
            Femme <IoIosArrowForward className="arrow-link" />
          </Link>
        </li>
        <li className="link">
          <Link to="kids" onClick={onCloseMenu}>
            Enfant <IoIosArrowForward className="arrow-link" />
          </Link>
        </li>
      </ul>
      <ul className="icon-marques">
        <li className="marque">
          <SiJordan /> Jordan
        </li>
        <li className="marque">
          <SiNike /> Nike
        </li>
      </ul>
    </div>
  );
}
