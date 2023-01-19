import React, { useEffect, useState } from 'react';
import SecondaryButton from '../../Button/Secondary';
import Logo from '../../Logo';
import NavItem from './NavItem';

function Navbar() {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if (showNav) {
            document.querySelector('body').style.overflowY = 'hidden';
        } else {
            document.querySelector('body').style.overflowY = 'scroll';
        }
    }, [showNav]);
    const hideNavHandler = () => {
        setShowNav(false);
    };
    const showNavHandler = () => {
        setShowNav(true);
    };
    return (
        <div className="navContainer w-[100%] flex items-center justify-center mt-[1rem]">
            <div className="wrapper flex items-center justify-between w-[90%]">
                <div className="logo">
                    <Logo />
                </div>
                <div onClick={showNavHandler} className="bars flex align-center justify-center flex-col">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                {showNav && (
                    <div
                        onClick={hideNavHandler}
                        className="absolute inset-0 bg-black/60 navoverlay cursor-hover"
                    ></div>
                )}
                <nav className={` ${showNav && 'active'} relative`}>
                    <div
                        onClick={hideNavHandler}
                        className="w-[20px] bg-Orch  rounded-full h-[20px] flex items-center justify-center absolute top-4 left-4 md:hidden"
                        style={{ transform: 'rotate(45deg)' }}
                    >
                        <span className="text-white mb-[2px]">+</span>
                    </div>
                    <NavItem text={'Pricing'} link={'/pricing'} />
                    <NavItem text={'Login'} link={'/login'} />

                    <SecondaryButton text={'View live demo'} />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
