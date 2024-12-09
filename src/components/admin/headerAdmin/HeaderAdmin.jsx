import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks";
import './HeaderAdmin.css';


export function HeaderAdmin() {
  const { auth, logout } = useAuth();
  const nav = useNavigate();
  const renderName = () => {
    if (auth.me?.nombre && auth.me?.apellido_paterno) {
      return `${auth.me.nombre.toUpperCase()} ${auth.me.apellido_paterno.toUpperCase()}`;
    }
    return auth.me?.email;
  };

  const regresar = () => {
    logout();
    nav("/");
  };

  return (
    <Navbar bg="light" variant="light" className="top-menu-admin">
      <Nav className="justify-content-end w-50 ">
      </Nav>
      <Navbar.Toggle />
      <Container>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Item className="cerrar-sesion">
            {renderName()}
          </Nav.Item>
          <Nav.Item>
            <FaRegUserCircle className="logo" />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={regresar} className="cerrar-sesion">
              Cerrar Sesión
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
