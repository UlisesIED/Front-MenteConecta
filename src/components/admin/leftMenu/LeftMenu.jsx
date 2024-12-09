import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { GiBrain } from "react-icons/gi";
import { SiJupyter } from "react-icons/si";

import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";

import './LeftMenu.css';

export function LeftMenu(props) {
    const { children } = props;
    const { pathname } = useLocation();

    return (
        <div className="side-menu-admin">
            <MenuLeft pathname={pathname} />
            <div className="content">{children}</div>
        </div>
    )
}

function MenuLeft(props) {
    const { pathname } = props;
    const { auth } = useAuth();
    const role = 0;

    const menus = [
        <MenuAdmin pathname={pathname} />
    ]

    return menus[role];
}

function MenuAdmin(props) {

    const { pathname } = props;
    return (
        <Nav
            activeKey="/admin"
            className="nav-conteiner"
        >
            <Nav.Item className="menu-sub" >
                <div>
                    <center>
                        <GiBrain className="logo" />
                    </center>
                </div>
            </Nav.Item>

            <Nav.Item className="menu-sub">
                <Nav.Link
                    className="text-nav"
                    as={Link}
                    to={"/admin"}
                    active={pathname === "/admin"}
                >
                    <FaHome className="icon" /> Inicio
                </Nav.Link>
            </Nav.Item>

            <Nav.Item className="menu-sub">
                <Nav.Link
                    className="text-nav"
                    as={Link}
                    to={"/admin/estadisticas"}
                    active={pathname === "/admin/estadisticas"}
                >
                    <FcStatistics className="icon" /> Estadisticas
                </Nav.Link>
            </Nav.Item>

            <Nav.Item className="menu-sub">
                <Nav.Link
                    className="text-nav"
                    href="https://menteconecta.net/jupyterhub"
                >
                    <SiJupyter className="icon" /> Jupyter Notebook
                </Nav.Link>
            </Nav.Item>

        </Nav>
    );
}