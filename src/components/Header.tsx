import React from 'react';
import '../styles/home.scss';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { DragSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';

export const Header: React.FC<any> = ({
    darkTheme,
    setDarkTheme
}) => {
    console.log("header darkTheme", darkTheme);
    return (
        <div className="home">
            <div className={classNames('row', { 'header': !darkTheme }, { 'header-dark': darkTheme })}>
                <div className="col-12 mt-3 mb-1">
                    <Link to="/" style={{ textDecoration: 'none', color: `${darkTheme ? "white" : "black"}` }}>
                        <h4 className="text-uppercase text-left p-3" >York Jobs</h4>
                    </Link>
                    <div className="toggle-switch">
                        <DragSwitch value={darkTheme} checked={darkTheme} onChange={() => setDarkTheme(!darkTheme)} />
                    </div>
                </div>
            </div>
        </div>);
}

export default Header;
