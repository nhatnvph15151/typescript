import React from 'react'
import { NavLink } from 'react-router-dom'
type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div>
            <nav className="SidebarAdmin">
                <div className="navigation1">
                    <ul>
                        <li className="list">
                            <NavLink className="NavLink" to="/admin/dashboard">
                                <span className="icon"><i className="fa-solid fa-house"></i></span>
                                <span className="title">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink className="NavLink" to="/admin/products">
                                <span className="icon"><i className="fa-solid fa-book"></i></span>
                                <span className="title ">Products</span>
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink className="NavLink" to="/admin/dashboard">
                                <span className="icon"><i className="fa-solid fa-comment"></i></span>
                                <span className="title">Message</span>
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink className="NavLink" to="/admin/dashboard">
                                <span className="icon"><i className="fa-solid fa-gear"></i></span>
                                <span className="title">Setting</span>
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink className="NavLink" to="/admin/dashboard">
                                <span className="icon"><i className="fa-solid fa-question"></i></span>
                                <span className="title">Help</span>
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink className="NavLink" to="/admin/dashboard">
                                <span className="icon"><i className="fa-solid fa-lock"></i></span>
                                <span className="title">Password</span>
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink className="NavLink" to="/">
                                <span className="icon"><i className="fa-solid fa-right-from-bracket"></i></span>
                                <span className="title">Sign Out</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar