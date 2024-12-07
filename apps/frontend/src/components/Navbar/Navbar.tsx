import "./Navbar.scss";
import { RxCross1 } from "react-icons/rx";
import NavbarLinks from "../ui/NavbarLinks";
import BrandNavIcon from "../ui/BrandNavIcon";
import { links, brands } from "../../constants/navigationData";

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
