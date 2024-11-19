import "./MenuComponent.scss";
import { RxCross1 } from "react-icons/rx";
import { SiJordan } from "react-icons/si";
import { SiNike } from "react-icons/si";
import NavbarLinks from "../ui/NavbarLinks";

const links = [
  {
    link: "/men",
    title: "Homme",
  },
  {
    link: "/women",
    title: "Femme",
  },
  {
    link: "/kid",
    title: "Enfant",
  },
];

export default function MenuComponent({
  onCloseMenu,
}: {
  onCloseMenu: () => void;
}) {
  return (
    <div className="menu-container">
      <div className="icon-menu-closed" onClick={onCloseMenu}>
        <RxCross1 />
      </div>
      <ul className="links-pages">
        {links.map((link, index) => (
          <NavbarLinks
            key={index}
            link={link.link}
            title={link.title}
            onCloseMenu={onCloseMenu}
          />
        ))}
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
