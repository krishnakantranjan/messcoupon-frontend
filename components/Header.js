import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="header">
            <a href="/">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/en/b/b5/National_Institute_of_Technology%2C_Patna_Logo.png"
                    alt="logo"
                />
            </a>
            <h1 className="header-title">Mess-Coupon</h1>

            <div className="profile-section">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    alt="Profile"
                    className="profile-icon"
                    onClick={toggleDropdown}
                />
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li>Profile</li>
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Header;