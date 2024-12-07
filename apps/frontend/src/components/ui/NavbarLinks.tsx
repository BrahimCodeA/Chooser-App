import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { LinkProps } from "../../types/navbar";

type NavbarLinksProps = LinkProps & {
  onCloseMenu: () => void;
};

export default function NavbarLinks({
  link,
  title,
  onCloseMenu,
}: NavbarLinksProps) {
  return (
    <li className="link">
      <Link to={link} onClick={onCloseMenu}>
        {title} <IoIosArrowForward className="arrow-link" />
      </Link>
    </li>
  );
}
