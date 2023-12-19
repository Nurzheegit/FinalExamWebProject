// Import the necessary components and styles
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/weather-logo.png';
import userAuthService from "../../service/user-auth";
import userService from "../../service/user-service";
import { BoxArrowRight } from "react-bootstrap-icons";
import './navbar.css';
import SearchInputComponent from "../search-input-component/search-input-component";


const NavBar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [checkUser, setCheckUser] = useState(false);
    const navigate = useNavigate();

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    const handleLogout = () => {
        setUserLoggedIn(false);
        userAuthService.logout();
    };

    const handleSearchSubmit = (searchQuery) => {
        const url = `/weather?q=${searchQuery}`;
        navigate(url);
    };

    useEffect(() => {
        const handleLogin = async () => {
            try {
                const storedUser = JSON.parse(localStorage.getItem('currentUser'));

                if (storedUser) {
                    const isLogging = await userService.login(storedUser.email, storedUser.password);

                    if (isLogging) {
                        userAuthService.setUser({
                            name: storedUser.name,
                            email: storedUser.email,
                        });
                        setUser(storedUser);
                        setUserLoggedIn(true);
                    }
                }

                setCheckUser(true);
            } catch (error) {
                console.error('Error handling login:', error);
            }
        };

        handleLogin();
    }, []);

    return (


        <nav className="navbar navbar-expand-lg navbar-light navbar-container shadow-sm">   
            <div className="container d-flex justify-content-between" id='start'>
                <button
                    className={`navbar-toggler ${isNavCollapsed ? 'border-0' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse justify-content-between ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav nav-center-container col-7 justify-content-between">
                        <li className="nav-item">
                            <Link to="/" className="navbar-brand logo d-sm-none d-md-none d-lg-block"><img src={logo} alt="Weather Logo" /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/weather" className="nav-link">Weather</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/weathertravel" className="nav-link">For Travellers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/weathersport" className="nav-link">Sport Events?</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search" className="nav-link">Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <SearchInputComponent onSubmit={handleSearchSubmit}/>
                        </li>
                    </ul>

                    <ul className="navbar-nav login-nav-container col-1">
                        {userLoggedIn && (
                            <>
                                <li>
                                    <Link className='nav-link' to={`/profile/${user.email}`} >Hi, {user.name}</Link>
                                </li>
                                <li>
                                    <BoxArrowRight size={24} onClick={handleLogout} />
                                </li>
                            </>
                        )}

                        {checkUser && !userLoggedIn && (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link">Sign Up</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
