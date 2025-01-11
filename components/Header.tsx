'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { headerData } from '@/lib/siteData';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const menuRef = useRef<any>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        }
        document.body.classList.toggle('theme-dark', darkMode);
    }, [darkMode]);
    
    const handleToggle = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };
    

    // Toggle the navigation visibility
    const handleNavToggle = () => {
        setIsNavVisible(prev => !prev);
    };

    // Close the menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
            toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
            setIsNavVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header-wrapper">
            <div className="container">
                <nav className="header-nav">
                    {/* Toggle Menu Button (for Desktop) */}
                    <button className="toggle-menu-btn"
                        onClick={handleNavToggle}
                        ref={toggleRef}
                    >
                        <span></span>
                    </button>
                    {/* Toggle Menu (for Desktop) */}
                    <div
                        className={`toggle-menu ${isNavVisible ? 'show' : ''}`}
                        ref={menuRef}
                    >
                        <h6 id="phone" className="mb-0">Phone:</h6>
                        {headerData.phoneNumbers.map((phone, index) => (
                            <p key={index}>{phone}</p>
                        ))}
                        <div className="mt-3">
                            <h6 id="email" className="mb-0">Email:</h6>
                            <p>{headerData.email}</p>
                        </div>
                        {/* Social icons */}
                        <ul className="list-inline mt-3">
                            {headerData.socialLinks.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href}>
                                        <i className={item.bootstrapIcons}></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Nav Toggle (for Mobile) */}
                    <button
                        className={`nav-toggle ${isNavVisible ? 'active' : ''}`}
                        onClick={handleNavToggle}
                        ref={toggleRef}
                    >
                        <span></span>
                    </button>
                    {/* Nav */}
                    <ul className={`nav-list ${isNavVisible ? 'show' : ''}`} ref={menuRef}>
                        {headerData.navigation.map((item) => (
                            <li key={item.name} className="nav-list-item">
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}

                        {/* Toggle Dark Theme */}
                        <li className="nav-list-item">
                            <Link href="javascript:;" onClick={handleToggle}>
                                {darkMode ? 'Dark Version' : 'Light Version'}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="header-logo">
                    <h3 className="fw-semi-bold uppercase">{headerData.logo}</h3>
                </div>
            </div>
        </header>
    );
};