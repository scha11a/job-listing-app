import React from 'react';
import '../styles/home.scss';
import '../styles/header.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <div className="home">
            <div className="header row">
                <div className="col-12 mt-3 mb-1">
                    <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                        <h4 className="text-uppercase text-left p-3" >York Jobs</h4>
                    </Link>
                    <div className="toggle-switch">
                        <input
                            type="checkbox"
                            className="toggle-switch-checkbox"
                            name="toggleSwitch"
                            id="toggleSwitch"
                        />
                        <label className="toggle-switch-label" htmlFor="toggleSwitch">
                            <span className="toggle-switch-inner" />
                            <span className="toggle-switch-switch" />
                        </label>
                    </div>
                </div>
            </div>
        </div>);
}

export default Header;
