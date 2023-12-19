import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login-form.css';
import userService from '../../service/user-service';
import MessageModal from '../message-modal/message-modal';

import { Envelope } from 'react-bootstrap-icons';
import userAuthService from '../../service/user-auth';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleShow = (msg) => {
        setMessage(msg);
        setModalShow(true);
    };

    const handleHide = () => {
        setModalShow(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const data = await userService.login(email, password);

            if (data.status === 200) {
                userAuthService.setUser({
                    name: data.user.name,
                    email: email
                })

                localStorage.setItem('currentUser', JSON.stringify({
                    name: data.user.name,
                    email: email,
                    password: password
                }));
                window.location.href = '/';
            } else {
                handleShow(data.message);
            }
        } catch (error) {
            handleShow(error);
        }
    };

    return (
        <>
            <form onSubmit={handleLogin} className="login-container">
                <h4>Login</h4>
                <hr></hr>
                <div className="mb-3 input-group">

                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-3 input-group">

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <p className="signup-link">
                    Don't have an account yet? <Link to="/signup">Sign Up</Link>
                </p>
                <button type="submit" className="border-button">
                    Login
                </button>
            </form>

            <MessageModal show={modalShow} onHide={handleHide} message={message} />
        </>
    );
};

export default LoginForm;
