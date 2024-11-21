import "./Header.scss";
import { BiSearchAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiShoppingBasket } from "react-icons/ci";
import { useState, useEffect } from "react";
import SearchComponent from "../Search/SearchComponent";
import MenuComponent from "../Menu/MenuComponent";
import { Link } from "react-router-dom";
import Modals from "../AuthMenu/AuthMenu";
import NavbarCarousel from "../NavbarCarousel/NavbarCarousel";

const useIsDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
};

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const isDesktop = useIsDesktop();

  const handleSearchClick = () => {
    setOpenSearch(!openSearch);
  };

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="wrapper">
      <nav className="navbar-1">
        <div>
          <a href="/" className="logo">
            CHOOSE
          </a>
        </div>

        {isDesktop && (
          <div className="desktop-menu">
            <MenuComponent onCloseMenu={handleMenuClick} />
          </div>
        )}

        <div className="icons">
          {openSearch ? (
            <div className={`search-icon ${openSearch ? "show" : ""}`}>
              <SearchComponent onCloseSearch={handleSearchClick} />
            </div>
          ) : (
            <BiSearchAlt className="search-icon" onClick={handleSearchClick} />
          )}

          <Modals />

          <Link to={"/cart"}>
            <CiShoppingBasket className="panier-icon" />
          </Link>

          {!isDesktop &&
            (!openMenu ? (
              <RxHamburgerMenu
                className="menu-icon"
                onClick={handleMenuClick}
              />
            ) : (
              <MenuComponent onCloseMenu={handleMenuClick} />
            ))}
        </div>
      </nav>

      <NavbarCarousel />
    </header>
  );
}
