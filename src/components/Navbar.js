import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <div>
            <nav style={{ width: '100%' }} className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News-Monkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <ul className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                </ul>
                            </ul>
                        </ul>
                        <div className="form-check form-switch"  >
                            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label style={{ color: (props.mode === 'light' ? 'black' : 'white') }} className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to {props.mode === 'light' ? 'dark' : 'light'} mode</label>
                        </div>
                    </div>
                </div></nav> </div>)}
