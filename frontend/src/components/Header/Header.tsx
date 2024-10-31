import './Header.css';
import { BiSearchAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiShoppingBasket } from "react-icons/ci";
import { useState } from 'react';
import SearchComponent from '../Search/SearchComponent';
import MenuComponent from '../Menu/MenuComponent';
import { Link } from 'react-router-dom';
import Modals from '../Modals/Modals';

export default function Header() {
    const [openSearch, setOpenSearch] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);


    const handleSearchClick = () => {
        setOpenSearch(!openSearch);
    }

    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <header className="wrapper">
            <nav className="navbar-1">
                <div>
                    <a href="/" className='logo'>CHOOSE</a>
                </div>
                <div className="icons">
                    {openSearch ? (
                        <div className={`search-icon ${openSearch ? "show" : ""}`}>
                            <SearchComponent onCloseSearch={handleSearchClick} />
                        </div>
                    ) : (
                        <BiSearchAlt className="search-icon" onClick={handleSearchClick} />
                    )}
                    <Modals />
                    <Link to={"/cart"}><CiShoppingBasket className="panier-icon" /></Link> 
                    {!openMenu ? (<RxHamburgerMenu className="menu-icon" onClick={handleMenuClick}/>) : (<MenuComponent onCloseMenu={handleMenuClick} />)}
                </div>
            </nav>
              
            <div>
                <nav className="navbar-2">
                    <p><strong>Livraison gratuite</strong> dans toute la France.</p>
                </nav>
            </div>
        </header>
    );
}
