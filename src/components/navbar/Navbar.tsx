
import React, { useState } from 'react'
import { LogoContainer, NavLink, Wrapper, MobileNav } from './Navbar.styled';
// import { Link } from '../../Utils/CommonTypes';
// import { Link } from 'react-router-dom';
import { Link } from './NavbarHome';

import './navbar.css';

interface Props {
    links: Link[],
    logo: string
    
}
const Navbar: React.FC<Props> = ({ links, logo }) => {


    
    // const NavLinks: Link[] = [ { link: "/", alias: "About" }, { link: "/", alias: "Experience" }, { link: "/", alias: "Work" }, { link: "/", alias: "Contact" }, ];
    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    const handleOpenMenu = (): void => {
        setMenuOpened(!menuOpened);
    }
    return (
        <>
            <Wrapper>
                <div className='container flex justify-between max-w-full items-center' >
                    <LogoContainer className='logo__container'>
                        <a  href="/"><img className='logo' src={logo} alt="brand"></img></a>
                    </LogoContainer>

                    <div className='list__container'>
                        <ul className='link_lists flex'>
                            {
                                links.map((link, i) => {
                                    return (
                                        <li key={i} className="nav__list_item bott">
                                            <NavLink href={link.link}> {link.alias}</NavLink>
                                        </li>
                                        
                                    )
                                    
                                })

                                
                              
                            }
                            {/* <li>  <div className='bott'>
                                <button className='bott'>Log in</button>
                            </div></li> */}

                        </ul>
                        {/* <div className='bott'>
                                <button className='bott'>Log in</button>
                            </div> */}
                    </div>
                    <button className={menuOpened ? "hamburger is__active" : "hamburger"} onClick={handleOpenMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </Wrapper>
            <MobileNav hide={!menuOpened ? true : false}>
                <ul className='list__lists'>
                    {
                        links.map((link, i) => {
                            return (
                                <li key={i} className="nav__list_item">
                                    <NavLink href={link.link}> {link.alias}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </MobileNav>
        </>
    )
}

export default Navbar