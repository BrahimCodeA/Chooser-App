import "./Navbar.scss";
import { RxCross1 } from "react-icons/rx";
import { SiJordan } from "react-icons/si";
import { SiNike } from "react-icons/si";
import NavbarLinks from "../ui/NavbarLinks";
import BrandNavIcon from "../ui/BrandNavIcon";

const links = [
  { link: "/men", title: "Homme" },
  { link: "/women", title: "Femme" },
  { link: "/kid", title: "Enfant" },
];

const brands = [
  { brandIcon: <SiJordan />, brandName: "Jordan" },
  { brandIcon: <SiNike />, brandName: "Nike" },
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
      <ul className="icon-brands">
        {brands.map((brand, index) => (
          <BrandNavIcon
            key={index}
            brandIcon={brand.brandIcon}
            brandName={brand.brandName}
          />
        ))}
      </ul>
    </div>
  );
}
