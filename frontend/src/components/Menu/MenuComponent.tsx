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
        <li>
          <Link to="/men" onClick={onCloseMenu}>
            Homme <IoIosArrowForward />
          </Link>
        </li>
        <li>
          <Link to="/women" onClick={onCloseMenu}>
            Femme <IoIosArrowForward />
          </Link>
        </li>
        <li>
          <Link to="kids" onClick={onCloseMenu}>
            Enfant <IoIosArrowForward />
          </Link>
        </li>
      </ul>
      <ul className="icon-marques">
        <li>
          <SiJordan /> Jordan
        </li>
        <li>
          <SiNike /> Nike
        </li>
      </ul>
    </div>
  );
}
